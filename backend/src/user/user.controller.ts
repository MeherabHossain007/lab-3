import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserCredDTO } from './dto/user.dto';
import { UserService } from './user.service';
import { Users } from 'models/users.model';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get(':id')
  getUser(@Param('id') userId: string): Promise<string | Users> {
      return this.userService.getbyID(Number(userId));
  }

  @Post('login')
  userLogin(@Body() userCredential: UserCredDTO): any {
    return this.userService.userAuth(userCredential);
  }
}
