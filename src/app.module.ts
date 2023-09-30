import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsertaskModule } from './usertask/usertask.module';

@Module({
  imports: [UsertaskModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
