import {
  Controller,
  Post,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import Result from '@/common/result/Result';
import {
  getFilePath,
  uploadFileConfig,
} from '@/admin/common/upload/config/uploadConfig';
import {
  ApiBearerAuth,
  ApiBody,
  ApiConsumes,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { uploadMultiple, uploadSingle } from './vo/upload';
import {
  UploadFileDto,
  UploadFilesDto,
} from '@/admin/common/upload/dto/upload.dto';

@ApiBearerAuth()
@ApiTags('文件上传模块')
@Controller()
export class UploadController {
  @Post('/common/upload')
  @ApiOperation({
    summary: '上传单个文件',
    description: '上传单个文件',
  })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    type: UploadFileDto,
  })
  @ApiOkResponse({
    schema: {
      example: uploadSingle,
    },
  })
  @UseInterceptors(FileInterceptor('file', uploadFileConfig))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      return Result.BadRequest('请选择要上传的文件！');
    }
    const data = {
      fileName: file.filename,
      newFileName: file.filename,
      originalFilename: file.originalname,
      url: getFilePath(file),
      size: file.size,
    };
    return { ...Result.ok(), ...data };
  }

  @Post('/common/uploads')
  @ApiOperation({
    summary: '上传多文件',
    description: '上传多文件',
  })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    type: UploadFilesDto,
  })
  @ApiOkResponse({
    schema: {
      example: uploadMultiple,
    },
  })
  @UseInterceptors(FilesInterceptor('files', 10, uploadFileConfig))
  async uploadFiles(@UploadedFiles() files: Express.Multer.File[]) {
    if (!files?.length) {
      return Result.BadRequest('请选择要上传的文件！');
    }
    const data = [];
    files.forEach((file) => {
      data.push({
        fileName: file.filename,
        newFileName: file.filename,
        originalFilename: file.originalname,
        url: getFilePath(file),
        size: file.size,
      });
    });
    return Result.ok(data);
  }
}
