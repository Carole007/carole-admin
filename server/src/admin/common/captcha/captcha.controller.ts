import { Controller, Get } from '@nestjs/common';
import { createMath, createText } from '@/common/utils/captcha';
import { Config } from '@/config';
import { redisUtils } from '@/common/utils/redisUtils';
import Result from '@/common/result/Result';
import { Constants } from '@/common/constant/Constants';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import CaptchaImageVo from './vo/CaptchaImageVo';
import { randomUUID } from 'crypto';
import { Throttle } from '@nestjs/throttler';
@ApiTags('验证码模块')
@Controller('/captchaImage')
export class CaptchaController {
  /*
   * 生成验证码
   * */
  @Get()
  @ApiOperation({
    summary: '获取验证码',
  })
  @ApiOkResponse({
    type: CaptchaImageVo,
  })
  @Throttle({
    default: {
      limit: 8,
      ttl: 1000 * 60,
    },
  })
  async getCaptchaImage() {
    const map = {
      math: createMath,
      text: createText,
    };
    //根据配置的是math还是text自动调用方法生成数据
    const captchaInfo = map[Config.captcha.mode]();
    //是否开启验证码
    const enable = await redisUtils.get(
      Constants.SYS_CONFIG_KEY + 'sys.account.captchaEnabled',
    );
    const captchaEnabled: boolean = enable == '' ? true : enable === 'true';
    const data = {
      captchaEnabled,
      img: captchaInfo.data,
      uuid: randomUUID(),
    };
    try {
      await redisUtils.set(
        Constants.CAPTCHA_CODE_KEY + data.uuid,
        captchaInfo.text.toLowerCase(),
        Config.captcha.expiresIn,
      );
      return data;
    } catch (err) {
      return Result.Error('生成验证码错误，请重试');
    }
  }
}
