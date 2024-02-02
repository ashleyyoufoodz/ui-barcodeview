import { ContentView } from '@nativescript/core/ui/content-view';
import { Property } from '@nativescript/core/ui/core/properties';
import { Color } from '@nativescript/core/color';
import { ImageSource } from '@nativescript/core/image-source';
export declare type BarcodeFormat = 'QR_CODE' | 'PDF_417' | 'AZTEC' | 'UPC_E' | 'CODE_39' | 'CODE_39_MOD_43' | 'CODE_93' | 'CODE_128' | 'DATA_MATRIX' | 'EAN_8' | 'ITF' | 'EAN_13' | 'UPC_A' | 'CODABAR' | 'MAXICODE' | 'RSS_14' | 'INTERLEAVED_2_OF_5';
export interface ScanResult {
    text: string;
    format: BarcodeFormat;
}
/**** View-related stuff below ****/
export declare const formatsProperty: Property<BarcodeView, string>;
export declare const preferFrontCameraProperty: Property<BarcodeView, boolean>;
export declare const torchOnProperty: Property<BarcodeView, boolean>;
export declare const beepOnScanProperty: Property<BarcodeView, boolean>;
export declare const reportDuplicatesProperty: Property<BarcodeView, boolean>;
export declare const pauseProperty: Property<BarcodeView, boolean>;
export declare abstract class BarcodeView extends ContentView {
    static scanResultEvent: string;
    protected formats: string;
    protected preferFrontCamera: boolean;
    protected beepOnScan: boolean;
    protected reportDuplicates: boolean;
    protected pause: boolean;
    protected torchOn: boolean;
    abstract pauseScanning(): any;
    abstract resumeScanning(): any;
}
export declare function generateBarCode(options: {
    text: string;
    type: BarcodeFormat;
    width: number;
    height: number;
    frontColor?: Color | string;
    backColor?: Color | string;
}): ImageSource;
