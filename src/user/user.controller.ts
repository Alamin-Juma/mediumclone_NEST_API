import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/CreateUser.dto';


@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

    @Post('users')
    async createUser(@Body('user') createUserDto: CreateUserDto): Promise<any> {
        console.log('createUser', createUserDto)
        return this.userService.createUser(createUserDto)
    }

} 