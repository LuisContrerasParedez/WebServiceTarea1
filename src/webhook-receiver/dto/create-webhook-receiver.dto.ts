import { IsString, IsObject, IsOptional } from 'class-validator';

export class CreateWebhookReceiverDto {
  @IsString()
  tipo: string;

  @IsObject()
  datos: Record<string, any>;

  @IsOptional()
  @IsString()
  source?: string;

  @IsOptional()
  @IsObject()
  headers?: Record<string, any>;
}
