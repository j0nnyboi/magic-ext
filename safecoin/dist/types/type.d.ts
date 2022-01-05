export interface SafecoinConfig {
    rpcUrl: string;
}
export declare enum SafecoinPayloadMethod {
    SignTransaction = "safe_sendTransaction"
}
export interface SerializeConfig {
    /** Require all transaction signatures be present (default: true) */
    requireAllSignatures?: boolean;
    /** Verify provided signatures (default: true) */
    verifySignatures?: boolean;
}
