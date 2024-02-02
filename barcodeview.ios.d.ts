import { BarcodeFormat, BarcodeView as BarcodeScannerBaseView } from './barcodeview-common';
import { ImageSource } from '@nativescript/core/image-source';
import { Color } from '@nativescript/core/color';
export declare class BarcodeView extends BarcodeScannerBaseView {
    private _reader;
    private _hasSupport;
    constructor();
    createNativeView(): UIView;
    disposeNativeView(): void;
    private _player;
    private lastText;
    initNativeView(): void;
    onLayout(left: number, top: number, right: number, bottom: number): void;
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
