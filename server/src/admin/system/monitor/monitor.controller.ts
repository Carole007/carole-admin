import { Constants } from '@/common/constant/Constants';
import Result from '@/common/result/Result';
import { RequirePermission } from '@/common/decorator/require-premission.decorator';
import { redisUtils } from '@/common/utils/redisUtils';
import { getServerInfo } from '@/common/utils/systemInfo';
import {
  Controller,
  Delete,
  Get,
  Param,
  ParseArrayPipe,
  Query,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Throttle } from '@nestjs/throttler';
@ApiTags('系统监控')
@ApiBearerAuth()
@Controller('/monitor')
export class monitorController {
  constructor() {}
  @ApiOperation({ summary: '获取redis信息' })
  @Throttle({
    default: {
      limit: 10,
      ttl: 1000 * 60,
    },
  })
  @Get('/cache')
  async getCacheInfo() {
    return Result.ok(await redisUtils.getRedisInfo());
  }
  @ApiOperation({ summary: '获取服务器信息' })
  @Throttle({
    default: {
      limit: 10,
      ttl: 1000 * 60,
    },
  })
  @Get('/server')
  async getInfo() {
    return Result.ok(await getServerInfo());
  }

  @ApiOperation({ summary: '获取在线用户信息' })
  @Throttle({
    default: {
      limit: 20,
      ttl: 1000 * 60,
    },
  })
  @RequirePermission('monitor:online:query')
  @Get('/online/list')
  async getOnlineList(@Query() { ipaddr = '', userName = '' }) {
    const tokens = await redisUtils.scanStream(Constants.LOGIN_TOKEN_KEY + '*');
    if (!tokens.length) {
      return Result.TableData({
        rows: [],
        total: 0,
      });
    }
    let userList = (await redisUtils.mget(tokens)).map((v) => JSON.parse(v));
    userList = userList.filter(
      (v) => v.loginLocation.includes(ipaddr) && v.userName.includes(userName),
    );
    userList.sort((a, b) => +new Date(b.loginTime) - +new Date(a.loginTime));
    return Result.TableData({
      rows: userList,
      total: userList.length,
    });
  }

  @ApiOperation({ summary: '强退用户' })
  @Throttle({
    default: {
      limit: 20,
      ttl: 1000 * 60,
    },
  })
  @RequirePermission('monitor:online:batchLogout')
  @Delete('/online/:tokenId')
  async forceLogout(@Param('tokenId', ParseArrayPipe) tokenIds: string[]) {
    for (const tokenId of tokenIds) {
      const user = JSON.parse(
        (await redisUtils.get(Constants.LOGIN_TOKEN_KEY + tokenId)) || null,
      );
      if (user) {
        //不可强退超级管理员
        if (user.userId === 1) return Result.Error('不可强退超级管理员！');
        await redisUtils.del(Constants.LOGIN_TOKEN_KEY + tokenId);
      }
    }
    return Result.ok('操作成功！');
  }
}
