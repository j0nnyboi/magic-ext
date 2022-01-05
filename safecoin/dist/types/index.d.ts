import { Extension } from '@magic-sdk/commons';
import { SolanaConfig, SerializeConfig } from './type';
export declare class SafecoinExtension extends Extension.Internal<'safecoin', any> {
    safecoinConfig: SafecoinConfig;
    name: "safeocin";
    config: any;
    constructor(safecoinConfig: SafecoinConfig);
    sendAndConfirmTransaction: (transaction: any, options?: any) => import("@magic-sdk/commons").PromiEvent<any, {
        done: (result: any) => void;
        error: (reason: any) => void;
        settled: () => void;
    }>;
    signTransaction: (transaction: any, serializeConfig?: SerializeConfig | undefined) => import("@magic-sdk/commons").PromiEvent<any, {
        done: (result: any) => void;
        error: (reason: any) => void;
        settled: () => void;
    }>;
}
