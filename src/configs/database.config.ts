import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModuleAsyncOptions } from "@nestjs/typeorm";
import SnakeNamingStrategy from "typeorm-naming-strategy";

export const typeOrModuleAsyncOptions:TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: (configService:ConfigService)=>({
    namingStrategy: new SnakeNamingStrategy,
    type: 'mysql',
    host: configService.get<string>('DB_HOST'),
    port: configService.get<number>('DB_PORT'),
    username: configService.get<string>('DB_USERNAME'),
    password: configService.get<string>('DB_PASSWORD'),
    database: configService.get<string>('DB_DATABASE'),
    synchronize: configService.get<boolean>('DB_SYNC'),
    autoLoadEntities: true, //따로 entity를 모듈시키지않아도 자동적으로 모듈화시켜지는 ?
    logging: true, // DB에서 쿼리가 발생할때마다  로우쿼리가 출력이 되게하는 옵션
  }),
}