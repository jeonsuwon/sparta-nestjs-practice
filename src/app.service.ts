import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {} //DI 의존성주입 app.module.ts에서 config를 전역으로 사용에 사용하여 사용가능?
  getHello(): string {
    return `Hello World! ${this.configService.get('SERVER_PORT')}`;
  }
}
