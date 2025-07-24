import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuración Swagger
  const config = new DocumentBuilder()
    .setTitle('API de Usuario')
    .setDescription('Documentación del CRUD de usuarios')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // Estará disponible en /api

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
