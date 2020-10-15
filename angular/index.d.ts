import { ElementRef } from '@angular/core';
import { BaseValueAccessor } from '@nativescript/angular';
import { View } from '@nativescript/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/forms';
export declare type CheckableView = {
    checked: boolean;
} & View;
/**
 * The accessor for setting checked property and listening to changes that is used by the
 * {@link NgModel} directives.
 *
 *  ### Example
 *  ```
 *  <CheckBox [(ngModel)]="model.test">
 *  ```
 */
export declare class CheckedValueAccessor extends BaseValueAccessor<CheckableView> {
    constructor(elementRef: ElementRef);
    checkedChangeListener(event: any): void;
    onTouched: () => void;
    writeValue(value: any): void;
    registerOnTouched(fn: () => void): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CheckedValueAccessor, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<CheckedValueAccessor, "CheckBox[ngModel], CheckBox[formControlName], CheckBox[formControl], checkBox[ngModel], checkBox[formControlName], checkBox[formControl], check-box[ngModel], check-box[formControlName], check-box[formControl]", never, {}, {}, never>;
}
export declare class TNSCheckBoxModule {
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<TNSCheckBoxModule, [typeof CheckedValueAccessor], [typeof ɵngcc1.FormsModule], [typeof ɵngcc1.FormsModule, typeof CheckedValueAccessor]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<TNSCheckBoxModule>;
}

//# sourceMappingURL=index.d.ts.map