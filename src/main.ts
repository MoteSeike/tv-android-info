import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
    allowedHeaders: 'Origin,X-Requested-Width,Content-Type,Accept,'
  });

  const config = new DocumentBuilder()
    .setTitle('Lotaya')
    .setDescription('User Task API common')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.getHttpAdapter().getInstance().set('etag', false);
  const port = 3518;
  await app.listen(port).then(() => {
    Logger.overrideLogger(['error', 'warn', 'log', 'debug']);
  });
  Logger.debug(`Application common listen port ${port} `)
}
bootstrap();
