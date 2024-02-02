import { ContentView } from '@nativescript/core/ui/content-view';
import { Property } from '@nativescript/core/ui/core/properties';
import { booleanConverter } from '@nativescript/core/ui/core/view-base';
import { Color } from '@nativescript/core/color';
import { ImageSource } from '@nativescript/core/image-source';
/**** View-related stuff below ****/
export const formatsProperty = new Property({
    name: 'formats',
    defaultValue: null,
});
export const preferFrontCameraProperty = new Property({
    name: 'preferFrontCamera',
    defaultValue: false,
    valueConverter: booleanConverter,
});
export const torchOnProperty = new Property({
    name: 'torchOn',
    defaultValue: false,
    valueConverter: booleanConverter,
});
export const beepOnScanProperty = new Property({
    name: 'beepOnScan',
    defaultValue: true,
    valueConverter: booleanConverter,
});
export const reportDuplicatesProperty = new Property({
    name: 'reportDuplicates',
    defaultValue: false,
    valueConverter: booleanConverter,
});
export const pauseProperty = new Property({
    name: 'pause',
    defaultValue: false,
    valueConverter: booleanConverter,
});
export class BarcodeView extends ContentView {
}
BarcodeView.scanResultEvent = 'scanResult';
export function generateBarCode(options) {
    return null;
}
pauseProperty.register(BarcodeView);
formatsProperty.register(BarcodeView);
preferFrontCameraProperty.register(BarcodeView);
beepOnScanProperty.register(BarcodeView);
reportDuplicatesProperty.register(BarcodeView);
torchOnProperty.register(BarcodeView);
//# sourceMappingURL=barcodeview-common.js.map