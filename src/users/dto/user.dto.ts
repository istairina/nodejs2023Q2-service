import { CreateUserDto } from './create-user.dto';

export class UserDto extends CreateUserDto {

  id: string;
  version: number; // integer number, increments on update
  createdAt: number; // timestamp of creation
  updatedAt: number; // timestamp of last update
}
