import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import {  FindUserTaskResponseDto } from './dto/findusertask.dto';
import { CreateUserTaskDto } from './dto/createusertask.dto';
import { UserTaskGateway } from './usertask.gateway';

@Injectable()
export class UsertaskService {
    constructor(private prisma: PrismaService,private userTaskGateway: UserTaskGateway,) {
        
     }
    
      async getAll(): Promise<FindUserTaskResponseDto[]> {
        const getUserTask=await this.prisma.user.findMany({});
        return (
            getUserTask.map((a) => {
                const userdto = new FindUserTaskResponseDto();
                userdto.userName = a.user_name;
                userdto.task = a.task;
                userdto.description=a.descrption;
                // userdto.userId=a.user_id;
                return userdto;
            }));
      }
    
      async create(userTaskData: CreateUserTaskDto): Promise<FindUserTaskResponseDto> {
        const newUserTaskData = await this.prisma.user.create({
          data:{
            user_name:userTaskData.userName,
            task:userTaskData.task,
            task_date:userTaskData.taskDate,
            descrption:userTaskData.description
          },
        });
        this.userTaskGateway.notify('usertask-added', newUserTaskData);
        const responseData=new FindUserTaskResponseDto();
        // responseData.userId=newUserTaskData.user_id,
        responseData.userName=newUserTaskData.user_name,
        responseData.task=newUserTaskData.task,
        responseData.taskDate=newUserTaskData.task_date,
        responseData.description=newUserTaskData.descrption
        return responseData;
      }
}
