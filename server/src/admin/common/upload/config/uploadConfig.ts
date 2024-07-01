import { createFolder, nowDate } from '@/common/utils';
import * as path from 'path';
import * as multer from 'multer';

import { randomUUID } from 'crypto';
import { Config } from '@/config';
import { Constants } from '@/common/constant/Constants';
let saveDir = Config.upload.path;
const avatarDir = path.join(saveDir, 'avatar');
saveDir = path.join(saveDir, 'files');
function createStorage(dir = saveDir) {
  return multer.diskStorage({
    destination: function (req, file, cb) {
      createFolder(path.join(dir, nowDate()));
      // 接收到文件后输出的保存路径（若不存在则需要创建）
      cb(null, path.join(dir, nowDate()));
    },
    filename: function (req, file, cb) {
      // 将保存文件名设置为  uuid + 文件原始名
      cb(
        null,
        +new Date() +
          randomUUID().replaceAll('-', '') +
          (path.extname(file.originalname) || '.jpg'),
      );
    },
  });
}

createFolder(saveDir);
createFolder(avatarDir);
export const uploadFileConfig = {
  storage: createStorage(saveDir),
  limits: Config.upload.config.file,
  fileFilter: function (_req, file, cb) {
    checkFileType(file, cb);
  },
};

export const uploadAvatarConfig = {
  storage: createStorage(avatarDir),
  limits: Config.upload.config.img,
  fileFilter: function (_req, file, cb) {
    checkImgFileType(file, cb);
  },
};
function checkImgFileType(file, cb) {
  const filetypes = ['jpeg', 'jpg', 'png', 'gif'];
  const mimetypes = [
    'image/png',
    'image/jpeg',
    'image/jpg',
    'image/webp',
    'image/gif',
  ];
  const extname = filetypes.includes(
    file.originalname.split('.').pop().toLowerCase(),
  );
  const mimetype = mimetypes.includes(file.mimetype);
  if (mimetype && extname) {
    return cb(null, true);
  } else {
    const err = new multer.MulterError(
      <
        | 'LIMIT_PART_COUNT'
        | 'LIMIT_FILE_SIZE'
        | 'LIMIT_FILE_COUNT'
        | 'LIMIT_FIELD_KEY'
        | 'LIMIT_FIELD_VALUE'
        | 'LIMIT_FIELD_COUNT'
        | 'LIMIT_UNEXPECTED_FILE'
      >'TypeError',
    );
    err.message = '只允许上传图片类型！';
    cb(err, false);
  }
}

function checkFileType(file, cb) {
  const fileTypes = [
    // 图片
    'gif',
    'jpg',
    'jpeg',
    'png',
    // word excel powerpoint
    'doc',
    'docx',
    'csv',
    'text/csv',
    'xls',
    'xlsx',
    'ppt',
    'pptx',
    'txt',
    // 压缩文件
    'rar',
    'zip',
    'gz',
    // 视频格式
    'mp4',
    'avi',
    // pdf
    'pdf',
  ];
  const mimeTypes = [
    'image/gif',
    'image/jpeg',
    'image/jpeg',
    'image/png',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/vnd.ms-powerpoint',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'text/plain',
    'application/vnd.rar',
    'application/zip',
    'application/gzip',
    'video/mp4',
    'video/x-msvideo',
    'application/pdf',
    'application/x-zip-compressed',
  ];
  const extname = fileTypes.includes(
    file.originalname.split('.').pop().toLowerCase(),
  );
  const mimetype = mimeTypes.some((v) => file.mimetype.includes(v));
  if (mimetype && extname) {
    return cb(null, true);
  } else {
    const err = new multer.MulterError(
      <
        | 'LIMIT_PART_COUNT'
        | 'LIMIT_FILE_SIZE'
        | 'LIMIT_FILE_COUNT'
        | 'LIMIT_FIELD_KEY'
        | 'LIMIT_FIELD_VALUE'
        | 'LIMIT_FIELD_COUNT'
        | 'LIMIT_UNEXPECTED_FILE'
      >'error',
    );
    err.message = '不允许上传的文件！';
    cb(err, false);
  }
}

export function getFilePath(file: Express.Multer.File) {
  const configPath = Config.upload.path.replace(/\\+/g, '/');
  const uploadPath = file.path.replace(/\\+/g, '/');
  return Constants.FILE_PREFIX + uploadPath.replace(configPath, '');
}
