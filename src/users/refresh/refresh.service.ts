import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../schemas/user.schema';

@Injectable()
export class RefreshService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async get(id: string | number): Promise<User> {
    return this.userModel.findById(id);
  }
}
