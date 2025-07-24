import { Test, TestingModule } from '@nestjs/testing';
import { UsuarioService } from './usuario.service';
import { usuario } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

describe('UsuarioService', () => {
  let service: UsuarioService;
  let prisma: PrismaService;

  const mockUsuario: usuario = {
    id: 1,
    name: 'Test User',
    email: 'test@example.com',
  };

  const mockPrisma = {
    usuario: {
      create: jest.fn().mockResolvedValue(mockUsuario),
      findMany: jest.fn().mockResolvedValue([mockUsuario]),
      findUnique: jest.fn().mockResolvedValue(mockUsuario),
      update: jest.fn().mockResolvedValue(mockUsuario),
      delete: jest.fn().mockResolvedValue(mockUsuario),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsuarioService,
        {
          provide: PrismaService,
          useValue: mockPrisma,
        },
      ],
    }).compile();

    service = module.get<UsuarioService>(UsuarioService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should create a user', async () => {
    const result = await service.create({ name: 'Test User', email: 'test@example.com' });
    expect(result).toEqual(mockUsuario);
    expect(prisma.usuario.create).toHaveBeenCalledWith({
      data: { name: 'Test User', email: 'test@example.com' },
    });
  });

  it('should return all users', async () => {
    const result = await service.findAll();
    expect(result).toEqual([mockUsuario]);
  });

  it('should return one user', async () => {
    const result = await service.findOne(1);
    expect(result).toEqual(mockUsuario);
    expect(prisma.usuario.findUnique).toHaveBeenCalledWith({ where: { id: 1 } });
  });

  it('should update a user', async () => {
    const result = await service.update(1, { name: 'Updated' });
    expect(result).toEqual(mockUsuario);
    expect(prisma.usuario.update).toHaveBeenCalledWith({
      where: { id: 1 },
      data: { name: 'Updated' },
    });
  });

  it('should delete a user', async () => {
    const result = await service.remove(1);
    expect(result).toEqual(mockUsuario);
    expect(prisma.usuario.delete).toHaveBeenCalledWith({ where: { id: 1 } });
  });
});
