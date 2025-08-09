"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhookReceiverModule = void 0;
const common_1 = require("@nestjs/common");
const webhook_receiver_service_1 = require("./webhook-receiver.service");
const webhook_receiver_controller_1 = require("./webhook-receiver.controller");
let WebhookReceiverModule = class WebhookReceiverModule {
};
exports.WebhookReceiverModule = WebhookReceiverModule;
exports.WebhookReceiverModule = WebhookReceiverModule = __decorate([
    (0, common_1.Module)({
        controllers: [webhook_receiver_controller_1.WebhookReceiverController],
        providers: [webhook_receiver_service_1.WebhookReceiverService],
    })
], WebhookReceiverModule);
//# sourceMappingURL=webhook-receiver.module.js.map