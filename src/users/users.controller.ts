import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}  //서비스에 접근할수 있는 요청 코드

    @Get('')
    getHello(): Promise<User[]> {
      return this.usersService.findAll();
    }

    @Get(':id')
    getUserById(@Param('id') userId : string) : Promise<User> {
      return this.usersService.findOne(userId);
    }

    @Post()
    create(@Body() createUserDto: CreateUserDto ) : Promise<User> {
      return this.usersService.create(createUserDto);
    }
    
    @Patch(':id')
    update(@Param('id') userId : number, @Body() updateUserDto: UpdateUserDto) {
      return this.usersService.update(userId, updateUserDto);
    }

    @Delete(':id')
    remove(@Param('id') userId: number) {
      return this.usersService.deleteOne(userId);
    }  
}
