import { Optional } from "@nestjs/common";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class SigninDto {

  @IsNotEmpty()
  @IsString()
  identifier: string;

  @IsNotEmpty()
  @IsString()
  password : string;
}