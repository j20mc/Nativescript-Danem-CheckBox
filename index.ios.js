import { booleanConverter, Button, Color, CssProperty, Property, Style } from '@nativescript/core';
import { BoxType } from './common';
const checkBoxBackgroundColorProperty = new CssProperty({
    name: 'checkBoxBackgroundColor',
    cssName: 'checkbox-background-color',
    valueConverter: v => {
        return String(v);
    }
});
const onCheckColorProperty = new CssProperty({
    name: 'onCheckColor',
    cssName: 'on-check-color',
    defaultValue: '#ffffff',
    valueConverter: v => {
        return String(v);
    }
});
const tintColorProperty = new CssProperty({
    name: 'tintColor',
    cssName: 'tint-color',
    //   defaultValue: "#0075ff",
    valueConverter: v => {
        return String(v);
    }
});
const onTintColorProperty = new CssProperty({
    name: 'onTintColor',
    cssName: 'on-tint-color',
    valueConverter: v => {
        return String(v);
    }
});
const fillColorProperty = new CssProperty({
    name: 'fillColor',
    cssName: 'fill-color',
    valueConverter: v => {
        return String(v);
    }
});
const checkedProperty = new Property({
    name: 'checked',
    defaultValue: false,
    valueConverter: booleanConverter,
    valueChanged: onCheckedPropertyChanged
});
const boxTypeProperty = new Property({
    name: 'boxType',
    valueConverter: v => {
        return BoxType[v] === BoxType.circle
            ? 0 /* Circle */
            : 1 /* Square */;
    }
});
export class CheckBox extends Button {
    constructor() {
        super();
        this._lineWidth = 1;
        // just create with any width/height as XML view width/height is undefined at this point
        // we modify width/height later below in onLoaded
        this._iosCheckbox = BEMCheckBox.alloc().initWithFrame(CGRectMake(0, 0, 80, 80));
    }
    set fillColor(color) {
        this._fillColor = color;
        this._iosCheckbox.onFillColor = new Color(color).ios;
    }
    set onFillColor(color) {
        this._onFillColor = color;
        this._iosCheckbox.onFillColor = new Color(color).ios;
    }
    set tintColor(color) {
        this._tintColor = color;
        this._iosCheckbox.tintColor = new Color(color).ios;
    }
    set onTintColor(color) {
        this._onTintColor = color;
        this._iosCheckbox.onTintColor = new Color(color).ios;
    }
    set checkBoxBackgroundColor(color) {
        this._checkBoxBackgroundColor = color;
        this._iosCheckbox.offFillColor = new Color(color).ios;
    }
    set onCheckColor(color) {
        this._onCheckColor = color;
        this._iosCheckbox.onCheckColor = new Color(color).ios;
    }
    [boxTypeProperty.setNative](value) {
        if (this._iosCheckbox) {
            this._iosCheckbox.boxType = value;
        }
    }
    [checkedProperty.getDefault]() {
        return false;
    }
    [checkedProperty.setNative](value) {
        this._iosCheckbox.setOnAnimated(value, true);
    }
    set checkedAnimated(value) {
        this._iosCheckbox.setOnAnimated(value, true);
    }
    set lineWidth(value) {
        this._iosCheckbox.lineWidth = value;
        this._lineWidth = value;
    }
    set hideBox(value) {
        this._iosCheckbox.hideBox = value;
        this._hideBox = value;
    }
    set animationDuration(value) {
        this._iosCheckbox.animationDuration = value;
        this._animationDuration = value;
    }
    set onAnimationType(value) {
        if (this._iosCheckbox)
            this._iosCheckbox.onAnimationType = this._getAnimationType(value);
        else
            this._onAnimationType = value;
    }
    set offAnimationType(value) {
        this._iosCheckbox.offAnimationType = this._getAnimationType(value);
        this._offAnimationType = value;
    }
    get nativeiOSCheckBox() {
        return this._iosCheckbox;
    }
    reload(value) {
        this._iosCheckbox.reload();
    }
    initNativeView() {
        // allow label click to change the textbox
        this.addEventListener('tap', args => {
            const checkbox = args.object;
            checkbox.checked = !checkbox.checked;
        });
        this._onAnimationType = 2;
        this._offAnimationType = 2;
        this._delegate = BEMCheckBoxDelegateImpl.initWithOwner(new WeakRef(this));
        let fontSize;
        if (!this.style.fontSize) {
            fontSize = 15;
        }
        else {
            fontSize = this.style.fontSize;
        }
        this._iosCheckbox.delegate = this._delegate;
        // positioning
        this._iosCheckbox.frame = CGRectMake(0, 0, fontSize, fontSize);
        this._iosCheckbox.center = CGPointMake(this._iosCheckbox.center.x, fontSize / 2 + 3);
        this.style.paddingLeft = fontSize + (fontSize > 20 ? 10 : 5);
        this.style.textAlignment = 'left';
        if (this._onCheckColor) {
            this._iosCheckbox.onCheckColor = new Color(this._onCheckColor).ios;
        }
        if (this._onFillColor) {
            this._iosCheckbox.onFillColor = new Color(this._onFillColor).ios;
        }
        if (this._onTintColor) {
            this._iosCheckbox.onTintColor = new Color(this._onTintColor).ios;
        }
        if (this._fillColor) {
            this._iosCheckbox.onFillColor = new Color(this._fillColor).ios;
        }
        if (this._tintColor) {
            this._iosCheckbox.tintColor = new Color(this._tintColor).ios;
        }
        this.nativeView.addSubview(this._iosCheckbox);
        if (typeof this._lineWidth !== 'undefined') {
            this.lineWidth = this._lineWidth;
        }
        if (typeof this._hideBox !== 'undefined') {
            this.hideBox = this._hideBox;
        }
        this.boxType = this.boxType === 0 ? 0 /* Circle */ : 1 /* Square */;
        if (typeof this._animationDuration !== 'undefined') {
            this.animationDuration = this._animationDuration;
        }
        if (typeof this._onAnimationType !== 'undefined') {
            this.onAnimationType = this._onAnimationType;
        }
        if (typeof this._offAnimationType !== 'undefined') {
            this.offAnimationType = this._offAnimationType;
        }
    }
    disposeNativeView() {
        this._iosCheckbox.delegate = null;
        this.removeEventListener('tap');
    }
    toggle() {
        this.checked = !this.checked;
    }
    _getAnimationType(value) {
        switch (value) {
            case 1:
                return 0 /* Stroke */;
            case 2:
                return 1 /* Fill */;
            case 3:
                return 2 /* Bounce */;
            case 4:
                return 3 /* Flat */;
            case 5:
                return 0 /* Stroke */;
            case 6:
                return 5 /* Fade */;
            default:
                return 0 /* Stroke */;
        }
    }
    _onCheckedPropertyChanged(checkbox, oldValue, newValue) {
        if (!this.nativeView) {
            return;
        }
        checkedProperty.nativeValueChange(this, newValue);
    }
}
var BEMCheckBoxDelegateImpl = /** @class */ (function (_super) {
    __extends(BEMCheckBoxDelegateImpl, _super);
    function BEMCheckBoxDelegateImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /* static ObjCExposedMethods = {
       "didTapCheckBox": { returns: interop.types.void, params: [NSObject] }
       };*/
    BEMCheckBoxDelegateImpl.initWithOwner = function (owner) {
        var delegate = BEMCheckBoxDelegateImpl.new();
        delegate._owner = owner;
        return delegate;
    };
    BEMCheckBoxDelegateImpl.prototype.animationDidStopForCheckBox = function (checkBox) {
        // TODO: Maybe trigger event later?
    };
    BEMCheckBoxDelegateImpl.prototype.didTapCheckBox = function (checkBox) {
        var owner = this._owner.get();
        if (owner) {
            checkedProperty.nativeValueChange(owner, checkBox.on);
        }
    };
    BEMCheckBoxDelegateImpl.ObjCProtocols = [BEMCheckBoxDelegate];
    return BEMCheckBoxDelegateImpl;
}(NSObject));
function onCheckedPropertyChanged(checkbox, oldValue, newValue) {
    checkbox._onCheckedPropertyChanged(checkbox, oldValue, newValue);
}
boxTypeProperty.register(CheckBox);
checkedProperty.register(CheckBox);
fillColorProperty.register(Style);
onTintColorProperty.register(Style);
onCheckColorProperty.register(Style);
checkBoxBackgroundColorProperty.register(Style);
tintColorProperty.register(Style);
//# sourceMappingURL=index.ios.js.map