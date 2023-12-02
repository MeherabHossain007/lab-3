import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BlogService } from './blog.services';
import { Blogs } from 'models/blog.model';

@Controller('user')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}
  @Get(':usrd_id')
  getUser(@Param('user_id') userId: string): Promise<string | Blogs> {
      return this.blogService.getbyID(userId);
  }

}
