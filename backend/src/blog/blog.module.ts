import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import { Users } from 'models/users.model';
import { BlogController } from './blog.controller';
import { BlogService } from './blog.services';


@Module({
  imports: [TypeOrmModule.forFeature([Users])],
  controllers: [BlogController],
  providers: [BlogService]
})
export class UserModule {}