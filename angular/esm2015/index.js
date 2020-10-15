import { Directive, ElementRef, forwardRef, HostListener, Inject, NgModule } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { registerElement, BaseValueAccessor } from '@nativescript/angular';
import { CheckBox } from '@nstudio/nativescript-checkbox';
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
export class CheckedValueAccessor extends BaseValueAccessor {
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
CheckedValueAccessor.decorators = [
    { type: Directive, args: [{
                selector: 'CheckBox[ngModel], CheckBox[formControlName], CheckBox[formControl], checkBox[ngModel], checkBox[formControlName], checkBox[formControl], check-box[ngModel], check-box[formControlName], check-box[formControl]',
                providers: [CHECKED_VALUE_ACCESSOR]
            },] }
];
CheckedValueAccessor.ctorParameters = () => [
    { type: ElementRef, decorators: [{ type: Inject, args: [ElementRef,] }] }
];
CheckedValueAccessor.propDecorators = {
    checkedChangeListener: [{ type: HostListener, args: ['checkedChange', ['$event'],] }]
};
export class TNSCheckBoxModule {
}
TNSCheckBoxModule.decorators = [
    { type: NgModule, args: [{
                declarations: [CheckedValueAccessor],
                providers: [],
                imports: [FormsModule],
                exports: [FormsModule, CheckedValueAccessor]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL25hdGhhbi9Eb2N1bWVudHMvZ2l0aHViL25zdHVkaW8vbmF0aXZlc2NyaXB0LXBsdWdpbnMvcGFja2FnZXMvbmF0aXZlc2NyaXB0LWNoZWNrYm94L2FuZ3VsYXIvIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1YsWUFBWSxFQUNaLE1BQU0sRUFDTixRQUFRLEVBQ1QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxlQUFlLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUUzRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFMUQsU0FBUyxZQUFZLENBQUMsS0FBSztJQUN6QixJQUFJLGVBQWUsQ0FBQztJQUNwQixJQUFJLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxLQUFLLElBQUksRUFBRTtRQUN6QyxlQUFlLEdBQUcsQ0FBQyxDQUFDO0tBQ3JCO1NBQU07UUFDTCxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtZQUM3QixlQUFlLEdBQUcsS0FBSyxDQUFDO1NBQ3pCO2FBQU07WUFDTCxNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ25ELGVBQWUsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDO1NBQ3hEO0tBQ0Y7SUFDRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDckMsQ0FBQztBQUVELGVBQWUsQ0FBQyxVQUFVLEVBQUUsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7QUFFNUMsTUFBTSxzQkFBc0IsR0FBRztJQUM3QixPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsb0JBQW9CLENBQUM7SUFDbkQsS0FBSyxFQUFFLElBQUk7Q0FDWixDQUFDO0FBSUY7Ozs7Ozs7O0dBUUc7QUFNSCxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsaUJBQWdDO0lBQ3hFLFlBQWdDLFVBQXNCO1FBQ3BELEtBQUssQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7UUFRM0IsY0FBUyxHQUFHLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQztJQVA1QixDQUFDO0lBR00scUJBQXFCLENBQUMsS0FBVTtRQUNyQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBSU0sVUFBVSxDQUFDLEtBQVU7UUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQzVCLENBQUM7SUFFTSxpQkFBaUIsQ0FBQyxFQUFjO1FBQ3JDLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7OztZQXZCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUNOLGtOQUFrTjtnQkFDcE4sU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7YUFDcEM7OztZQWpEQyxVQUFVLHVCQW1ERyxNQUFNLFNBQUMsVUFBVTs7O29DQUk3QixZQUFZLFNBQUMsZUFBZSxFQUFFLENBQUMsUUFBUSxDQUFDOztBQXNCM0MsTUFBTSxPQUFPLGlCQUFpQjs7O1lBTjdCLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztnQkFDcEMsU0FBUyxFQUFFLEVBQUU7Z0JBQ2IsT0FBTyxFQUFFLENBQUMsV0FBVyxDQUFDO2dCQUN0QixPQUFPLEVBQUUsQ0FBQyxXQUFXLEVBQUUsb0JBQW9CLENBQUM7YUFDN0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWYsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5qZWN0LFxuICBOZ01vZHVsZVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCwgQmFzZVZhbHVlQWNjZXNzb3IgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2FuZ3VsYXInO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZSc7XG5pbXBvcnQgeyBDaGVja0JveCB9IGZyb20gJ0Buc3R1ZGlvL25hdGl2ZXNjcmlwdC1jaGVja2JveCc7XG5cbmZ1bmN0aW9uIGNvbnZlcnRUb0ludCh2YWx1ZSk6IG51bWJlciB7XG4gIGxldCBub3JtYWxpemVkVmFsdWU7XG4gIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBudWxsKSB7XG4gICAgbm9ybWFsaXplZFZhbHVlID0gMDtcbiAgfSBlbHNlIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgbm9ybWFsaXplZFZhbHVlID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHBhcnNlZFZhbHVlID0gcGFyc2VJbnQodmFsdWUudG9TdHJpbmcoKSwgMTApO1xuICAgICAgbm9ybWFsaXplZFZhbHVlID0gaXNOYU4ocGFyc2VkVmFsdWUpID8gMCA6IHBhcnNlZFZhbHVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gTWF0aC5yb3VuZChub3JtYWxpemVkVmFsdWUpO1xufVxuXG5yZWdpc3RlckVsZW1lbnQoJ0NoZWNrQm94JywgKCkgPT4gQ2hlY2tCb3gpO1xuXG5jb25zdCBDSEVDS0VEX1ZBTFVFX0FDQ0VTU09SID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQ2hlY2tlZFZhbHVlQWNjZXNzb3IpLFxuICBtdWx0aTogdHJ1ZVxufTtcblxuZXhwb3J0IHR5cGUgQ2hlY2thYmxlVmlldyA9IHsgY2hlY2tlZDogYm9vbGVhbiB9ICYgVmlldztcblxuLyoqXG4gKiBUaGUgYWNjZXNzb3IgZm9yIHNldHRpbmcgY2hlY2tlZCBwcm9wZXJ0eSBhbmQgbGlzdGVuaW5nIHRvIGNoYW5nZXMgdGhhdCBpcyB1c2VkIGJ5IHRoZVxuICoge0BsaW5rIE5nTW9kZWx9IGRpcmVjdGl2ZXMuXG4gKlxuICogICMjIyBFeGFtcGxlXG4gKiAgYGBgXG4gKiAgPENoZWNrQm94IFsobmdNb2RlbCldPVwibW9kZWwudGVzdFwiPlxuICogIGBgYFxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6XG4gICAgJ0NoZWNrQm94W25nTW9kZWxdLCBDaGVja0JveFtmb3JtQ29udHJvbE5hbWVdLCBDaGVja0JveFtmb3JtQ29udHJvbF0sIGNoZWNrQm94W25nTW9kZWxdLCBjaGVja0JveFtmb3JtQ29udHJvbE5hbWVdLCBjaGVja0JveFtmb3JtQ29udHJvbF0sIGNoZWNrLWJveFtuZ01vZGVsXSwgY2hlY2stYm94W2Zvcm1Db250cm9sTmFtZV0sIGNoZWNrLWJveFtmb3JtQ29udHJvbF0nLFxuICBwcm92aWRlcnM6IFtDSEVDS0VEX1ZBTFVFX0FDQ0VTU09SXVxufSlcbmV4cG9ydCBjbGFzcyBDaGVja2VkVmFsdWVBY2Nlc3NvciBleHRlbmRzIEJhc2VWYWx1ZUFjY2Vzc29yPENoZWNrYWJsZVZpZXc+IHtcbiAgY29uc3RydWN0b3IoQEluamVjdChFbGVtZW50UmVmKSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgc3VwZXIoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NoZWNrZWRDaGFuZ2UnLCBbJyRldmVudCddKVxuICBwdWJsaWMgY2hlY2tlZENoYW5nZUxpc3RlbmVyKGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLm9uQ2hhbmdlKGV2ZW50LnZhbHVlKTtcbiAgfVxuXG4gIHB1YmxpYyBvblRvdWNoZWQgPSAoKSA9PiB7fTtcblxuICBwdWJsaWMgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy52aWV3LmNoZWNrZWQgPSB2YWx1ZTtcbiAgfVxuXG4gIHB1YmxpYyByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbQ2hlY2tlZFZhbHVlQWNjZXNzb3JdLFxuICBwcm92aWRlcnM6IFtdLFxuICBpbXBvcnRzOiBbRm9ybXNNb2R1bGVdLFxuICBleHBvcnRzOiBbRm9ybXNNb2R1bGUsIENoZWNrZWRWYWx1ZUFjY2Vzc29yXVxufSlcbmV4cG9ydCBjbGFzcyBUTlNDaGVja0JveE1vZHVsZSB7fVxuIl19