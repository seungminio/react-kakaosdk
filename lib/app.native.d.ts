import { IKakaoDefault } from './types';
export declare const init: (appKey: string) => Promise<void>;
export declare const isInitialized: () => Promise<any>;
declare const app: IKakaoDefault;
export default app;
