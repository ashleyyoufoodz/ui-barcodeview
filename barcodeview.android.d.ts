import { BarcodeFormat, BarcodeView as BarcodeScannerBaseView } from './barcodeview-common';
import { ImageSource } from '@nativescript/core/image-source';
import { Color } from '@nativescript/core/color';
export declare class BarcodeView extends BarcodeScannerBaseView {
    nativeViewProtected: com.journeyapps.barcodescanner.BarcodeView;
    static beepManager: com.google.zxing.client.android.BeepManager;
    callback: com.journeyapps.barcodescanner.BarcodeCallback;
    private lastText;
    createNativeView(): com.journeyapps.barcodescanner.BarcodeView;
    onActivityResume(): void;
    onActivityPause(): void;
    initNativeView(): void;
    disposeNativeView(): void;
    pauseScanning(): void;
    resumeScanning(): void;
    triggerScan(view: any): void;
}
export declare function generateBarCode({ text, type, width, height, frontColor, backColor, }: {
    text: string;
    type: BarcodeFormat;
    width: number;
    height: number;
    frontColor?: Color | string;
    backColor?: Color | string;
}): ImageSource;
