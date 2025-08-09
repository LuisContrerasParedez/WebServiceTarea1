"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhookReceiverService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let WebhookReceiverService = class WebhookReceiverService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(dto) {
        return this.prisma.webhookEvent.create({ data: dto });
    }
    findAll() {
        return this.prisma.webhookEvent.findMany({
            orderBy: { receivedAt: 'desc' },
        });
    }
    findOne(id) {
        return this.prisma.webhookEvent.findUnique({ where: { id } });
    }
    update(id, dto) {
        return this.prisma.webhookEvent.update({
            where: { id },
            data: dto,
        });
    }
    remove(id) {
        return this.prisma.webhookEvent.delete({ where: { id } });
    }
};
exports.WebhookReceiverService = WebhookReceiverService;
exports.WebhookReceiverService = WebhookReceiverService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], WebhookReceiverService);
//# sourceMappingURL=webhook-receiver.service.js.map