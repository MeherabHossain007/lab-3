import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from 'models/users.model';
import { Blogs } from 'models/blog.model';

@Injectable()
export class BlogService {
  constructor(
    @InjectRepository(Users) private readonly userRepository: Repository<Blogs>,
  ) {}

  async getbyID(user_id:string) {
    try {
      const user = await this.userRepository.findOne({ where: {user_id} });
      return user;
    } catch (error) {
      throw new NotFoundException('User not found');
    }
  }
}
