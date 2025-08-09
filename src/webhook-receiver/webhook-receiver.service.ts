import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateWebhookReceiverDto } from './dto/create-webhook-receiver.dto';
import { UpdateWebhookReceiverDto } from './dto/update-webhook-receiver.dto';

@Injectable()
export class WebhookReceiverService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateWebhookReceiverDto) {
    return this.prisma.webhookEvent.create({ data: dto });
  }

  findAll() {
    return this.prisma.webhookEvent.findMany({
      orderBy: { receivedAt: 'desc' },
    });
  }

  findOne(id: number) {
    return this.prisma.webhookEvent.findUnique({ where: { id } });
  }

  update(id: number, dto: UpdateWebhookReceiverDto) {
    return this.prisma.webhookEvent.update({
      where: { id },
      data: dto,
    });
  }

  remove(id: number) {
    return this.prisma.webhookEvent.delete({ where: { id } });
  }
}
