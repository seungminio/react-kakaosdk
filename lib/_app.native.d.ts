import { KakaoSDK, ProfileType } from './types';
export declare const init: (appKey: string) => Promise<void>;
export declare const isInitialized: () => Promise<any>;
export declare const login: () => Promise<{
    access_token: any;
    refresh_token: any;
    scopes: any;
    expires_in: number;
    refresh_token_expires_in: number;
}>;
export declare const manualLogin: () => Promise<{
    access_token: any;
    refresh_token: any;
    scopes: any;
    expires_in: number;
    refresh_token_expires_in: number;
}>;
export declare const loginWithNewScopes: (scopes: string[]) => Promise<{
    access_token: any;
    refresh_token: any;
    scopes: any;
    expires_in: number;
    refresh_token_expires_in: number;
}>;
export declare const logout: () => Promise<void>;
export declare const unlink: () => Promise<void>;
export declare const getAccessToken: () => Promise<{
    id: any;
    expires_in: number;
}>;
export declare const getProfile: () => Promise<ProfileType>;
export declare const openChannel: (id: string) => Promise<any>;
export declare const openChannelChat: (id: string) => Promise<any>;
declare const app: KakaoSDK;
export default app;
