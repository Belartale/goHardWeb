import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from '../users.dto';
import { User, UserDocument } from '../schemas/user.schema';

@Injectable()
export class RegisterService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(userDto: CreateUserDto): Promise<User> {
    const newUser = new this.userModel(userDto);
    return newUser.save();
  }
}
