import { Module } from '@nestjs/common';
import { UsertaskController } from './usertask.controller';
import { UsertaskService } from './usertask.service';
import { UserTaskGateway } from './usertask.gateway';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [UsertaskController],
  providers: [UsertaskService,UserTaskGateway,PrismaService],
})
export class UsertaskModule {}
