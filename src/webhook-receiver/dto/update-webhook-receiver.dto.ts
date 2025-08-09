import { PartialType } from '@nestjs/swagger';
import { CreateWebhookReceiverDto } from './create-webhook-receiver.dto';

export class UpdateWebhookReceiverDto extends PartialType(CreateWebhookReceiverDto) {}
