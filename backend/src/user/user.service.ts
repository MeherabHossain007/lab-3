import { Injectable, NotFoundException } from '@nestjs/common';
import { UserCredDTO } from './dto/user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from 'models/users.model';

@Injectable()
export class UserService {
  private readonly email: string = 'abc@gmail.com';
  private readonly password: string = 'abc1234';

  constructor(
    @InjectRepository(Users) private readonly userRepository: Repository<Users>,
  ) {}

  userAuth(userCredential: UserCredDTO): boolean {
    if (
      userCredential.email === this.email &&
      userCredential.password === this.password
    ) {
      return true;
    } else {
      return false;
    }
  }

  async getbyID(id: number) {
    try {
      const user = await this.userRepository.findOne({ where: {id} });
      return user;
    } catch (error) {
      throw new NotFoundException('User not found');
    }
  }
}
