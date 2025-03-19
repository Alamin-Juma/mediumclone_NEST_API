import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { CreateUserDto } from './dto/CreateUser.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity) 
    private readonly tagRepository: Repository<UserEntity>
  ) { }
  async createUser(createDto: CreateUserDto): Promise<UserEntity> {
    const newUser = new UserEntity()
    Object.assign(newUser, createDto )
    console.log('newUser', newUser)
    return this.tagRepository.save(newUser)
  }
}
