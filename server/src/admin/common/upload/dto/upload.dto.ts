import { ApiProperty } from '@nestjs/swagger';

export class UploadFileDto {
  @ApiProperty({
    example: '文件',
    description: '上传文件',
  })
  file: Express.Multer.File;
}

export class UploadFilesDto {
  @ApiProperty({
    example: ['文件'],
    description: '上传多个文件',
  })
  files: Express.Multer.File[];
}
