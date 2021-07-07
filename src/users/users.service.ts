import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
      ) {}
    
      findAll(): Promise<User[]> {
        return this.usersRepository.find();
      }
    
      findOne(id: string): Promise<User> {
        return this.usersRepository.findOne(id);
      }
    
      async remove(id: string): Promise<void> {
        await this.usersRepository.delete(id);
      }

      async create(createUserDto : CreateUserDto) : Promise<User> {
        console.log(createUserDto);
        const user = this.usersRepository.create(createUserDto);
        return this.usersRepository.save(user);
      }

      async deleteOne(userId: number)  {
        return this.usersRepository.delete(userId)
      }
      
      async update(userId: number, updateUserDto : UpdateUserDto) {
        return this.usersRepository.update(userId, updateUserDto)
      }

}