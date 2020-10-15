import { Button } from '@nativescript/core';
import { CheckBoxInterface } from '.';
export declare class CheckBox extends Button implements CheckBoxInterface {
    checked: boolean;
    boxType: number;
    _onCheckColor: string;
    _checkBoxBackgroundColor: any;
    _onTintColor: string;
    _tintColor: string;
    _onFillColor: string;
    _fillColor: string;
    private _iosCheckbox;
    private _delegate;
    private _lineWidth;
    private _hideBox;
    private _boxType;
    private _tint;
    private _animationDuration;
    private _onAnimationType;
    private _offAnimationType;
    constructor();
    set fillColor(color: string);
    set onFillColor(color: string);
    set tintColor(color: string);
    set onTintColor(color: string);
    set checkBoxBackgroundColor(color: any);
    set onCheckColor(color: string);
    set checkedAnimated(value: boolean);
    set lineWidth(value: number);
    set hideBox(value: boolean);
    set animationDuration(value: number);
    set onAnimationType(value: number);
    set offAnimationType(value: number);
    get nativeiOSCheckBox(): BEMCheckBox;
    reload(value: boolean): void;
    initNativeView(): void;
    disposeNativeView(): void;
    toggle(): void;
    private _getAnimationType;
    _onCheckedPropertyChanged(checkbox: CheckBox, oldValue: any, newValue: any): void;
}
