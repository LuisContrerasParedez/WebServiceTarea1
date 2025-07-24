import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('UsuarioController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('POST /usuario - crea un nuevo usuario', async () => {
    const response = await request(app.getHttpServer())
      .post('/usuario')
      .send({
        name: 'Juan Test',
        email: 'juan@test.com',
      });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body.name).toBe('Juan Test');
    expect(response.body.email).toBe('juan@test.com');
  });

  it('GET /usuario - lista todos los usuarios', async () => {
    const response = await request(app.getHttpServer()).get('/usuario');

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});
