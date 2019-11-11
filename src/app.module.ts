import { Module, MiddlewareConsumer, NestModule, RequestMethod } from '@nestjs/common';
import { AuthMiddleware } from './middleware/auth.middleware';
import { ConfigModule } from './modules/config/config.module';
import { DatabaseModule } from './modules/database/database.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';

@Module({
  imports: [
    ConfigModule,
    DatabaseModule,
    JwtModule.register({
      secretOrPrivateKey: 'firas12345',
    }),
  ],
  controllers: [
    AuthController,
  ],
  providers: [
    AuthService,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).exclude({ path: '/auth/login', method: RequestMethod.ALL }).forRoutes(
      AuthController,
    );
  }
}
