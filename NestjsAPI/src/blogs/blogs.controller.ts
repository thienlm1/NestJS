import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards } from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { AuthService } from '../auth/auth.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('blogs')
export class BlogsController {
  constructor(private readonly service: BlogsService) {}

  //@UseGuards(JwtAuthGuard)
  @Get(':id')
  async find(@Param('id') id: string) {
    if(id === "0"){
      console.log('Finding')
      return await this.service.findAll();
    }
    console.log("here!")
    return await this.service.findOne(id);
  }

  @Post()
  async create(@Body() createTodoDto: CreateBlogDto) {
    return await this.service.create(createTodoDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateTodoDto: UpdateBlogDto) {
    return await this.service.update(id, updateTodoDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.service.delete(id);
  }
}
