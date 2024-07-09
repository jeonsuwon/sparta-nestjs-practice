import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configModulvalidationSchema } from './configs/env.validation.config';
import { typeOrModuleAsyncOptions } from './configs/database.config';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ShowModule } from './show/show.module';



@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: configModulvalidationSchema,
    }),
    TypeOrmModule.forRootAsync(typeOrModuleAsyncOptions),
    AuthModule,
    UserModule,
    ShowModule
  ], // isGlobal: true를 사용함으로 별도의 import 없이 모든Moudle에서 사용이가능하다. 자동정렬이있나...?
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
