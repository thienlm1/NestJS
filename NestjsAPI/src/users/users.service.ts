import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './schemas/user.schemas';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private readonly model: Model<UserDocument>) { }

  private readonly usersLogin = [
    {
      userId: 1,
      email: 'admin@gmail.com',
    },
    {
      userId: 2,
      email: 'thien@gmail.com',
    },
  ]

  async findUserLogin(email: string): Promise<User | undefined> {
    console.log("Here!")
    return this.usersLogin.find(user => user.email === email)
  }

  async findAll(): Promise<User[]> {
    return await this.model.find().exec();
  }

  async findOne(id: string): Promise<User> {
    return await this.model.findById(id).exec();
  }

  async create(createTodoDto: CreateUserDto): Promise<User> {
    return await new this.model({
      ...createTodoDto,
      createdAt: new Date(),
    }).save();
  }

  async update(id: string, updateTodoDto: UpdateUserDto): Promise<User> {
    return await this.model.findByIdAndUpdate(id, updateTodoDto).exec();
  }

  async delete(id: string): Promise<User> {
    return await this.model.findByIdAndDelete(id).exec();
  }
}
