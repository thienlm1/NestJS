import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { Blog, BlogDocument } from './schemas/blog.schemas';

@Injectable()
export class BlogsService {
  constructor(@InjectModel(Blog.name) private readonly model: Model<BlogDocument>) { }

  async findAll(): Promise<Blog[]> {
    console.log('findAll')
    return await this.model.find().exec();
  }

  async findOne(id: string): Promise<Blog> { 
    console.log('findOne')
    return await this.model.findById(id).exec();
  }

  async create(createTodoDto: CreateBlogDto): Promise<Blog> {
    return await new this.model({
      ...createTodoDto,
      createdAt: new Date(),
    }).save();
  }

  async update(id: string, updateTodoDto: UpdateBlogDto): Promise<Blog> {
    return await this.model.findByIdAndUpdate(id, updateTodoDto).exec();
  }

  async delete(id: string): Promise<Blog> {
    return await this.model.findByIdAndDelete(id).exec();
  }
}
