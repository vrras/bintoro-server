import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { UrlAuthMiddleware } from './middleware/url-auth.middleware';
import { ConfigModule } from './modules/config/config.module';
import { DatabaseModule } from './modules/database/database.module';

@Module({
  imports: [ConfigModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(UrlAuthMiddleware).forRoutes();
  }
}
