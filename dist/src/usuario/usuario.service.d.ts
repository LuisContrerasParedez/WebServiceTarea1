import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
export declare class UsuarioService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateUsuarioDto): import(".prisma/client").Prisma.Prisma__usuarioClient<{
        id: number;
        email: string;
        name: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        email: string;
        name: string;
    }[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__usuarioClient<{
        id: number;
        email: string;
        name: string;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    update(id: number, dto: UpdateUsuarioDto): import(".prisma/client").Prisma.Prisma__usuarioClient<{
        id: number;
        email: string;
        name: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__usuarioClient<{
        id: number;
        email: string;
        name: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
}
