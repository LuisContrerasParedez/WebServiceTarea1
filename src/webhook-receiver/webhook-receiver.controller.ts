import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { WebhookReceiverService } from './webhook-receiver.service';
import { CreateWebhookReceiverDto } from './dto/create-webhook-receiver.dto';
import { UpdateWebhookReceiverDto } from './dto/update-webhook-receiver.dto';

@Controller('webhook-receiver')
export class WebhookReceiverController {
  constructor(private readonly webhookReceiverService: WebhookReceiverService) {}

  @Post()
  create(@Body() dto: CreateWebhookReceiverDto) {
    return this.webhookReceiverService.create(dto);
  }

  @Get()
  findAll() {
    return this.webhookReceiverService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.webhookReceiverService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateWebhookReceiverDto) {
    return this.webhookReceiverService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.webhookReceiverService.remove(id);
  }
}
