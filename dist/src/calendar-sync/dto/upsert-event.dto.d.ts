import { CalendarItemType } from '@prisma/client';
export declare class UpsertEventDto {
    itemType: CalendarItemType;
    crmId?: number;
    externalId?: string;
    title: string;
    description?: string;
    location?: string;
    startAt: string;
    endAt: string;
    allDay?: boolean;
    timezone?: string;
}
