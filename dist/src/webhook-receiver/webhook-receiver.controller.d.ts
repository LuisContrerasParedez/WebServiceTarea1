import { WebhookReceiverService } from './webhook-receiver.service';
import { CreateWebhookReceiverDto } from './dto/create-webhook-receiver.dto';
import { UpdateWebhookReceiverDto } from './dto/update-webhook-receiver.dto';
export declare class WebhookReceiverController {
    private readonly webhookReceiverService;
    constructor(webhookReceiverService: WebhookReceiverService);
    create(dto: CreateWebhookReceiverDto): import(".prisma/client").Prisma.Prisma__WebhookEventClient<{
        id: number;
        tipo: string;
        datos: import("@prisma/client/runtime/library").JsonValue;
        source: string | null;
        headers: import("@prisma/client/runtime/library").JsonValue | null;
        status: import(".prisma/client").$Enums.EventStatus;
        receivedAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        tipo: string;
        datos: import("@prisma/client/runtime/library").JsonValue;
        source: string | null;
        headers: import("@prisma/client/runtime/library").JsonValue | null;
        status: import(".prisma/client").$Enums.EventStatus;
        receivedAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__WebhookEventClient<{
        id: number;
        tipo: string;
        datos: import("@prisma/client/runtime/library").JsonValue;
        source: string | null;
        headers: import("@prisma/client/runtime/library").JsonValue | null;
        status: import(".prisma/client").$Enums.EventStatus;
        receivedAt: Date;
        updatedAt: Date;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    update(id: number, dto: UpdateWebhookReceiverDto): import(".prisma/client").Prisma.Prisma__WebhookEventClient<{
        id: number;
        tipo: string;
        datos: import("@prisma/client/runtime/library").JsonValue;
        source: string | null;
        headers: import("@prisma/client/runtime/library").JsonValue | null;
        status: import(".prisma/client").$Enums.EventStatus;
        receivedAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__WebhookEventClient<{
        id: number;
        tipo: string;
        datos: import("@prisma/client/runtime/library").JsonValue;
        source: string | null;
        headers: import("@prisma/client/runtime/library").JsonValue | null;
        status: import(".prisma/client").$Enums.EventStatus;
        receivedAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
}
