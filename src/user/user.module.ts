import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entitiy';
import { Book } from 'src/book/entities/book.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Book])], //forFeature: CRUD작업을 수행하는 메서드를 자동으로 생성
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
