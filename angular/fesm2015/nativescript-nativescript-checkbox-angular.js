import { forwardRef, Directive, ElementRef, Inject, HostListener, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { registerElement, BaseValueAccessor } from '@nativescript/angular';
import { CheckBox } from '@nstudio/nativescript-checkbox';

import * as ɵngcc0 from '@angular/core';
function convertToInt(value) {
    let normalizedValue;
    if (value === undefined || value === null) {
        normalizedValue = 0;
    }
    else {
        if (typeof value === 'number') {
            normalizedValue = value;
        }
        else {
            const parsedValue = parseInt(value.toString(), 10);
            normalizedValue = isNaN(parsedValue) ? 0 : parsedValue;
        }
    }
    return Math.round(normalizedValue);
}
registerElement('CheckBox', () => CheckBox);
const CHECKED_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CheckedValueAccessor),
    multi: true
};
/**
 * The accessor for setting checked property and listening to changes that is used by the
 * {@link NgModel} directives.
 *
 *  ### Example
 *  ```
 *  <CheckBox [(ngModel)]="model.test">
 *  ```
 */
class CheckedValueAccessor extends BaseValueAccessor {
    constructor(elementRef) {
        super(elementRef.nativeElement);
        this.onTouched = () => { };
    }
    checkedChangeListener(event) {
        this.onChange(event.value);
    }
    writeValue(value) {
        this.view.checked = value;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
}
CheckedValueAccessor.ɵfac = function CheckedValueAccessor_Factory(t) { return new (t || CheckedValueAccessor)(ɵngcc0.ɵɵdirectiveInject(ElementRef)); };
CheckedValueAccessor.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CheckedValueAccessor, selectors: [["CheckBox", "ngModel", ""], ["CheckBox", "formControlName", ""], ["CheckBox", "formControl", ""], ["checkBox", "ngModel", ""], ["checkBox", "formControlName", ""], ["checkBox", "formControl", ""], ["check-box", "ngModel", ""], ["check-box", "formControlName", ""], ["check-box", "formControl", ""]], hostBindings: function CheckedValueAccessor_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("checkedChange", function CheckedValueAccessor_checkedChange_HostBindingHandler($event) { return ctx.checkedChangeListener($event); });
    } }, features: [ɵngcc0.ɵɵProvidersFeature([CHECKED_VALUE_ACCESSOR]), ɵngcc0.ɵɵInheritDefinitionFeature] });
CheckedValueAccessor.ctorParameters = () => [
    { type: ElementRef, decorators: [{ type: Inject, args: [ElementRef,] }] }
];
CheckedValueAccessor.propDecorators = {
    checkedChangeListener: [{ type: HostListener, args: ['checkedChange', ['$event'],] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CheckedValueAccessor, [{
        type: Directive,
        args: [{
                selector: 'CheckBox[ngModel], CheckBox[formControlName], CheckBox[formControl], checkBox[ngModel], checkBox[formControlName], checkBox[formControl], check-box[ngModel], check-box[formControlName], check-box[formControl]',
                providers: [CHECKED_VALUE_ACCESSOR]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef, decorators: [{
                type: Inject,
                args: [ElementRef]
            }] }]; }, { checkedChangeListener: [{
            type: HostListener,
            args: ['checkedChange', ['$event']]
        }] }); })();
class TNSCheckBoxModule {
}
TNSCheckBoxModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: TNSCheckBoxModule });
TNSCheckBoxModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function TNSCheckBoxModule_Factory(t) { return new (t || TNSCheckBoxModule)(); }, providers: [], imports: [[FormsModule], FormsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(TNSCheckBoxModule, { declarations: function () { return [CheckedValueAccessor]; }, imports: function () { return [FormsModule]; }, exports: function () { return [FormsModule, CheckedValueAccessor]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TNSCheckBoxModule, [{
        type: NgModule,
        args: [{
                declarations: [CheckedValueAccessor],
                providers: [],
                imports: [FormsModule],
                exports: [FormsModule, CheckedValueAccessor]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { CheckedValueAccessor, TNSCheckBoxModule };

//# sourceMappingURL=nativescript-nativescript-checkbox-angular.js.map