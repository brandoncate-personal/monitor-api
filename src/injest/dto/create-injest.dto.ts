import { IsIn, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateInjestDto {
    @IsNotEmpty()
    @IsString()
    name!: string;

    @IsNotEmpty()
    @IsNumber()
    @IsIn([200, 300, 400, 500])
    statusCode!: number;

    @IsOptional()
    @IsString()
    stdout?: string;

    @IsOptional()
    @IsString()
    stderr?: string;
}
