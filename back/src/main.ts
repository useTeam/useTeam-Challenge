import { NestFactory } from '@nestjs/core';
import { AppModule } from './module/app/app.module';
import { ConfigService } from '@nestjs/config';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  app.enableCors(configService.get('frontend.url'));
  
  await app.listen(configService.get('server.port') ?? 3000);
  
}
bootstrap();
