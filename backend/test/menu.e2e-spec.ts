import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { PrismaService } from '../src/common/prisma/prisma.service';

describe('MenuController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const mockPrismaService = {
      categories: { findMany: jest.fn().mockResolvedValue([{ id: 1, name: 'Food', active: true }]) },
      menu_items: { findMany: jest.fn().mockResolvedValue([{ id: 1, name: 'Burger', price: 10, category_id: 1, available: true }]) },
    };

    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(PrismaService)
      .useValue(mockPrismaService)
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/api/menu/categories (GET)', () => {
    return request(app.getHttpServer())
      .get('/api/menu/categories')
      .expect(200)
      .expect((res) => {
        expect(res.body.success).toBe(true);
        expect(Array.isArray(res.body.data)).toBe(true);
      });
  });

  it('/api/menu/items (GET)', () => {
    return request(app.getHttpServer())
      .get('/api/menu/items')
      .expect(200)
      .expect((res) => {
        expect(res.body.success).toBe(true);
        expect(Array.isArray(res.body.data)).toBe(true);
      });
  });
});
