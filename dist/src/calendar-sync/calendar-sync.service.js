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
exports.CalendarSyncService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const connect_calendar_dto_1 = require("./dto/connect-calendar.dto");
const upsert_event_dto_1 = require("./dto/upsert-event.dto");
const client_1 = require("@prisma/client");
const mapProvider = (p) => p === connect_calendar_dto_1.ProviderDTO.OUTLOOK ? client_1.CalendarProvider.OUTLOOK : client_1.CalendarProvider.GOOGLE;
const mapItemType = (t) => t === upsert_event_dto_1.ItemTypeDTO.TASK ? client_1.CalendarItemType.TASK : client_1.CalendarItemType.EVENT;
let CalendarSyncService = class CalendarSyncService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async connect(userId, dto) {
        const provider = mapProvider(dto.provider);
        return this.prisma.calendarAccount.upsert({
            where: { userId_provider: { userId, provider } },
            create: {
                userId,
                provider,
                email: dto.email ?? '',
                accessToken: dto.accessToken,
                refreshToken: dto.refreshToken,
                scope: dto.scope,
                expiresAt: dto.expiresAt ? new Date(dto.expiresAt) : null,
                status: 'ACTIVE',
            },
            update: {
                email: dto.email ?? undefined,
                accessToken: dto.accessToken,
                refreshToken: dto.refreshToken ?? undefined,
                scope: dto.scope ?? undefined,
                expiresAt: dto.expiresAt ? new Date(dto.expiresAt) : undefined,
                status: 'ACTIVE',
            },
        });
    }
    async upsertEvent(userId, providerDto, accountEmail, dto) {
        const provider = mapProvider(providerDto);
        const account = await this.prisma.calendarAccount.findFirst({
            where: { userId, provider, email: accountEmail },
        });
        if (!account)
            throw new common_1.NotFoundException('Cuenta de calendario no encontrada');
        const fromProvider = !!dto.externalId;
        const data = {
            accountId: account.id,
            provider,
            itemType: mapItemType(dto.itemType),
            title: dto.title,
            description: dto.description ?? null,
            location: dto.location ?? null,
            startAt: new Date(dto.startAt),
            endAt: new Date(dto.endAt),
            allDay: dto.allDay ?? false,
            timezone: dto.timezone ?? null,
            crmId: dto.crmId ?? null,
            externalId: dto.externalId ?? null,
            lastExternalAt: fromProvider ? new Date() : undefined,
            lastCrmAt: !fromProvider ? new Date() : undefined,
        };
        if (dto.externalId) {
            return this.prisma.calendarEvent.upsert({
                where: { accountId_externalId: { accountId: account.id, externalId: dto.externalId } },
                create: data,
                update: data,
            });
        }
        if (dto.crmId) {
            const existing = await this.prisma.calendarEvent.findFirst({
                where: { accountId: account.id, crmId: dto.crmId },
            });
            if (existing) {
                return this.prisma.calendarEvent.update({ where: { id: existing.id }, data });
            }
            return this.prisma.calendarEvent.create({ data });
        }
        return this.prisma.calendarEvent.create({ data });
    }
    listEvents(userId, providerDto, accountEmail) {
        const provider = mapProvider(providerDto);
        return this.prisma.calendarEvent.findMany({
            where: { account: { userId, provider, email: accountEmail }, deleted: false },
            orderBy: { startAt: 'asc' },
        });
    }
    deleteEvent(id) {
        return this.prisma.calendarEvent.update({ where: { id }, data: { deleted: true } });
    }
};
exports.CalendarSyncService = CalendarSyncService;
exports.CalendarSyncService = CalendarSyncService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CalendarSyncService);
//# sourceMappingURL=calendar-sync.service.js.map