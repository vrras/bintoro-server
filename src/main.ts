import { Config } from './helpers/config.helper';
import { ValidationPipe } from './pipes/validation.pipe';
import { ApplicationContext } from './app.context';

async function bootstrap() {
  const app = await ApplicationContext();
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(Config.getNumber('APP_PORT'));
}
bootstrap();
