export declare enum CalendarProvider {
    GOOGLE = "GOOGLE",
    MICROSOFT = "MICROSOFT"
}
export declare class ConnectCalendarDto {
    provider: CalendarProvider;
    accessToken: string;
    refreshToken?: string;
    email?: string;
    scope?: string;
    expiresAt?: string;
}
