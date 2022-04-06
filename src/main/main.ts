import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {SwaggerModule, DocumentBuilder} from '@nestjs/swagger'
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = 3000

  const options = new DocumentBuilder()
    .setTitle('Documentação Api')
    .setDescription('Documentação da api de catálogo')
    .setVersion('1.0.0')
    .build()

  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('api-docs', app, document)

  app.enableCors()
  await app.listen(port)

}
bootstrap();
