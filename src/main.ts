if (process.env.IS_TS_NODE !== 'true') {
  require('module-alias/register');
} //just require it on production since its a module for JS custom absolute paths @app/

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
