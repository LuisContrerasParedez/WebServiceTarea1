export declare enum ProviderDTO {
    GOOGLE = "GOOGLE",
    OUTLOOK = "OUTLOOK"
}
export declare class ConnectCalendarDto {
    provider: ProviderDTO;
    accessToken: string;
    refreshToken?: string;
    email?: string;
    scope?: string;
    expiresAt?: string;
}
