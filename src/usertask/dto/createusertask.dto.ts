import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString} from "class-validator";


export class CreateUserTaskDto {
    @IsString({
        context: {
            errorCode: "E1000",
            errorMessage: "Invalid Format."
        },
    })
    @IsNotEmpty({
        context: {
            errorCode: "E1000",
            errorMessage: "Name is required."
        },
    })
    @ApiProperty()
    userName: string;

    @IsNotEmpty({
        context: {
            errorCode: "E1000",
            errorMessage: "Task is required."
        },
    })
    @ApiProperty()
    task: string;

    @IsString({
        context: {
            errorCode: "E1000",
            errorMessage: "Invalid Format."
        },
    })
    @IsNotEmpty({
        context: {
            errorCode: "E1000",
            errorMessage: "Task Date is required."
        },
    })
    @ApiProperty()
    taskDate: string;


    @IsString({
        context: {
            errorCode: "E1000",
            errorMessage: "Invalid Format."
        },
    })
    @ApiProperty()
    description: string;
}