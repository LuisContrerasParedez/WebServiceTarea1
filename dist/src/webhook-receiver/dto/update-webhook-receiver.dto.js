"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateWebhookReceiverDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_webhook_receiver_dto_1 = require("./create-webhook-receiver.dto");
class UpdateWebhookReceiverDto extends (0, swagger_1.PartialType)(create_webhook_receiver_dto_1.CreateWebhookReceiverDto) {
}
exports.UpdateWebhookReceiverDto = UpdateWebhookReceiverDto;
//# sourceMappingURL=update-webhook-receiver.dto.js.map