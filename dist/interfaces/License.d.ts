interface LicenseProduct {
    endDate: Date;
    isShared: boolean;
    id: string;
    productId: string;
    skuId: string;
    userId: string;
}
export interface License {
    certificateId: string;
    customDeveloperString: string;
    licensableProducts: Array<LicenseProduct>;
    payload: string;
    tokenVersion: number;
}
export {};
