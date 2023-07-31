import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty({ default: "password" })
  oldPassword: string;

  @ApiProperty({ default: "newpassword" })
  @IsString()
  @IsNotEmpty()
  newPassword: string;
}
