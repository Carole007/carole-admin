import { Global, Module } from '@nestjs/common';
import { PrismaService } from './service/prisma/prisma.service';
import { AuthService } from './service/auth/auth.service';
import { GenService } from './service/gen/gen.service';
@Global()
@Module({
  providers: [PrismaService, AuthService, GenService],
  exports: [PrismaService, AuthService],
  imports: [],
})
export class CommonModule {}
