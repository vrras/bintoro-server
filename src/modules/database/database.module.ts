import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getTypeOrmModuleOptions } from '../../helpers/database.helper';
import { ConfigModule } from '../config/config.module';
import { ConfigService } from '../config/config.service';

/**
 * Install dependencies: npm install --save @nestjs/typeorm typeorm mysql
 */
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        const typeOrmConfig = getTypeOrmModuleOptions(config.get('DB_TYPE'));

        return {
          ...typeOrmConfig,
          host: config.get('DB_HOST'),
          port: Number(config.get('DB_PORT')),
          username: config.get('DB_USERNAME'),
          password: config.get('DB_PASSWORD'),
          database: config.get('DB_DATABASE'),
          synchronize: config.getBoolean('DB_AUTO_GENERATE_DDL'),
          keepConnectionAlive: true,
          entities: [__dirname + '/../../models/*{.ts,.js}'],
          logging: config.getBoolean('DB_LOGGING'),
          charset: 'utf8mb4',
        };
      },
    }),
  ],
})
export class DatabaseModule {}
