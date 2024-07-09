import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entitiy';
import { Localstrategy } from './stategies/local.strategy';

//데코레이터 : 함수나 메서드에 적용되어, 해당 함수나 메서드의 기능을 확장하거나 변경하는 역할
@Module({
  imports: [TypeOrmModule.forFeature([User])],// User 엔터티를 사용하여 TypeORM 모듈을 가져옵니다.
  controllers: [AuthController], // 인증 관련 HTTP 요청을 처리하는 컨트롤러입니다.
  providers: [AuthService, Localstrategy], // 인증 비즈니스 로직을 처리하는 서비스와 로컬 전략을 제공하는 프로바이더입니다.
})
export class AuthModule {}
