import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { BlogsModule } from './blogs/blogs.module';

@Module({
  imports: [UsersModule,MongooseModule.forRoot('mongodb://localhost/nest'), AuthModule, BlogsModule],
  controllers: [AppController ],
  providers: [AppService],
})
export class AppModule {}
