import { ApiProperty } from "@nestjs/swagger";
import { IsEmail,  IsNotEmpty, IsString, MaxLength } from "class-validator";


export class FindUserTaskRequestDto {
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

export class FindUserTaskResponseDto {

    // @ApiProperty()
    // userId: number;

    @ApiProperty()
    userName: string;

    @ApiProperty()
    task: string;

    @ApiProperty()
    taskDate: string;
    
    @ApiProperty()
    description: string;

}