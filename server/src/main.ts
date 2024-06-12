
import 'module-alias/register'
import { join } from "path"
import {config} from "dotenv"
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { Config } from '@/config';
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { lightBlue } from "kolorist";
import { Constants } from './common/constant/Constants';
config({path:join(__dirname,".env")})
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)
  app.set('trust proxy', true)
  app.disable('x-powered-by')
  app.setGlobalPrefix(Config.contextPath||"/")
  app.enableCors()
  app.useStaticAssets(Config.upload.path,{ prefix: Config.contextPath.replace(/\/$/,"") +"/file",maxAge: 86400000 * 365})
  app.useStaticAssets(Config.upload.path, { prefix: Config.contextPath.replace(/\/$/, "") + Constants.FILE_PREFIX, maxAge: 86400000 * 365 })
  if (Config.swagger.enable) { 
    const options = new DocumentBuilder()  
      .setTitle('Carole后台管理系统接口文档')  
      .setDescription('Carole后台管理系统接口文档')  
      .setVersion('1.0') 
      .addBearerAuth()
      .addTag('NestJS')  
      .build();  
    const document = SwaggerModule.createDocument(app, options);  
    SwaggerModule.setup(Config.contextPath.replace(/\/$/,"") + Config.swagger.prefix, app, document);  
  }
  await app.listen(Config.port);
  console.log(lightBlue(`server is running to http://localhost:${Config.port}`))
}
bootstrap();
