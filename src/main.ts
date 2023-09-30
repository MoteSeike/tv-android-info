import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Tv-Android Info')
    .setDescription('The Tv-Android API description')
    .setVersion('1.0')
    .addTag('usertask')
    .setContact("Hello world", "/test", "test@df.com")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, { customSiteTitle: "Tv-Android Backend", });
  app.enableCors({
    origin: '*',
    allowedHeaders: 'Origin,X-Requested-Width,Content-Type,Accept,'
  });
  const port = 3005;
  await app.listen(port);
  Logger.debug(`Application common listen port ${port} `)
}
bootstrap();
