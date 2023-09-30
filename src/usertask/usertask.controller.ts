import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsertaskService } from './usertask.service';
import { FindUserTaskRequestDto } from './dto/findusertask.dto';
import { CreateUserTaskDto } from './dto/createusertask.dto';

@Controller('usertask')
export class UsertaskController {
    constructor(private readonly userTaskService: UsertaskService) {}

  @Get()
  async findAll(): Promise<FindUserTaskRequestDto[]> {
    return this.userTaskService.getAll();
  }

  @Post()
  async create(@Body() userTaskData: CreateUserTaskDto): Promise<FindUserTaskRequestDto> {
    return this.userTaskService.create(userTaskData);
  }
}
