import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //class가 따로 있지않아서 의존성 주입을 할수없어 직접적으로 가져와야한다.
  const configService = app.get(ConfigService);
  const port = configService.get<number>('SERVER_PORT');

  app.setGlobalPrefix('api'); //주소앞에 전역으로 api를 붙여 사용하겠다 .

  app.useGlobalPipes(new ValidationPipe({
    transform:true/*자동적인 타입변환 */, 
    whitelist:true, 
    forbidNonWhitelisted:true //Dto의 정의되있지않는 값을 사용하면 에러가 나도록 설정
  })
)
  const config = new DocumentBuilder()
  .setTitle('Cats example')
  .setDescription('The cats API description')
  .setVersion('1.0')
  .addTag('cats')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(port);
}
bootstrap();
