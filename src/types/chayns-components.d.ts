/* eslint-disable */
// noinspection JSUnusedGlobalSymbols,JSValidateJSDoc,SpellCheckingInspection,JSDeprecatedSymbols,TypeScriptRedundantGenericType
/// <reference types="react" />
/// <reference types="node" />

declare module 'chayns-components/dist/esm/constants/index' {
    export const CHAYNS_CSS_VERSION = '4.2';
}
declare module 'chayns-components/dist/esm/utils/is' {
    export function isString(value: any): boolean;

    export function isNumber(value: any): boolean;

    export function isBoolean(value: any): boolean;

    export function isFunction(value: any): boolean;

    export function isNullOrWhiteSpace(value: any): boolean;
}
declare module 'chayns-components/dist/esm/react-chayns-icon/component/Icon' {
    import React from 'react';

    interface IIconProps extends React.HTMLAttributes<Element> {
        icon: string | string[];
        className?: string;
        style?: {
            [key: string]: number | string;
        };
        onClick?: (...args: any[]) => any;
        disabled?: boolean;
        stopPropagation?: boolean;
        other?: any;
    }

    /**
     * Displays a FontAwesome icon.
     */
    export default class Icon extends React.Component<IIconProps, {}> {
        constructor(props: any);

        componentDidMount(): void;

        onClick(e: any): void;

        render(): JSX.Element;
    }
}
declare module 'chayns-components/dist/esm/utils/requestAnimationFrame' {
    const requestAnimationFrame: any;
    export default requestAnimationFrame;
}
declare module 'chayns-components/dist/esm/react-chayns-button/component/Button' {
    type ButtonProps = {
        chooseButton?: boolean;
        disabled?: boolean;
        onClick?: (...args: any[]) => any;
        className?: string;
        icon?: string | any;
        secondary?: boolean;
        stopPropagation?: boolean;
        type?: 'button' | 'submit' | 'reset';
    };
    const Button: React.SFC<ButtonProps>;
    export default Button;
}
declare module 'chayns-components/dist/esm/react-chayns-input/component/Input' {
    interface IInputProps extends React.HTMLAttributes<Element> {
        className?: string;
        onKeyUp?: (...args: any[]) => any;
        onKeyDown?: (...args: any[]) => any;
        onEnter?: (...args: any[]) => any;
        onChange?: (...args: any[]) => any;
        onBlur?: (...args: any[]) => any;
        onFocus?: (...args: any[]) => any;
        regExp?: any;
        style?: {
            [key: string]: number | string;
        };
        placeholder?: string;
        value?: string | number;
        defaultValue?: string | number;
        invalid?: boolean;
        type?: string;
        inputRef?: (...args: any[]) => any;
        icon?: string | any;
        onIconClick?: (...args: any[]) => any;
        wrapperRef?: (...args: any[]) => any;
        dynamic?: boolean | number;
        customProps?: any;
        id?: string;
        stopPropagation?: boolean;
        required?: boolean;
        disabled?: boolean;
        clearIcon?: boolean;
        design?: number;
        iconLeft?: string | any;
        right?: React.ReactNode;
        invalidMessage?: string;
        emptyValue?: string | number;
        autoComplete?: string;
    }

    type InputState = {
        valid?: boolean;
        initial?: boolean;
        right?: boolean;
        value?: any;
        stateValue?: any;
    };
    /**
     * A text input that can be validated and decorated with different designs.
     */
    export default class Input extends React.PureComponent<IInputProps, InputState> {
        static BORDER_DESIGN: number;
        static BOTTOM_DYNAMIC: number;

        id: any;

        ref: any;

        constructor(props: any);

        componentDidUpdate({
            regExp: oldRegExp,
            value: oldValue,
        }: {
            regExp: any;
            value: any;
        }): void;

        onKeyUp(e: any): void;

        onBlur(e: any): void;

        onChange(e: any): void;

        onIconClick(e: any): void;

        setRef(ref: any): void;

        callValidated(value: any, callback: any, event: any): void;

        render(): JSX.Element;
    }
}
declare module 'chayns-components/dist/esm/react-chayns-accordion/component/AccordionSearch' {
    type AccordionSearchProps = {
        onSearch?: (...args: any[]) => any;
        searchPlaceholder?: string;
        onSearchEnter?: (...args: any[]) => any;
        searchValue?: string;
    };
    const AccordionSearch: React.SFC<AccordionSearchProps>;
    export default AccordionSearch;
}
declare module 'chayns-components/dist/esm/react-chayns-accordion/component/AccordionHeadRight' {
    interface IAccordionHeadRightProps extends React.HTMLAttributes<Element> {
        right?: React.ReactNode;
        onSearch?: (...args: any[]) => any;
        onSearchEnter?: (...args: any[]) => any;
        searchPlaceholder?: string;
        searchValue?: string;
        state?: any;
    }

    export default class AccordionHeadRight extends React.PureComponent<
        IAccordionHeadRightProps,
        {}
    > {
        renderOpen(openChildren: any): any;

        render(): JSX.Element;
    }
}
declare module 'chayns-components/dist/esm/react-chayns-accordion/component/Accordion' {
    interface IAccordionProps extends React.HTMLAttributes<Element> {
        head: React.ReactNode;
        headMultiline?: boolean;
        headClassNames?: string | string[] | any;
        headCustomAttributes?: any;
        right?: React.ReactNode;
        renderClosed?: boolean;
        isWrapped?: boolean;
        dataGroup?: string;
        className?: string;
        id?: string;
        style?: {
            [key: string]: string | number;
        };
        styleBody?: {
            [key: string]: string | number;
        };
        onOpen?: (...args: any[]) => any;
        onClose?: (...args: any[]) => any;
        defaultOpened?: boolean;
        reference?: (...args: any[]) => any;
        autogrow?: boolean;
        open?: boolean;
        icon?: any | string | React.ReactNode;
        noRotate?: boolean;
        fixed?: boolean;
        noIcon?: boolean;
        onSearch?: (...args: any[]) => any;
        onSearchEnter?: (...args: any[]) => any;
        searchPlaceholder?: string;
        searchValue?: string;
        removeContentClosed?: boolean;
        onClick?: (...args: any[]) => any;
        disabled?: boolean;
        controlled?: boolean;
    }

    type AccordionState = {
        currentState?: number;
        showBody?: boolean;
    };
    /**
     * Accordions are collapsible sections that are toggled by interacting with a
     * permanently visible header.
     */
    export default class Accordion extends React.PureComponent<IAccordionProps, AccordionState> {
        accordion: any;

        body: any;

        rendered: boolean;

        timeout: any;

        constructor(props: any);

        componentDidMount(): void;

        componentDidUpdate(prevProps: any, prevState: any): void;

        componentWillUnmount(): void;

        getBody(): {};

        handleAccordionClick: (event: any) => void;

        accordionCloseListener(event: any, preventOnClose: any, controlledChange?: boolean): void;

        accordionOpenListener(event: any, preventOnOpen: any, controlledChange?: boolean): void;

        render(): JSX.Element;
    }
}
declare module 'chayns-components/dist/esm/react-chayns-accordion/component/AccordionIntro' {
    const AccordionIntro: React.SFC<{}>;
    export default AccordionIntro;
}
declare module 'chayns-components/dist/esm/utils/equalizer' {
    /**
     * Equalizer
     * To equalize the height/width of different html elements, you have to give them the attributes
     * "data-cc-equalize-width", "data-cc-equalize-height" or "data-cc-equalize-both". The value of the attributes
     * has to be an id which all of the elements that should be equalized have. Also, you have to set this id to
     * the attribute "data-cc-equalize" on a common parent element.
     *
     * @param {HTMLElement} element - optional root node of the elements that should be equalized
     */
    export default function equalizer(element: any): void;
}
declare module 'chayns-components/dist/esm/react-chayns-amountcontrol/component/AmountInput' {
    interface IAmountInputProps extends React.HTMLAttributes<Element> {
        amount: number;
        onAdd: (...args: any[]) => any;
        onInput: (...args: any[]) => any;
        onChange: (...args: any[]) => any;
        buttonText?: string;
        showInput: boolean;
        disabled?: boolean;
        disableInput?: boolean;
        autoInput?: boolean;
        buttonFormatHandler?: (...args: any[]) => any;
        tempAmount?: number;
        tempValue?: string | number;
        equalize?: string;
        focusOnClick?: boolean;
        contentWidth?: number;
        stopPropagation: boolean;
    }

    export default class AmountInput extends React.PureComponent<IAmountInputProps, {}> {
        inputRef: any;

        componentDidMount(): void;

        componentDidUpdate(prevProps: any): void;

        onButtonClick: (e: any) => void;

        onInputChange: (value: any) => void;

        onInputBlur: () => void;

        setRef: (ref: any) => void;

        getButtonValue(): any;

        render(): JSX.Element[];
    }
}
declare module 'chayns-components/dist/esm/react-chayns-amountcontrol/component/ControlButton' {
    interface IControlButtonProps extends React.HTMLAttributes<Element> {
        icon: string | any;
        onClick: (...args: any[]) => any;
        className: string;
        stopPropagation: boolean;
        disabled?: boolean;
        color?: string;
    }

    export default class ControlButton extends React.PureComponent<IControlButtonProps, {}> {
        render(): JSX.Element;
    }
}
declare module 'chayns-components/dist/esm/react-chayns-amountcontrol/component/AmountControl' {
    interface IAmountControlProps extends React.HTMLAttributes<Element> {
        buttonText?: string;
        amount?: number;
        onChange?: (...args: any[]) => any;
        onInput?: (...args: any[]) => any;
        onAdd?: (...args: any[]) => any;
        onRemove?: (...args: any[]) => any;
        disabled?: boolean;
        disableInput?: boolean;
        disableAdd?: boolean;
        disableRemove?: boolean;
        className?: string;
        autoInput?: boolean;
        buttonFormatHandler?: (...args: any[]) => any;
        showInput?: boolean;
        icon?: string | any;
        plusIcon?: string | any;
        minusIcon?: string | any;
        removeIcon?: string | any;
        removeColor?: string;
        addColor?: string;
        iconColor?: string;
        equalize?: string;
        focusOnClick?: boolean;
        contentWidth?: number;
        min?: number;
        max?: number;
        stopPropagation?: boolean;
        hasAlwaysControls?: boolean;
    }

    type AmountControlState = {
        tempAmount?: any;
        tempValue?: any;
    };
    /**
     * The AmountControl is a three-segment control used to increase or decrease an
     * incremental value.
     */
    export default class AmountControl extends React.PureComponent<
        IAmountControlProps,
        AmountControlState
    > {
        constructor(props: any);

        componentDidUpdate(prevProps: any): void;

        onInput: (value: any) => void;

        getRemoveIcon(): any;

        addItem: () => void;

        removeItem: () => void;

        changeAmount: (amount: any) => void;

        render(): JSX.Element;
    }
}
declare module 'chayns-components/dist/esm/react-chayns-animation_wrapper/component/AnimationWrapper' {
    import './animation-wrapper.scss';

    type AnimationWrapperProps = {
        animationTime?: number;
        setAutoTime?: number;
    };
    const AnimationWrapper: React.SFC<AnimationWrapperProps>;
    export default AnimationWrapper;
}
declare module 'chayns-components/dist/esm/react-chayns-badge/component/Badge' {
    type BadgeProps = {
        className?: string;
        style?: {
            [key: string]: string | number;
        };
        badgeRef?: (...args: any[]) => any;
    };
    const Badge: React.SFC<BadgeProps>;
    export default Badge;
}
declare module 'chayns-components/dist/esm/react-chayns-tapp_portal/component/TappPortal' {
    type TappPortalProps = {
        parent?: any;
    };
    const TappPortal: React.SFC<TappPortalProps>;
    export default TappPortal;
}
declare module 'chayns-components/dist/esm/react-chayns-bubble/component/Bubble' {
    type BubbleProps = {
        className?: string;
        style?: {
            [key: string]: string | number;
        };
        position?: 0 | 1 | 2 | 3 | 4 | 5;
        parent?: any;
        coordinates?: {
            x: number;
            y: number;
        };
        onMouseEnter?: (...args: any[]) => any;
        onMouseLeave?: (...args: any[]) => any;
        topDivStyle?: {
            [key: string]: string | number;
        };
    };
    const Bubble: React.SFC<BubbleProps>;
    export default Bubble;
}
declare module 'chayns-components/dist/esm/react-chayns-button/component/ChooseButton' {
    type ChooseButtonProps = {
        disabled?: boolean;
        onClick?: (...args: any[]) => any;
        className?: string;
        icon?: string | any;
        stopPropagation?: boolean;
        type?: 'button' | 'submit' | 'reset';
    };
    const ChooseButton: React.SFC<ChooseButtonProps>;
    export default ChooseButton;
}
declare module 'chayns-components/dist/esm/react-chayns-calendar/utils/areDatesEqual' {
    /**
     * Compares two dates with year, month and date (looser equality than == operator)
     * @param {Date} date1 - First date for comparison
     * @param {Date} date2 - First date for comparison
     */
    export default function areDatesEqual(date1: any, date2: any): boolean;
}
declare module 'chayns-components/dist/esm/react-chayns-calendar/utils/DateStorage' {
    export default class DateStorage {
        static From(year: any, month: any, date: any): any;
    }
}
declare module 'chayns-components/dist/esm/react-chayns-calendar/component/DayItem' {
    interface IDayItemProps extends React.HTMLAttributes<Element> {
        date: any;
        inMonth: boolean;
        onDateSelect?: (...args: any[]) => any;
        activateAll?: boolean;
        selected?: any;
        activated?: boolean;
        highlighted?: boolean;
        highlightStyle?: any;
    }

    class DayItem extends React.PureComponent<IDayItemProps, {}> {
        constructor(props: any);

        onClick(): void;

        render(): JSX.Element;
    }

    export default DayItem;
}
declare module 'chayns-components/dist/esm/react-chayns-calendar/component/MonthTable' {
    interface IMonthTableProps extends React.HTMLAttributes<Element> {
        onDateSelect?: (...args: any[]) => any;
        activateAll?: boolean;
        startDate?: any;
        selected?: any;
        activated?: any[];
        highlighted?: {
            dates: any[];
            style?: any;
        }[];
    }

    export default class MonthTable extends React.PureComponent<IMonthTableProps, {}> {
        static isActivated(activated: any, date: any): boolean;

        static getHighlightedData(
            highlighted: any,
            date: any
        ): {
            highlighted: boolean;
            style: any;
        };

        createTable(): any[];

        render(): JSX.Element;
    }
}
declare module 'chayns-components/dist/esm/react-chayns-calendar/component/Month' {
    type MonthProps = {
        title?: string;
        className?: string;
        onDateSelect?: (...args: any[]) => any;
        activateAll?: boolean;
        startDate?: any;
        endDate?: any;
        selected?: any;
        activated?: any[];
        highlighted?:
            | {
                  dates?: any[];
                  style?: {
                      color?: string;
                      backgroundColor?: string;
                  };
              }
            | {
                  dates?: any[];
                  style?: {
                      color?: string;
                      backgroundColor?: string;
                  };
              }[];
    };
    const Month: React.SFC<MonthProps>;
    export default Month;
}
declare module 'chayns-components/dist/esm/react-chayns-calendar/component/Calendar' {
    interface ICalendarProps extends React.HTMLAttributes<Element> {
        startDate?: any;
        endDate?: any;
        onDateSelect?: (...args: any[]) => any;
        selected?: any;
        activated?: any[];
        highlighted?:
            | {
                  dates?: any[];
                  color?: string;
              }
            | {
                  dates?: any[];
                  color?: string;
              }[];
        activateAll?: boolean;
        style?: {
            [key: string]: string | number;
        };
        className?: string;
    }

    type CalendarState = {
        focus?: Date;
        months?: undefined[];
        translate?: string;
        animate?: boolean;
    };
    /**
     * An interactive grid calendar that can highlight specified dates.
     */
    export default class Calendar extends React.Component<ICalendarProps, CalendarState> {
        moveSwipeX: any;

        newMonths: {
            title: any;
            className: string;
            startDate: Date;
            endDate: Date;
        }[];

        swipeX: any;

        timeout: number;

        static IsMobile: () => boolean;

        constructor(props: any);

        handleTouchStart(event: any): void;

        handleTouchMove(event: any): void;

        handleTouchEnd(): void;

        setMonths(_focus: any, translate: any): void;

        getNavigateLeft(): boolean;

        getNavigateRight(): boolean;

        navigateRightOnClick(): void;

        navigateLeftOnClick(): void;

        renderMonths(): JSX.Element[];

        render(): JSX.Element;
    }
}
declare module 'chayns-components/dist/esm/utils/stopPropagationListener' {
    export default function stopPropagationListener(event: any): void;
}
declare module 'chayns-components/dist/esm/react-chayns-checkbox/views/Checkbox' {
    type CheckboxProps = {
        id: number | string;
        style?: {
            [key: string]: string | number;
        };
        className?: string;
        labelStyle?: {
            [key: string]: string | number;
        };
        labelClassName?: string;
        label?: React.ReactNode | React.ReactNode[];
        onChange?: (...args: any[]) => any;
        checked?: boolean;
        defaultChecked?: boolean;
        disabled?: boolean;
        dangerouslySetLabel?: any;
        stopPropagation?: boolean;
    };
    const Checkbox: React.SFC<CheckboxProps>;
    export default Checkbox;
}
declare module 'chayns-components/dist/esm/react-chayns-checkbox/views/ToggleButton' {
    type ToggleButtonProps = {
        id: number | string;
        style?: any;
        className?: string;
        labelStyle?: any;
        labelClassName?: string;
        label?: React.ReactNode | React.ReactNode[];
        onChange?: (...args: any[]) => any;
        checked?: boolean;
        defaultChecked?: boolean;
        disabled?: boolean;
        dangerouslySetLabel?: any;
        stopPropagation?: boolean;
    };
    const ToggleButton: React.SFC<ToggleButtonProps>;
    export default ToggleButton;
}
declare module 'chayns-components/dist/esm/react-chayns-checkbox/component/Checkbox' {
    type CheckboxProps = {
        style?: {
            [key: string]: string | number;
        };
        className?: string;
        labelStyle?: {
            [key: string]: string | number;
        };
        labelClassName?: string;
        label?: React.ReactNode | React.ReactNode[];
        onChange?: (...args: any[]) => any;
        toggleButton?: boolean;
        checked?: boolean;
        defaultChecked?: boolean;
        disabled?: boolean;
        dangerouslySetLabel?: {
            __html: string;
        };
        stopPropagation?: boolean;
        id?: number | string;
    };
    const Checkbox: React.SFC<CheckboxProps>;
    export default Checkbox;
}
declare module 'chayns-components/dist/esm/utils/color/index' {
    import {
        getRgb255String,
        hexToHsv,
        hexToRgb255,
        hsvToHex,
        hsvToRgb255,
        rgb255ToHex,
        rgb255ToHsv,
    } from '@chayns/colors';

    const hsvToRgbString: (hsv: any) => any;
    export {
        hexToHsv as hexStringToHsv,
        hexToRgb255 as hexStringToRgb,
        hsvToRgb255 as hsvToRgb,
        hsvToHex as hsvToHexString,
        hsvToRgbString,
        rgb255ToHsv as rgbToHsv,
        rgb255ToHex as rgbToHexString,
        getRgb255String as rgbToRgbString,
    };
}
declare module 'chayns-components/dist/esm/utils/restrictInterval' {
    export default function restrictInterval(value: any, min: any, max: any): number;
}
declare module 'chayns-components/dist/esm/react-chayns-color_picker/component/colorArea/ColorArea' {
    import './ColorArea.scss';

    interface IColorAreaProps extends React.HTMLAttributes<Element> {
        color: {
            h: number;
            s: number;
            v: number;
        };
        height?: number;
        width?: number;
        onChange?: (...args: any[]) => any;
        onChangeEnd?: (...args: any[]) => any;
    }

    type ColorAreaState = {
        top?: number;
        left?: number;
    };
    export default class ColorArea extends React.Component<IColorAreaProps, ColorAreaState> {
        area: any;

        canvas: any;

        rect: any;

        constructor(props: any);

        componentDidMount(): void;

        shouldComponentUpdate(nextProps: any, nextState: any): boolean;

        componentDidUpdate(prevProps: any): void;

        setSelectorPosition: () => void;

        drawCanvas: () => void;

        getColor: (
            x: any,
            y: any
        ) => {
            s: number;
            v: number;
            h: number;
        };

        down: (event: any) => void;

        move: (event: any) => void;

        mouseenter: (event: any) => void;

        up: () => void;

        render(): JSX.Element;
    }
}
declare module 'chayns-components/dist/esm/utils/color/constants' {
    export const HEX_REGEX: RegExp;
    export const RGB_REGEX: RegExp;
}
declare module 'chayns-components/dist/esm/react-chayns-color_picker/component/colorInput/ColorInput' {
    import './ColorInput.scss';

    interface IColorInputProps extends React.HTMLAttributes<Element> {
        color: {
            h: number;
            s: number;
            v: number;
            a?: number;
        };
        onChange: (...args: any[]) => any;
        colorModel: number;
        onModelToggle: (...args: any[]) => any;
        transparency: boolean;
    }

    type ColorInputState = {
        inputValue?: any;
    };
    export default class ColorInput extends React.Component<IColorInputProps, ColorInputState> {
        constructor(props: any);

        componentDidUpdate(prevProps: any): void;

        onChange: (value: any) => void;

        getInputValue: () => any;

        setColor: () => void;

        onBlur: (value: any) => void;

        render(): JSX.Element;
    }
}
declare module 'chayns-components/dist/esm/react-chayns-slider/component/Slider' {
    import './slider.scss';

    interface ISliderProps extends React.HTMLAttributes<Element> {
        min?: number;
        max?: number;
        step?: number;
        defaultValue?: number;
        value?: number;
        style?: {
            [key: string]: number | string;
        };
        className?: string;
        showLabel?: boolean;
        valueFormatter?: (...args: any[]) => any;
        labelStyle?: {
            [key: string]: number | string;
        };
        onChangeStart?: (...args: any[]) => any;
        onChange?: (...args: any[]) => any;
        onChangeEnd?: (...args: any[]) => any;
        thumbStyle?: {
            [key: string]: number | string;
        };
        disabled?: boolean;
        vertical?: boolean;
        interval?: boolean;
        minInterval?: number;
        maxInterval?: number;
        defaultStartValue?: number;
        defaultEndValue?: number;
        startValue?: number;
        endValue?: number;
        trackStyle?: {
            [key: string]: number | string;
        };
        innerTrackStyle?: {
            [key: string]: number | string;
        };
        showValueInThumb?: boolean;
        scaleOnDown?: boolean;
        thumbWidth?: number;
    }

    /**
     * A horizontal track with a thumb that can be moved between a minimum and a
     * maximum value.
     */
    export default class Slider extends React.PureComponent<ISliderProps, {}> {
        arrow: any;

        bar: any;

        clientWidth: string;

        clientX: string;

        dot: any;

        innerTrack: any;

        label: any;

        left: string;

        leftArrow: any;

        leftDot: any;

        leftPercent: boolean;

        leftThumb: any;

        marginLeft: string;

        marginRight: string;

        movementX: string;

        offsetLeft: string;

        offsetWidth: string;

        percent: number;

        preventClick: any;

        right: string;

        rightArrow: any;

        rightDot: any;

        rightPercent: number;

        rightThumb: any;

        target: null;

        thumb: any;

        width: string;

        constructor(props: any);

        componentDidMount(): void;

        componentDidUpdate(prevProps: any): void;

        thumbDown: (e: any) => void;

        thumbMove: (e: any) => void;

        thumbUp: () => void;

        innerTrackDown: (e: any) => void;

        innerTrackMove: (e: any) => void;

        innerTrackUp: () => void;

        trackDown: (e: any) => void;

        setElements: (percents: any) => void;

        getRealValue: (percent: any, min: any, max: any) => any;

        getSteppedPercents: (percents: any) => any;

        onChange: (listeners: any, percents: any) => void;

        setDirection: () => void;

        setScrolling: (enabled: any) => void;

        render(): JSX.Element;
    }
}
declare module 'chayns-components/dist/esm/react-chayns-color_picker/component/hueSlider/HueSlider' {
    interface IHueSliderProps extends React.HTMLAttributes<Element> {
        onChange?: (...args: any[]) => any;
        onChangeEnd?: (...args: any[]) => any;
        showTooltip?: boolean;
        color: number | string;
    }

    export default class HueSlider extends React.PureComponent<IHueSliderProps, {}> {
        onChange: (value: any) => void;

        onChangeEnd: (value: any) => void;

        render(): JSX.Element;
    }
}
declare module 'chayns-components/dist/esm/react-chayns-color_picker/component/transparencySlider/TransparencySlider' {
    import './TransparencySlider.scss';

    interface ITransparencySliderProps extends React.HTMLAttributes<Element> {
        onChange?: (...args: any[]) => any;
        onChangeEnd?: (...args: any[]) => any;
        color: {
            h: number;
            s: number;
            v: number;
            a: number;
        };
    }

    export default class TransparencySlider extends React.PureComponent<
        ITransparencySliderProps,
        {}
    > {
        onChange: (value: any) => void;

        onChangeEnd: (value: any) => void;

        render(): JSX.Element;
    }
}
declare module 'chayns-components/dist/esm/utils/isDescendant' {
    export default function isDescendant(parent: any, child: any): boolean;
}
declare module 'chayns-components/dist/esm/react-chayns-color_picker/component/ColorPicker' {
    import './ColorPicker.scss';

    type ColorPickerProps = {
        inline?: boolean;
        color: string;
        bubblePosition?: number;
        onChange?: (...args: any[]) => any;
        onChangeEnd?: (...args: any[]) => any;
        onBlur?: (...args: any[]) => any;
        transparency?: boolean;
        parent?: any;
        className?: string;
        style?: {
            [key: string]: number | string;
        };
        bubbleClassName?: string;
        bubbleStyle?: {
            [key: string]: number | string;
        };
        input?: boolean;
        defaultColorModel?: number;
        removeParentSpace?: boolean;
    };
    const ColorPicker: React.SFC<ColorPickerProps>;
    export default ColorPicker;
}
declare module 'chayns-components/dist/esm/react-chayns-color_scheme/component/ColorScheme' {
    type ColorSchemeProps = {
        color?: string;
        secondaryColor?: string;
        colorMode?: string | number;
        style?: {
            [key: string]: string | number;
        };
        cssVariables?: {
            [key: string]: string | number;
        };
    };
    const ColorScheme: React.SFC<ColorSchemeProps>;
    export default ColorScheme;
}
declare module 'chayns-components/dist/esm/utils/isServer' {
    export function isServer(): boolean;
}
declare module 'chayns-components/dist/esm/react-chayns-combobox/utils/isInIframeDialog' {
    export default function isInIframeDialog(): boolean;
}
declare module 'chayns-components/dist/esm/react-chayns-combobox/component/DialogSelectComboBox' {
    type DialogSelectComboBoxProps = {
        onSelect?: (...args: any[]) => any;
        disabled?: boolean;
        label?: string;
        list: any[];
        listKey: string;
        listValue: string;
        className?: string;
        defaultValue?: string;
        stopPropagation?: boolean;
        parent?: ((...args: any[]) => any) | React.ReactNode;
        style?: any;
        value?: string | number;
    };
    const DialogSelectComboBox: React.SFC<DialogSelectComboBoxProps>;
    export default DialogSelectComboBox;
}
declare module 'chayns-components/dist/esm/react-chayns-combobox/component/HTMLSelectComboBox' {
    interface IHTMLSelectComboBoxProps extends React.HTMLAttributes<Element> {
        onSelect?: (...args: any[]) => any;
        disabled?: boolean;
        label?: string;
        list: any[];
        listKey: string;
        listValue: string;
        className?: string;
        defaultValue?: string;
        stopPropagation?: boolean;
    }

    export default class HTMLSelectComboBox extends React.PureComponent<
        IHTMLSelectComboBoxProps,
        {}
    > {
        constructor();

        onSelect(e: any): void;

        render(): JSX.Element;
    }
}
declare module 'chayns-components/dist/esm/react-chayns-combobox/component/ComboBox' {
    import './ComboBox.scss';

    type ComboBoxProps = {
        onSelect?: (...args: any[]) => any;
        disabled?: boolean;
        label?: string;
        list: any[];
        listKey: string;
        listValue: string;
        className?: string;
        defaultValue?: string;
        stopPropagation?: boolean;
        parent?: ((...args: any[]) => any) | React.ReactNode;
        style?: {
            [key: string]: string | number;
        };
        value?: string | number;
    };
    const ComboBox: React.SFC<ComboBoxProps>;
    export default ComboBox;
}
declare module 'chayns-components/dist/esm/utils/tappWidth' {
    /**
     * Gets the inner width of the tapp.
     * @returns {int} - returns the inner width of the tapp. If there is no tapp element, it will return null.
     */
    export default function getTappWidth(): number;
}
declare module 'chayns-components/dist/esm/utils/tobitEmployee' {
    /**
     * Requests an endpoint to get the information if the user is a Tobit.Software employee.
     * @returns {Promise<>} - Promise is resolved when user is a Tobit.Software employee.
     */
    export default function isTobitEmployee(): Promise<unknown>;
}
declare module 'chayns-components/dist/esm/react-chayns-textstring/component/TextString' {
    interface ITextStringProps extends React.HTMLAttributes<Element> {
        stringName?: string;
        replacements?: {
            [key: string]: string | number | undefined;
        };
        useDangerouslySetInnerHTML?: boolean;
        language?: string;
        fallback?: string;
        setProps?: {
            [key: string]: any | string | number;
        };
        preventNoTranslate?: boolean;
    }

    type TextStringState = {
        textString?: any;
        textStringProps?: {};
    };
    /**
     * Loads text strings from our database and displays them. Handles replacements
     * and changing the string via `CTRL` + `Click` (only internal).
     */
    export default class TextString extends React.Component<ITextStringProps, TextStringState> {
        static getTextString(stringName: any, language?: any, fallback?: any): any;

        static language: string;

        static loadLibrary(projectName: any): Promise<any>;

        static changeTextString(stringName: any, text: any, language: any): Promise<unknown>;

        static setLanguage(language: any): void;

        static replace(text: any, replacements: any): any;

        constructor(props: any);

        componentDidUpdate(prevProps: any): void;

        setTextStrings(props: any): void;

        childrenOnClick(): void;

        selectStringToChange(): void;

        selectLanguageToChange(stringName: any): void;

        changeStringDialog(stringName: any, lang: any): void;

        changeStringResult(data: any, lang: any): void;

        render(): React.DetailedReactHTMLElement<any, HTMLElement>;
    }
}
declare module 'chayns-components/dist/esm/react-chayns-contextmenu/component/ContextMenu' {
    type ContextMenuProps = {
        onLayerClick?: (...args: any[]) => any;
        coordinates?: {
            x: number;
            y: number;
        };
        items?: {
            className?: string;
            onClick?: (...args: any[]) => any;
            text: string | React.ReactNode;
            stringName?: string;
            icon?: string | any;
        }[];
        position?: number;
        positionOnChildren?: number;
        parent?: any;
        onChildrenClick?: (...args: any[]) => any;
        childrenStyle?: {
            [key: string]: string | number;
        };
        childrenClassName?: string;
        stopPropagation?: boolean;
        minWidth?: number;
        maxWidth?: number;
        showTriggerBackground?: boolean;
        className?: string;
        style?: any;
        removeParentSpace?: boolean;
        disableDialog?: boolean;
        arrowDistance?: number;
    };
    const ContextMenu: React.SFC<ContextMenuProps>;
    export default ContextMenu;
}
declare module 'chayns-components/dist/esm/react-chayns-dateinfo/constants/text' {
    const text: {
        de: {
            RELATIVE_TEXT: {
                past: {
                    second: string;
                    seconds: string;
                    seconds0: string;
                    minute: string;
                    minutes: string;
                    minutes0: string;
                    hour: string;
                    hours: string;
                    hours0: string;
                    day: string;
                    days: string;
                    days0: string;
                    month: string;
                    months: string;
                    months0: string;
                    year: string;
                    years: string;
                    years0: string;
                };
                now: {
                    now: string;
                };
                future: {
                    second: string;
                    seconds: string;
                    seconds0: string;
                    minute: string;
                    minutes: string;
                    minutes0: string;
                    hour: string;
                    hours: string;
                    hours0: string;
                    day: string;
                    days: string;
                    days0: string;
                    month: string;
                    months: string;
                    months0: string;
                    year: string;
                    years: string;
                    years0: string;
                };
            };
            ABSOLUTE_TEXT: {
                date: string;
                dateMW: string;
                dateMSW: string;
                time: string;
                datetime: string;
                datetimeMW: string;
                datetimeMSW: string;
                at: string;
            };
            INTERVAL: {
                differentDays: string;
                sameDay: string;
            };
            WEEKDAYS: string[];
            MONTHS: string[];
            MONTHS_SHORT: string[];
        };
        en: {
            RELATIVE_TEXT: {
                past: {
                    second: string;
                    seconds: string;
                    seconds0: string;
                    minute: string;
                    minutes: string;
                    minutes0: string;
                    hour: string;
                    hours: string;
                    hours0: string;
                    day: string;
                    days: string;
                    days0: string;
                    month: string;
                    months: string;
                    months0: string;
                    year: string;
                    years: string;
                    years0: string;
                };
                now: {
                    now: string;
                };
                future: {
                    second: string;
                    seconds: string;
                    seconds0: string;
                    minute: string;
                    minutes: string;
                    minutes0: string;
                    hour: string;
                    hours: string;
                    hours0: string;
                    day: string;
                    days: string;
                    days0: string;
                    month: string;
                    months: string;
                    months0: string;
                    year: string;
                    years: string;
                    years0: string;
                };
            };
            ABSOLUTE_TEXT: {
                date: string;
                dateMW: string;
                dateMSW: string;
                time: string;
                datetime: string;
                datetimeMW: string;
                datetimeMSW: string;
                at: string;
            };
            INTERVAL: {
                differentDays: string;
                sameDay: string;
            };
            WEEKDAYS: string[];
            MONTHS: string[];
            MONTHS_SHORT: string[];
        };
        nl: {
            RELATIVE_TEXT: {
                past: {
                    second: string;
                    seconds: string;
                    seconds0: string;
                    minute: string;
                    minutes: string;
                    minutes0: string;
                    hour: string;
                    hours: string;
                    hours0: string;
                    day: string;
                    days: string;
                    days0: string;
                    month: string;
                    months: string;
                    months0: string;
                    year: string;
                    years: string;
                    years0: string;
                };
                now: {
                    now: string;
                };
                future: {
                    second: string;
                    seconds: string;
                    seconds0: string;
                    minute: string;
                    minutes: string;
                    minutes0: string;
                    hour: string;
                    hours: string;
                    hours0: string;
                    day: string;
                    days: string;
                    days0: string;
                    month: string;
                    months: string;
                    months0: string;
                    year: string;
                    years: string;
                    years0: string;
                };
            };
            ABSOLUTE_TEXT: {
                date: string;
                dateMW: string;
                dateMSW: string;
                time: string;
                datetime: string;
                datetimeMW: string;
                datetimeMSW: string;
                at: string;
            };
            INTERVAL: {
                differentDays: string;
                sameDay: string;
            };
            WEEKDAYS: string[];
            MONTHS: string[];
            MONTHS_SHORT: string[];
        };
    };
    export default text;
}
declare module 'chayns-components/dist/esm/react-chayns-dateinfo/component/DateInfo' {
    interface IDateInfoProps extends React.HTMLAttributes<Element> {
        language?: string;
        date: string | number | any;
        date2?: string | number | any;
        showTime?: boolean;
        showDate?: boolean;
        writeDay?: boolean;
        writeMonth?: boolean;
        noTitle?: boolean;
        useToday?: boolean;
        useTomorrowYesterday?: boolean;
        hideYear?: boolean;
    }

    type DateInfoState = {
        language?: any;
    };
    /**
     * Formats a date or date range to be easily readable and reveals the absolute
     * date on hover.
     */
    export default class DateInfo extends React.PureComponent<IDateInfoProps, DateInfoState> {
        static getRelativeDateString: (
            date: any,
            options?: {
                language: string;
            }
        ) => any;

        static getAbsoluteDateString: (
            date: any,
            options?: {
                language: string;
            }
        ) => any;

        static replace: (string: any, relativeValues: any, absoluteValues: any) => any;

        static leadingZero: (value: any) => any;

        constructor(props: any);

        render(): React.DetailedReactHTMLElement<any, HTMLElement>;
    }
}
declare module 'chayns-components/dist/esm/utils/loadScript' {
    export default function loadScript(id: any, src: any): Promise<unknown>;
}
declare module 'chayns-components/dist/esm/utils/loadStyle' {
    export default function loadStyle(id: any, src: any): Promise<unknown>;
}
declare module 'chayns-components/dist/esm/utils/loadOptionalDependency' {
    export default function loadOptionalDependency(
        module: any,
        windowModule: any,
        jsArray: any,
        cssArray: any,
        returnPromise?: boolean
    ): any;
}
declare module 'chayns-components/dist/esm/react-chayns-emoji_input/component/EmojiInput' {
    interface IEmojiInputProps extends React.HTMLAttributes<Element> {
        placeholder: string;
        onInput: (...args: any[]) => any;
        value: string;
        id: string;
        hideBorder?: boolean;
        onKeyDown?: (...args: any[]) => any;
        disabled?: boolean;
        style?: {
            [key: string]: string | number;
        };
        onFocus?: (...args: any[]) => any;
        onBlur?: (...args: any[]) => any;
    }

    /**
     * A text input that allows emojis to be put in.
     */
    export default class EmojiInput extends React.Component<IEmojiInputProps, {}> {
        input: any;

        placeholder: any;

        lastKeyPressed: any;

        firstRender: boolean;

        activeNode: number;

        cursorPos: number;

        constructor(props: any);

        static shouldComponentUpdate(): boolean;

        componentDidUpdate(prevProps: any): void;

        static getCaretCharacterOffsetWithin(element: any): number;

        getActiveChildNode: () => number;

        setCursorPos: () => void;

        getPureInnerText: (elem: any) => any;

        handleInput: (event: any) => void;

        handleKeyDown: (event: any) => void;

        handleKeyUp: (event: any) => void;

        handleFocus: (event: any) => void;

        handleBlur: (event: any) => void;

        scrollToCursor: (scrollTop: any, scrollHeight: any) => void;

        formatText: (text: any) => string;

        updateDOM: (newProps: any) => void;

        render(): JSX.Element;
    }
}
declare module 'chayns-components/dist/esm/utils/insertStyle' {
    export default function insertStyle(id: any, css: any): void;
}
declare module 'chayns-components/dist/esm/utils/isInteger' {
    const _default: (number: unknown) => boolean;
    export default _default;
}
declare module 'chayns-components/dist/esm/react-chayns-expandable_content/component/ExpandableContent' {
    interface IExpandableContentProps extends React.HTMLAttributes<Element> {
        classNames?: {
            opening?: string;
            opened?: string;
            closing?: string;
            closed?: string;
        };
        timeout?: {
            opening?: number;
            closing?: number;
        };
        open: boolean;
        style?: {
            [key: string]: string | number;
        };
        className?: string;
        removeContentClosed?: boolean;
        props?: any;
    }

    type ExpandableContentState = {
        currentState?: number;
    };
    /**
     * A collapsible section that reveals its children with a height transition.
     */
    export default class ExpandableContent extends React.Component<
        IExpandableContentProps,
        ExpandableContentState
    > {
        contentRendered: boolean;

        timeout: number;

        static getMaxHeight(state: any, style: any): any;

        static getClassNames(state: any, classNames: any): any;

        constructor(props: any);

        componentDidMount(): void;

        componentDidUpdate(prevProps: any): void;

        open(timeout: any): void;

        close(timeout: any): void;

        render(): JSX.Element;
    }
}
declare module 'chayns-components/dist/esm/react-chayns-file_input/utils/fileInputCall' {
    export default function fileInputCall(): Promise<{
        target: {
            files: File[];
        };
    }>;
}
declare module 'chayns-components/dist/esm/react-chayns-file_input/utils/supportsFileInput' {
    export default function supportsFileInput(): boolean;
}
declare module 'chayns-components/dist/esm/react-chayns-file_input/component/FileInput' {
    interface IFileInputProps extends React.HTMLAttributes<Element> {
        className?: string;
        style?: {
            [key: string]: string | number;
        };
        stopPropagation?: boolean;
        disabled?: boolean;
        errorMessages?: {
            tooMuchFiles?: string;
            fileTooBig?: string;
            wrongFileType?: string;
            permanentNoPermission?: string;
            temporaryNoPermission?: string;
        };
        items?: {
            types?: string[];
            maxFileSize?: number;
            maxNumberOfFiles?: number;
            directory?: boolean;
            onClick?: (...args: any[]) => any;
            onChange?: (...args: any[]) => any;
            className?: string;
            style?: {
                [key: string]: string | number;
            };
            disabled?: boolean;
            content?:
                | {
                      text?: string;
                      icon?: string | any;
                  }
                | {};
        }[];
    }

    type FileInputState = {
        hasMemoryAccess?: boolean;
    };
    /**
     * Accepts specified file types via dialog or drag and drop.
     */
    export default class FileInput extends React.PureComponent<IFileInputProps, FileInputState> {
        fileInputRefs: any;

        itemRefs: any;

        needAppCall: any;

        constructor(props: any);

        onDragEnter: (event: any, item: any, index: any) => void;

        onDragLeave: (index: any) => void;

        onChange: (event: any, item: any, index: any) => void;

        onClick: (event: any, item: any, index: any) => Promise<void>;

        checkFileType: (fileType: any, supportedTypes: any) => boolean;

        render(): JSX.Element;
    }
}
declare module 'chayns-components/dist/esm/react-chayns-filterbutton/component/FilterButton' {
    import './FilterButton.scss';

    type FilterButtonProps = {
        label?: string | React.ReactNode | JSX.Element;
        count?: number;
        onChange?: (...args: any[]) => any;
        checked?: boolean;
        name?: string;
        value?: any;
        icon?: string;
        className?: string;
        style?: {
            [key: string]: string | number;
        };
        id?: string;
        disabled?: boolean;
        stopPropagation?: boolean;
        small?: boolean;
    };
    const FilterButton: React.SFC<FilterButtonProps>;
    export default FilterButton;
}
declare module 'chayns-components/dist/esm/react-chayns-formatted_input/utils/Formatter' {
    export default class Formatter {
        format(value: any): any;

        parse(value: any): any;

        validate(): {
            valid: boolean;
        };
    }
}
declare module 'chayns-components/dist/esm/react-chayns-formatted_input/component/FormattedInput' {
    interface IFormattedInputProps extends React.HTMLAttributes<Element> {
        initialFormatter: any;
        onChange?: (...args: any[]) => any;
        onEnter?: (...args: any[]) => any;
        inputRef?: (...args: any[]) => any;
        defaultValue?: any;
        props?: any;
    }

    type FormattedInputState = {
        value?: any;
        oldValue?: any;
    };
    /**
     * A text input that automatically formats its input with a formatter. Since
     * this component is based on the `Input`-component, it takes any of the
     * `Input`-components props, which are not listed here.
     *
     * This component only works as an uncontrolled component, meaning that it does
     * not take a `value`-prop.
     */
    export default class FormattedInput extends React.Component<
        IFormattedInputProps,
        FormattedInputState
    > {
        formatter: any;

        input: any;

        selection: any;

        lastSend: any;

        constructor(props: any);

        componentDidUpdate(): void;

        handleInputChange: (value: any, ...args: any[]) => void;

        handleChangeEvent: (value: any, ...args: any[]) => void;

        handleChange: (value: any, ...args: any[]) => void;

        handleEnter: (value: any, ...args: any[]) => void;

        render(): JSX.Element;
    }
}
declare module 'chayns-components/dist/esm/react-chayns-formatted_input/utils/IntegerFormatter' {
    import Formatter from 'react-chayns-formatted_input/utils/Formatter';

    export default class IntegerFormatter extends Formatter {
        static ALLOWED_CHARS: string[];

        format(value: any): string;

        parse(value: any): number | false;

        validate(
            value: any,
            selection: any
        ): {
            valid: boolean;
            selection: {
                start: number;
                end: number;
            };
        };
    }
}
declare module 'chayns-components/dist/esm/react-chayns-formatted_input/utils/DecimalFormatter' {
    export default class DecimalFormatter extends Formatter {
        config: {
            seperators: {
                thousand: boolean;
                decimal: string;
            };
            decimals: any;
        };

        constructor({
            decimalSeparator,
            thousandSeparator,
            decimals,
        }?: {
            decimalSeparator?: string;
            thousandSeparator?: string;
            decimals?: any;
        });

        format(value: any): string;

        parse(value: any): number | false;

        validateChars(value: any): boolean;

        validate(
            value: any,
            selection: any
        ):
            | {
                  valid: boolean;
                  selection: {
                      start: number;
                      end: number;
                  };
              }
            | {
                  valid: boolean;
                  selection?: undefined;
              };
    }
}
declare module 'chayns-components/dist/esm/react-chayns-formatted_input/utils/instances/formatDecimal' {
    import DecimalFormatter from 'react-chayns-formatted_input/utils/DecimalFormatter';

    export const FORMAT_DECIMAL: DecimalFormatter;
    export default FORMAT_DECIMAL;
}
declare module 'chayns-components/dist/esm/react-chayns-formatted_input/utils/instances/formatInteger' {
    import IntegerFormatter from 'react-chayns-formatted_input/utils/IntegerFormatter';

    const FORMAT_INTEGER: IntegerFormatter;
    export default FORMAT_INTEGER;
}
declare module 'chayns-components/dist/esm/utils/endsWith' {
    export default function endsWith(value: any, searchString: any): boolean;
}
declare module 'chayns-components/dist/esm/utils/startsWith' {
    export default function startsWith(value: any, searchString: any): boolean;
}
declare module 'chayns-components/dist/esm/react-chayns-formatted_input/utils/PriceFormatter' {
    export default class PriceFormatter extends DecimalFormatter {
        currency: {
            sign: string;
        };

        constructor(
            currencySign?: string,
            {
                decimalSeparator,
                thousandSeparator,
                currencyBefore,
            }?: {
                decimalSeparator?: string;
                thousandSeparator?: string;
                currencyBefore?: any;
            }
        );

        format(value: any): string;

        removeCurrencySign(
            value: any,
            selection?: any
        ): {
            value: any;
            selection: any;
        };

        parse(value: any): number | false;

        validate(
            value: any,
            selection: any
        ):
            | {
                  valid: boolean;
                  selection: {
                      start: number;
                      end: number;
                  };
              }
            | {
                  valid: boolean;
                  selection?: undefined;
              };
    }
}
declare module 'chayns-components/dist/esm/react-chayns-formatted_input/utils/instances/formatPrice' {
    import PriceFormatter from 'react-chayns-formatted_input/utils/PriceFormatter';

    export const FORMAT_PRICE: PriceFormatter;
    export default FORMAT_PRICE;
}
declare module 'chayns-components/dist/esm/react-chayns-gallery/utils/getDataUrl' {
    export function getDataUrlFromFile(file: any): Promise<unknown>;

    export function getDataUrlFromBase64(base64: any): any;
}
declare module 'chayns-components/dist/esm/react-chayns-smallwaitcursor/component/SmallWaitCursor' {
    interface ISmallWaitCursorProps extends React.HTMLAttributes<Element> {
        show?: boolean;
        style?: {
            [key: string]: number | string;
        };
        showBackground?: boolean;
        inline?: boolean;
        className?: string;
    }

    /**
     * A small circular loading indicator.
     */
    export default class SmallWaitCursor extends React.PureComponent<ISmallWaitCursorProps, {}> {
        render(): JSX.Element;
    }
}
declare module 'chayns-components/dist/esm/react-chayns-gallery/utils/getImageMetaData' {
    export function getImageMetaDataFromApi(url: any): Promise<unknown>;

    export function getImageMetaDataFromPreview(url: any): Promise<unknown>;
}
declare module 'chayns-components/dist/esm/react-chayns-gallery/utils/getOrientation' {
    /**
     * This function returns the exif orientation data.
     * Idea from http://stackoverflow.com/a/32490603.
     *
     * @param file - The file that should be checked
     * @returns Promise(resolve: {exifOrientationCode, rotation, mirrored})
     */
    export default function getOrientation(file: any): Promise<unknown>;
}
declare module 'chayns-components/dist/esm/react-chayns-gallery/component/Image' {
    import './Image.scss';

    interface IImageProps extends React.HTMLAttributes<Element> {
        image?: any;
        onClick?: (...args: any[]) => any;
        moreImages?: number;
        className?: string;
        classNameLandscape?: string;
        classNamePortrait?: string;
        style?: any;
        stylePortrait?: any;
        styleLandscape?: any;
        preventParams?:
            | boolean
            | {
                  width?: boolean;
                  height?: boolean;
                  format?: boolean;
              };
    }

    type ImageState = {
        ready?: boolean;
        imageUrl?: null;
        metaData?: null;
        elementDimensions?: null;
        rotate?: number;
        mirror?: boolean;
    };
    export default class Image extends React.PureComponent<IImageProps, ImageState> {
        imageRef: any;

        constructor(props: any);

        componentDidMount(): void;

        componentDidUpdate(prevProps: any): void;

        getElementDimensions: () => void;

        init: () => Promise<void>;

        onReady: () => void;

        render(): JSX.Element;
    }
}
declare module 'chayns-components/dist/esm/react-chayns-gallery/component/ImageContainer' {
    import './ImageContainer.scss';

    interface IImageContainerProps extends React.HTMLAttributes<Element> {
        tools?: {
            icon: string;
            onClick?: (...args: any[]) => any;
            onDown?: (...args: any[]) => any;
            onMove?: (...args: any[]) => any;
            onUp?: (...args: any[]) => any;
            className?: string;
        }[];
        className?: string;
        style?: any;
    }

    export default class ImageContainer extends React.PureComponent<IImageContainerProps, {}> {
        render(): JSX.Element;
    }
}
declare module 'chayns-components/dist/esm/react-chayns-gallery/component/Gallery' {
    import './Gallery.scss';

    interface IGalleryProps extends React.HTMLAttributes<Element> {
        images?: any;
        onClick?: (...args: any[]) => any;
        onDelete?: (...args: any[]) => any;
        deleteMode?: boolean;
        height?: number | string;
        width?: number | string;
        className?: string;
        style?: {
            [key: string]: string | number;
        };
        stopPropagation?: boolean;
        dragMode?: boolean;
        onDragEnd?: (...args: any[]) => any;
        preventParams?: boolean;
        smallTiles?: boolean;
    }

    type GalleryState = {
        active?: null;
        images?: any;
        dropzone?: null;
        oldDropzone?: any;
        dropzoneId?: any;
    };
    /**
     * An image gallery that displays up to four images by default. Also supports
     * reordering and deletion of images and blurred image previews for images
     * loaded from `tsimg.cloud`.
     */
    export default class Gallery extends React.Component<IGalleryProps, GalleryState> {
        galleryOffsetX: any;

        galleryOffsetY: any;

        galleryRef: any;

        galleryStartPosition: any;

        image: any;

        index: any;

        lastDropzone: any;

        newPosition: any;

        offsetX: any;

        offsetY: any;

        pageXStart: any;

        pageYStart: any;

        selectedElement: any;

        selectedElementStartPosition: any;

        transitionEnded: boolean;

        static getBigImageUrls(images: any): any;

        constructor(props: any);

        componentDidUpdate(prevProps: any): void;

        onDown: (event: any, index: any, image: any) => void;

        onMove: (event: any) => void;

        onUp: () => void;

        render(): JSX.Element;
    }
}
declare module 'chayns-components/dist/esm/react-chayns-gridcalendar/component/content/Groups' {
    interface IGroupsProps extends React.HTMLAttributes<Element> {
        groups: any[];
        onClick: (...args: any[]) => any;
        focus: number;
    }

    export default class Groups extends React.PureComponent<IGroupsProps, {}> {
        render(): JSX.Element;
    }
}
declare module 'chayns-components/dist/esm/react-chayns-gridcalendar/component/content/Navigator' {
    interface INavigatorProps extends React.HTMLAttributes<Element> {
        text?: string;
        onClick?: {
            left: (...args: any[]) => any;
            right: (...args: any[]) => any;
            day: (...args: any[]) => any;
        };
        hidden?: {
            left?: boolean;
            right?: boolean;
        };
        days?: any[];
    }

    export default class Navigator extends React.PureComponent<INavigatorProps, {}> {
        render(): JSX.Element;
    }
}
declare module 'chayns-components/dist/esm/react-chayns-gridcalendar/component/content/Week' {
    interface IWeekProps extends React.HTMLAttributes<Element> {
        startTime?: {
            [key: string]: any;
        };
        data?: any[];
        onClick?: (...args: any[]) => any;
        focus?: {
            [key: string]: any;
        };
        groupFocus?: number;
        weekWidth?: number;
    }

    export default class Week extends React.Component<IWeekProps, {}> {
        schemeColor: any;

        constructor(props: any);

        renderDays(): any[];

        render(): JSX.Element;
    }
}
declare module 'chayns-components/dist/esm/react-chayns-gridcalendar/component/content/User' {
    interface IUserProps extends React.HTMLAttributes<Element> {
        entries?: any[][];
        groups?: {
            id?: number;
            name?: string;
            color?: string;
        }[];
        onClick?: (...args: any[]) => any;
        focus?: {
            [key: string]: any;
        };
        groupFocus?: number;
        weekWidth?: number;
    }

    export default class User extends React.PureComponent<IUserProps, {}> {
        render(): JSX.Element;
    }
}
declare module 'chayns-components/dist/esm/react-chayns-gridcalendar/component/GridCalendar' {
    interface IProgressCalendarProps extends React.HTMLAttributes<Element> {
        data?: {
            id?: number;
            name?: string;
            entries?: {
                id?: number;
                groupId?: number;
                startTime?: number;
                endTime?: number;
            }[];
        }[];
        columns?: {
            names?: string[];
            highlightedColor?: string;
        }[];
        groups?: {
            id?: number;
            name?: string;
            color?: string;
        }[];
        onNavigateLeft?: (...args: any[]) => any;
        onNavigateRight?: (...args: any[]) => any;
        focus?: {
            [key: string]: any;
        };
        startTime: {
            [key: string]: any;
        };
        endTime: {
            [key: string]: any;
        };
        className?: string;
        style?: {
            [key: string]: string | number;
        };
    }

    type ProgressCalendarState = {
        week?: number;
        focusGroup?: null;
        contentWidth?: any;
        onClick?: any;
    };
    export default class ProgressCalendar extends React.Component<
        IProgressCalendarProps,
        ProgressCalendarState
    > {
        content: any;

        entries: any;

        forceUpdate: any;

        moveSwipeX: any;

        swipeX: any;

        weeks: any;

        static dateInterval(dateStart: any, dateEnd: any): string;

        static getWeek(currentStart: any): any[];

        static sortEntries(entries: any): any;

        static realDay(day: any): number;

        constructor();

        componentDidMount(): void;

        shouldComponentUpdate(nextProps: any): boolean;

        componentDidUpdate(): void;

        handleTouchStart(event: any): void;

        handleTouchMove(event: any): void;

        handleTouchEnd(leftHidden: any, rightHidden: any): void;

        onNavigateLeft(): void;

        onNavigateRight(): void;

        onClick(event: any, entry: any): void;

        getWeeks(startTime: any, endTime: any): any[];

        getNavigatorDays(weekStart: any, weekEnd: any): any[];

        getEntries(dataParameter: any, startTimeParameter: any, endTimeParameter: any): any[];

        groupOnClick(event: any, group: any): void;

        renderUser(): '' | JSX.Element;

        renderEntries(): JSX.Element;

        render(): JSX.Element;
    }
}
declare module 'chayns-components/dist/esm/react-chayns-image_accordion/component/ImageAccordion' {
    interface IImageAccordionProps extends React.HTMLAttributes<Element> {
        prevOpen?: boolean;
        disabled?: boolean;
        open?: boolean;
    }

    /**
     * An accordion that has a big image and appears in a grid. Should be used
     * inside of an `ImageAccordionGroup`.
     */
    export default class ImageAccordion extends React.PureComponent<IImageAccordionProps, {}> {
        render(): JSX.Element;
    }
}
declare module 'chayns-components/dist/esm/react-chayns-tooltip/component/Tooltip' {
    interface ITooltipProps extends React.HTMLAttributes<Element> {
        content:
            | {
                  text: string;
                  headline?: string;
                  imageUrl?: string;
                  buttonText?: string;
                  buttonOnClick?: (...args: any[]) => any;
              }
            | {
                  html: React.ReactNode;
              };
        bindListeners?: boolean;
        position?: number;
        minWidth?: number;
        maxWidth?: number;
        removeIcon?: boolean;
        parent?: any;
        coordinates?: {
            x: number;
            y: number;
        };
        childrenStyle?: {
            [key: string]: string | number;
        };
        childrenClassNames?: string;
        preventTriggerStyle?: boolean;
        hideOnChildrenLeave?: boolean;
        removeParentSpace?: boolean;
        isIOS?: boolean;
    }

    type TooltipState = {
        position?: null;
        x?: number;
        y?: number;
        statePosition?: any;
        stateX?: any;
        stateY?: any;
    };
    /**
     * Wraps a child component and displays a message when the child is hovered or
     * clicked on. Allows to be shown imperatively by calling `.show()` or `.hide()`
     * on its reference.
     */
    export default class Tooltip extends React.Component<ITooltipProps, TooltipState> {
        bubble: any;

        childrenWrapper: boolean;

        tooltipKey: string;

        constructor(props: any);

        componentDidMount(): void;

        componentDidUpdate(prevProps: any): void;

        getContent(): any;

        getPosition(): Promise<void>;

        show(): void;

        hide(): void;

        render(): JSX.Element[];
    }
}
declare module 'chayns-components/dist/esm/react-chayns-image_accordion/component/ImageAccordionHead' {
    interface IImageAccordionHeadProps extends React.HTMLAttributes<Element> {
        item?: any;
        width?: number;
        itemsPerRow?: number;
        wrapperHeight?: string;
    }

    export default class ImageAccordionHead extends React.PureComponent<
        IImageAccordionHeadProps,
        {}
    > {
        render(): JSX.Element;
    }
}
declare module 'chayns-components/dist/esm/react-chayns-image_accordion/component/ImageAccordionGroup' {
    interface IImageAccordionGroupProps extends React.HTMLAttributes<Element> {
        dataGroup?: string;
        className?: string;
        reference?: (...args: any[]) => any;
        onHeadOpen?: (...args: any[]) => any;
    }

    type ImageAccordionGroupState = {
        width?: number;
        currentState?: any;
        prevOpen?: any;
    };
    /**
     * Groups several `ImageAccordion` components together, so only one of them can
     * be open at a time.
     */
    export default class ImageAccordionGroup extends React.Component<
        IImageAccordionGroupProps,
        ImageAccordionGroupState
    > {
        accordion: any;

        index: any;

        myRef: any;

        width: number;

        constructor(props: any);

        componentDidMount(): void;

        getPx: (style: any) => number;

        handleAccordionClick: (key: any, sameRow: any, props: any, event: any) => boolean;

        accordionCloseListener(): void;

        accordionOpenListener(key: any, sameRow: any, onOpen: any): void;

        render(): JSX.Element;
    }
}
declare module 'chayns-components/dist/esm/react-chayns-list/component/AbstractList' {
    type AbstractListProps = {
        className?: string;
    };
    const AbstractList: React.SFC<AbstractListProps>;
    export default AbstractList;
}
declare module 'chayns-components/dist/esm/react-chayns-list/component/ExpandableList/ExpandableContext' {
    const _default_1: React.Context<{
        onOpen: () => void;
        onClose: () => void;
        onToggle: () => void;
    }>;
    export default _default_1;
}
declare module 'chayns-components/dist/esm/react-chayns-list/component/ExpandableList/ExpandableList' {
    interface IExpandableListProps extends React.HTMLAttributes<Element> {
        className?: string;
    }

    type ExpandableListState = {
        open?: undefined[];
    };
    export default class ExpandableList extends React.Component<
        IExpandableListProps,
        ExpandableListState
    > {
        providerState: any;

        constructor(props: any);

        onOpen(id: any): void;

        onClose(): void;

        onToggle(id: any): void;

        changeOpen(id: any): void;

        render(): JSX.Element;
    }
}
/*declare module 'chayns-components/dist/esm/react-chayns-list/component/List' {
    type ListProps = {
        className?: string;
        notExpandable?: boolean;
    };
    const List: React.SFC<ListProps>;
    export default List;
}*/
declare module 'chayns-components/dist/esm/react-chayns-list/component/ExpandableList/connectExpandableContext' {
    export default function connectExpandableContext(
        WrappedComponent: any
    ): ({ ...props }: { [x: string]: any }) => JSX.Element;
}
declare module 'chayns-components/dist/esm/react-chayns-list/component/ExpandableList/AbstractExpandableListItem' {
    const _default_2: ({ ...props }: { [x: string]: any }) => JSX.Element;
    export default _default_2;
}
declare module 'chayns-components/dist/esm/react-chayns-list/component/ListItem/ListItemHeader' {
    type ListItemHeaderProps = {
        title: React.ReactNode | React.ReactNode[];
        subtitle?: React.ReactNode | React.ReactNode[];
        image?: string;
        images?: string[];
        icon?: string | any;
        className?: string;
        left?: React.ReactNode | React.ReactNode[];
        right?: React.ReactNode | React.ReactNode[];
        circle?: boolean;
        hoverItem?: React.ReactNode;
        onLongPress?: (...args: any[]) => any;
        onMouseDown?: (...args: any[]) => any;
        onMouseMove?: (...args: any[]) => any;
        onMouseUp?: (...args: any[]) => any;
        onTouchStart?: (...args: any[]) => any;
        onTouchMove?: (...args: any[]) => any;
        onTouchEnd?: (...args: any[]) => any;
        onTouchCancel?: (...args: any[]) => any;
        longPressTimeout?: number;
        notExpandable?: boolean;
        noContentClass?: boolean;
        onOpen?: (...args: any[]) => any;
        headerProps?: any;
        defaultOpen?: boolean;
        imageBorderColor?: string;
    };
    const ListItemHeader: React.SFC<ListItemHeaderProps>;
    export default ListItemHeader;
}
declare module 'chayns-components/dist/esm/react-chayns-list/component/ListItem/ExpandableListHeader' {
    type ExpandableListHeaderProps = {
        title: React.ReactNode | React.ReactNode[];
        subtitle?: React.ReactNode | React.ReactNode[];
        image?: string;
        icon?: string | any;
        onClick?: (...args: any[]) => any;
        hideIndicator?: boolean;
        right?: React.ReactNode | React.ReactNode[];
        style?: any;
        headerProps?: any;
    };
    const ExpandableListHeader: React.SFC<ExpandableListHeaderProps>;
    export default ExpandableListHeader;
}
declare module 'chayns-components/dist/esm/react-chayns-list/component/ListItem/ExpandableListItem' {
    type ExpandableListItemProps = {
        noContentClass?: boolean;
        className?: string;
        open?: boolean;
        style?: any;
        onOpen?: (...args: any[]) => any;
        onClose?: (...args: any[]) => any;
        onClick?: (...args: any[]) => any;
        defaultOpen?: boolean;
    };
    const ExpandableListItem: React.SFC<ExpandableListItemProps>;
    export default ExpandableListItem;
}
declare module 'chayns-components/dist/esm/react-chayns-list/component/ListItem/ListItem' {
    type ListItemProps = {
        title: React.ReactNode | React.ReactNode[];
        subtitle?: React.ReactNode | React.ReactNode[];
        image?: string;
        images?: string[];
        icon?: string | any;
        className?: string;
        onClick?: (...args: any[]) => any;
        right?: React.ReactNode | React.ReactNode[];
        style?: {
            [key: string]: string | number;
        };
        headerProps?: any;
        circle?: boolean;
        hoverItem?: React.ReactNode;
        onLongPress?: (...args: any[]) => any;
        onMouseDown?: (...args: any[]) => any;
        onMouseMove?: (...args: any[]) => any;
        onMouseUp?: (...args: any[]) => any;
        onTouchStart?: (...args: any[]) => any;
        onTouchMove?: (...args: any[]) => any;
        onTouchEnd?: (...args: any[]) => any;
        onTouchCancel?: (...args: any[]) => any;
        longPressTimeout?: number;
        noContentClass?: boolean;
        onOpen?: (...args: any[]) => any;
        imageBorderColor?: string;
        left?: React.ReactNode | React.ReactNode[];
    };
    const ListItem: React.SFC<ListItemProps>;
    export default ListItem;
}
/*declare module 'chayns-components/dist/esm/react-chayns-list/component/ListItem' {
    type ListItemProps = {
        hideIndicator?: boolean;
        title?: string
    };
    const ListItem: React.SFC<ListItemProps>;
    export default ListItem;
}*/
declare module 'chayns-components/dist/esm/react-chayns-radiobutton/component/RadioButton' {
    interface IRadioButtonProps extends React.HTMLAttributes<Element> {
        id?: string;
        name?: string;
        checked?: boolean;
        onChange?: (...args: any[]) => any;
        disabled?: boolean;
        value?: string | number | boolean;
        className?: string;
        stopPropagation?: boolean;
        style?: {
            [key: string]: string | number;
        };
        props?: any;
    }

    /**
     * A radio button that allows to select one of multiple options.
     */
    export default class RadioButton extends React.Component<IRadioButtonProps, {}> {
        id: any;

        constructor();

        /**
         * Handles check event and passes the checked state to the handler.
         * @param event
         */
        handleChange: (event: any) => void;

        /**
         * Renders a radio button.
         * @returns {XML}
         */
        render(): JSX.Element;
    }
}
declare module 'chayns-components/dist/esm/react-chayns-modeswitch/component/ModeSwitch' {
    interface IModeSwitchProps extends React.HTMLAttributes<Element> {
        modes?: {
            id?: number;
            name?: string;
            uacIds?: number[];
        }[];
        save?: boolean;
        onChange?: (...args: any[]) => any;
        defaultMode?: number;
        show?: boolean;
        parent?: any;
    }

    type ModeSwitchState = {
        modes?: undefined[];
        activeModeId?: null;
        open?: boolean;
    };
    export default class ModeSwitch extends React.Component<IModeSwitchProps, ModeSwitchState> {
        pageYOffset: any;

        static getCurrentMode(): any;

        static addChangeListener(callback: any): void;

        static removeChangeListener(callback: any): void;

        constructor(props: any);

        componentDidUpdate(prevProps: any): void;

        onChange(id: any): void;

        setMode(id: any): void;

        setModes(modes: any): any;

        init(): Promise<void>;

        switchMode(id: any): void;

        isUserInGroup(uacIds: any): boolean;

        toggleModeSwitch(): void;

        showModeSwitch(): any;

        render(): JSX.Element;
    }
}
declare module 'chayns-components/dist/esm/react-chayns-modeswitch/component/Mode' {
    interface IModeProps extends React.HTMLAttributes<Element> {
        modes: number[];
        className?: string;
        style?: any;
    }

    type ModeState = {
        modeId?: null;
    };
    export default class Mode extends React.Component<IModeProps, ModeState> {
        constructor();

        componentWillUnmount(): void;

        updatedMode: (mode: any) => void;

        render(): JSX.Element;
    }
}
declare module 'chayns-components/dist/esm/utils/dateTimeHelper' {
    export const getTimeStringMinutes: (timeStr: any) => number;
    export const getTimeStringFromMinutes: (total: any) => string;
}
declare module 'chayns-components/dist/esm/utils/debounce' {
    /**
     * Returns a wrapper function that executes `func` after it was not called for the last `delay` milliseconds
     * @param {(...args: any[]) => void} func
     * @param {number} delay
     */
    const debounce: (func: any, delay: any) => (...args: any[]) => void;
    export default debounce;
}
declare module 'chayns-components/dist/esm/react-chayns-openingtimes/utils/parseTimeString' {
    export default function parseTimeString(str: any): {
        hours: any;
        minutes: any;
    };
}
declare module 'chayns-components/dist/esm/react-chayns-openingtimes/utils/checkDay' {
    export default function checkDay(times: any): boolean;
}
declare module 'chayns-components/dist/esm/react-chayns-openingtimes/utils/checkTimeSpan' {
    export function checkTimeSpan(startTime: any, endTime: any): boolean;
}
declare module 'chayns-components/dist/esm/react-chayns-openingtimes/utils/validateTime' {
    export default function validateTime(time: any): boolean;
}
declare module 'chayns-components/dist/esm/react-chayns-openingtimes/utils/validateTimeSpan' {
    export function validateTimeSpan(startTime: any, endTime: any): boolean;
}
declare module 'chayns-components/dist/esm/react-chayns-openingtimes/utils/validateDay' {
    export function validateDay(times: any): boolean;
}
declare module 'chayns-components/dist/esm/react-chayns-openingtimes/utils/validateOpeningTimes' {
    export default function validateOpeningTimes(openingTimes: any): boolean;
}
declare module 'chayns-components/dist/esm/react-chayns-openingtimes/component/TimeSpan' {
    type TimeSpanProps = {
        startTime: string;
        endTime: string;
        disabled?: boolean;
        onChange: (...args: any[]) => any;
        isInvalid?: boolean;
        childrenRef?: (...args: any[]) => any;
    };
    const TimeSpan: React.SFC<TimeSpanProps>;
    export default TimeSpan;
}
declare module 'chayns-components/dist/esm/react-chayns-openingtimes/component/Day' {
    interface IDayProps extends React.HTMLAttributes<Element> {
        weekday: {
            name: string;
            number: number;
        };
        times: {
            start: string;
            end: string;
        }[];
        onDayActivation: (...args: any[]) => any;
        onAdd: (...args: any[]) => any;
        onRemove: (...args: any[]) => any;
        onChange: (...args: any[]) => any;
    }

    type DayState = {
        isRemoving?: boolean;
        animations?: boolean;
    };

    class Day extends React.Component<IDayProps, DayState> {
        timeSpanKey1: any;

        timeSpanKey2: string;

        timeSpanRef: any;

        constructor(props: any);

        onDayActivation(status: any): void;

        animationendFunction: () => void;

        onChange: (weekDayNumber: any, index: any, start: any, end: any) => void;

        render(): JSX.Element;
    }

    export default Day;
}
declare module 'chayns-components/dist/esm/react-chayns-openingtimes/component/OpeningTimesHint' {
    export const HINT_POSITIONS: {
        NONE: number;
        TOP: number;
        BOTTOM: number;
    };
    type OpeningTimesHintProps = {
        content?: string;
        position: any;
    };
    const _default_3: React.NamedExoticComponent<OpeningTimesHintProps>;
    export default _default_3;
}
declare module 'chayns-components/dist/esm/react-chayns-openingtimes/component/OpeningTimes' {
    import './OpeningTimes.scss';

    interface IOpeningTimesProps extends React.HTMLAttributes<Element> {
        times: {
            weekDay: number;
            start: string;
            end: string;
            disabled?: boolean;
        }[];
        onChange?: (...args: any[]) => any;
        className?: string;
        style?: {
            [key: string]: string | number;
        };
        forceMobile?: boolean;
        hintPosition?: any;
        hintText?: string;
    }

    type OpeningTimesState = {
        times?: any;
        timesValid?: boolean;
    };

    /**
     * An input for opening times.
     */
    class OpeningTimes extends React.Component<IOpeningTimesProps, OpeningTimesState> {
        onValidateStateDebounce: any;

        constructor(props: any);

        onAdd(weekDay: any): void;

        onRemove(day: any, span: any): void;

        onChange(day: any, index: any, start: any, end: any): void;

        onDayActivation(day: any, status: any): void;

        onValidateState(): void;

        validateState(valid?: boolean): void;

        render(): JSX.Element;
    }

    export default OpeningTimes;
}
declare module 'chayns-components/dist/esm/react-chayns-personfinder/component/data/simpleWrapper/SimpleWrapperContext' {
    type SimpleWrapperStateProviderProps = {
        data?: any[];
        hasMore?: boolean;
        onLoadMore?: (...args: any[]) => any;
        onInput?: (...args: any[]) => any;
    };
    const _default_4: (objectMapping: any) => {
        Consumer: React.Consumer<{
            value: any;
        }>;
        Provider: React.SFC<SimpleWrapperStateProviderProps>;
        ObjectMapping: any;
    };
    export default _default_4;
}
declare module 'chayns-components/dist/esm/react-chayns-personfinder/component/data/persons/PersonsReducer' {
    export const initialState: {
        data: {
            personsUnrelated: any[];
            personsRelated: any[];
            sites: any[];
            friends: any[];
            groups: any[];
            knownPersons: any[];
        };
        showWaitCursor: {
            personsRelated: boolean;
            sites: boolean;
            personsUnrelated: boolean;
            groups: boolean;
            knownPersons: boolean;
        };
        isLoading: {
            personsRelated: boolean;
            sites: boolean;
            personsUnrelated: boolean;
            groups: boolean;
            knownPersons: boolean;
        };
        hasMore: {
            personsRelated: boolean;
            sites: boolean;
            personsUnrelated: boolean;
            groups: boolean;
            knownPersons: boolean;
        };
    };
    export const reducer: (
        state: {
            data: {
                personsUnrelated: any[];
                personsRelated: any[];
                sites: any[];
                friends: any[];
                groups: any[];
                knownPersons: any[];
            };
            showWaitCursor: {
                personsRelated: boolean;
                sites: boolean;
                personsUnrelated: boolean;
                groups: boolean;
                knownPersons: boolean;
            };
            isLoading: {
                personsRelated: boolean;
                sites: boolean;
                personsUnrelated: boolean;
                groups: boolean;
                knownPersons: boolean;
            };
            hasMore: {
                personsRelated: boolean;
                sites: boolean;
                personsUnrelated: boolean;
                groups: boolean;
                knownPersons: boolean;
            };
        },
        action: any
    ) =>
        | {
              data: {
                  personsUnrelated: any[];
                  personsRelated: any[];
                  sites: any[];
                  friends: any[];
                  groups: any[];
                  knownPersons: any[];
              };
              showWaitCursor: any;
              isLoading: any;
              hasMore: {
                  personsRelated: boolean;
                  sites: boolean;
                  personsUnrelated: boolean;
                  groups: boolean;
                  knownPersons: boolean;
              };
          }
        | {
              data: {
                  personsRelated: any[];
                  personsUnrelated: any[];
                  sites: any[];
                  friends: any[];
                  groups: any[];
                  knownPersons: any[];
              };
              showWaitCursor: {
                  personsRelated: boolean;
                  personsUnrelated: boolean;
                  sites: boolean;
                  groups: boolean;
                  knownPersons: boolean;
              };
              isLoading: any;
              hasMore: any;
          }
        | {
              data: {
                  friends: any[];
                  personsUnrelated: any[];
                  personsRelated: any[];
                  sites: any[];
                  groups: any[];
                  knownPersons: any[];
              };
              showWaitCursor: {
                  friends: boolean;
                  personsRelated: boolean;
                  sites: boolean;
                  personsUnrelated: boolean;
                  groups: boolean;
                  knownPersons: boolean;
              };
              isLoading: {
                  friends: boolean;
                  personsRelated: boolean;
                  sites: boolean;
                  personsUnrelated: boolean;
                  groups: boolean;
                  knownPersons: boolean;
              };
              hasMore: {
                  friends: boolean;
                  personsRelated: boolean;
                  sites: boolean;
                  personsUnrelated: boolean;
                  groups: boolean;
                  knownPersons: boolean;
              };
          }
        | {
              data: {
                  groups: any;
                  personsUnrelated: any[];
                  personsRelated: any[];
                  sites: any[];
                  friends: any[];
                  knownPersons: any[];
              };
              showWaitCursor: {
                  groups: boolean;
                  personsRelated: boolean;
                  sites: boolean;
                  personsUnrelated: boolean;
                  knownPersons: boolean;
              };
              isLoading: {
                  groups: boolean;
                  personsRelated: boolean;
                  sites: boolean;
                  personsUnrelated: boolean;
                  knownPersons: boolean;
              };
              hasMore: {
                  groups: boolean;
                  personsRelated: boolean;
                  sites: boolean;
                  personsUnrelated: boolean;
                  knownPersons: boolean;
              };
          };
}
declare module 'chayns-components/dist/esm/react-chayns-personfinder/component/data/persons/PersonsApi' {
    import 'abortcontroller-polyfill/dist/polyfill-patch-fetch';

    export const fetchFriends: () => Promise<any[]>;
    export const setFriend: (personId: any, friendship?: boolean) => Promise<boolean>;
    export const fetchPersons: (value: any, skip: any, take: any) => Promise<any[]>;
    export const fetchUacPersons: (uacId: any, locationId: any) => (value: any) => Promise<any[]>;
    export const fetchSites: (value: any, skip: any, take: any) => Promise<any[]>;
    export const fetchKnownPersons: (value: any, skip: any, take: any) => Promise<any[]>;
}
declare module 'chayns-components/dist/esm/react-chayns-personfinder/component/data/uacGroups/UacGroupApi' {
    export const fetchGroups: () => Promise<any[]>;
}
declare module 'chayns-components/dist/esm/utils/events/EventEmitter' {
    export default class EventEmitter {
        #private;

        events: any[];

        constructor();

        on(event: any, listener: any): this;

        off(event: any, listener: any): this;

        removeListener(event: any, listener: any): void;

        emit(event: any, ...args: any[]): void;

        once(event: any, listener: any): void;
    }
}
declare module 'chayns-components/dist/esm/react-chayns-personfinder/component/data/persons/FriendsHelper' {
    class FriendsHelper {
        #private;

        static init: () => Promise<void>;

        static isFriend: (personId: any) => boolean;

        static getFriendsList: () => any[];

        static setFriend: (personId: any, fullName: any, friendship?: boolean) => Promise<void>;

        static addUpdateListener: (listener: any) => void;

        static removeUpdateListener: (listener: any) => void;

        static convertFriend: (friend: any) => {
            type: string;
            id: any;
            name: any;
            userId: any;
            fullName: any;
            firstName: any;
            lastName: any;
            personId: any;
            imageUrl: string;
            isFriend: boolean;
            verificationState: boolean;
        };
    }

    export default FriendsHelper;
}
declare module 'chayns-components/dist/esm/react-chayns-personfinder/component/data/persons/PersonsConverter' {
    export const convertPerson: (relation: any) => any;
    export const convertPersonForReturn: (person: any) => any;
    export const convertPersons: (persons: any) => {
        personsUnrelated: any[];
        personsRelated: any[];
    };
    export const convertSites: (sites: any) => any;
    export const convertKnownPerson: (knownPersons: any) => any;
}
declare module 'chayns-components/dist/esm/react-chayns-personfinder/component/data/persons/PersonsContext' {
    type PersonFinderStateProviderProps = {
        take?: number;
        enablePersons?: boolean;
        enableSites?: boolean;
        enableFriends?: boolean;
        enableUacGroups?: boolean;
        enableKnownPersons?: boolean;
        includeOwn?: boolean;
        locationId?: number;
        uacId?: number;
        reducerFunction?: (...args: any[]) => any;
    };
    const _default_5: {
        Consumer: React.Consumer<{
            dispatch: () => void;
            onChange: () => void;
            onLoadMore: () => void;
            setFriend: () => void;
            isFriend: () => void;
            data: {
                personsUnrelated: any[];
                personsRelated: any[];
                sites: any[];
                friends: any[];
                groups: any[];
                knownPersons: any[];
            };
            showWaitCursor: {
                personsRelated: boolean;
                sites: boolean;
                personsUnrelated: boolean;
                groups: boolean;
                knownPersons: boolean;
            };
            isLoading: {
                personsRelated: boolean;
                sites: boolean;
                personsUnrelated: boolean;
                groups: boolean;
                knownPersons: boolean;
            };
            hasMore: {
                personsRelated: boolean;
                sites: boolean;
                personsUnrelated: boolean;
                groups: boolean;
                knownPersons: boolean;
            };
        }>;
        Provider: React.SFC<PersonFinderStateProviderProps>;
        ObjectMapping: {
            groups: (
                | {
                      key: string;
                      lang: {
                          de: string;
                          en: string;
                      };
                      roundIcons: boolean;
                      filter: (inputValue: any) => (e: any) => any;
                      show?: undefined;
                  }
                | {
                      key: string;
                      lang: {
                          de: string;
                          en: string;
                      };
                      roundIcons: boolean;
                      show: (value: any) => boolean;
                      filter?: undefined;
                  }
                | {
                      key: string;
                      lang: {
                          de: string;
                          en: string;
                      };
                      filter: (inputValue: any) => (e: any) => any;
                      roundIcons?: undefined;
                      show?: undefined;
                  }
                | {
                      key: string;
                      lang: {
                          de: string;
                          en: string;
                      };
                      roundIcons: boolean;
                      filter?: undefined;
                      show?: undefined;
                  }
            )[];
            showName: string;
            identifier: string;
            search: string[];
            relations: string;
            imageUrl: string;
            verified: string;
        };
        ValueConverter: (relation: any) => any;
    };
    export default _default_5;
    export const useStateValue: () => {
        dispatch: () => void;
        onChange: () => void;
        onLoadMore: () => void;
        setFriend: () => void;
        isFriend: () => void;
        data: {
            personsUnrelated: any[];
            personsRelated: any[];
            sites: any[];
            friends: any[];
            groups: any[];
            knownPersons: any[];
        };
        showWaitCursor: {
            personsRelated: boolean;
            sites: boolean;
            personsUnrelated: boolean;
            groups: boolean;
            knownPersons: boolean;
        };
        isLoading: {
            personsRelated: boolean;
            sites: boolean;
            personsUnrelated: boolean;
            groups: boolean;
            knownPersons: boolean;
        };
        hasMore: {
            personsRelated: boolean;
            sites: boolean;
            personsUnrelated: boolean;
            groups: boolean;
            knownPersons: boolean;
        };
    };
}
declare module 'chayns-components/dist/esm/react-chayns-tag_input/utils/getInputSize' {
    export default function getInputSize(value: any): any;
}
declare module 'chayns-components/dist/esm/react-chayns-tag_input/component/Tag' {
    interface ITagProps extends React.HTMLAttributes<Element> {
        value: any;
        onDelete?: (...args: any[]) => any;
        selected?: boolean;
        disableRemove?: boolean;
    }

    export default class Tag extends React.PureComponent<ITagProps, {}> {
        handleDelete: () => void;

        render(): JSX.Element;
    }
}
declare module 'chayns-components/dist/esm/react-chayns-tag_input/component/TagInput' {
    interface ITagInputProps extends React.HTMLAttributes<Element> {
        tags?: {
            text?: string;
        }[];
        value?: string;
        onAddTag?: (...args: any[]) => any;
        onRemoveTag?: (...args: any[]) => any;
        onChange?: (...args: any[]) => any;
        placeholder?: string;
        className?: string;
        style?: {
            [key: string]: string | number;
        };
        triggerEventOnValueChange?: boolean;
        disableRemove?: boolean;
        design?: number;
        props?: any;
    }

    type TagInputState = {
        selectedIndex?: null;
    };
    /**
     * A text input that allows values to be grouped as tags.
     */
    export default class TagInput extends React.Component<ITagInputProps, TagInputState> {
        input: any;

        constructor(props: any);

        componentDidUpdate(prevProps: any): void;

        handleChange(...value: any[]): void;

        handleKeyUp(event: any): void;

        handleTagAdd(tag: any): void;

        handleTagRemove(tag: any): void;

        handleRemoveLast(): void;

        handleClick(): void;

        setInputRef(ref: any): void;

        focus(): boolean;

        render(): JSX.Element;
    }
}
declare module 'chayns-components/dist/esm/components/overlay/Overlay' {
    import './overlay.scss';

    type OverlayProps = {
        parent?: any;
    };
    const Overlay: React.SFC<OverlayProps>;
    export default Overlay;
}
declare module 'chayns-components/dist/esm/react-chayns-input_box/component/InputBox' {
    type InputBoxProps = {
        onBlur?: (...args: any[]) => any;
        inputComponent?: ((...args: any[]) => any) | React.ReactNode;
        parent?: any;
        onFocus?: (...args: any[]) => any;
        className?: string;
        boxClassName?: string;
        inputRef?: (...args: any[]) => any;
        overlayProps?: any;
        style?: {
            [key: string]: string | number;
        };
        hasOpenCloseIcon?: boolean;
        renderInline?: boolean;
        hideInput?: boolean;
    };
    const InputBox: React.SFC<InputBoxProps>;
    export default InputBox;
}
declare module 'chayns-components/dist/esm/react-chayns-personfinder/utils/getList' {
    export default function getList(data: any, orm: any, inputValue: any): any[];
}
declare module 'chayns-components/dist/esm/react-chayns-personfinder/utils/getListLength' {
    export default function getListLength(data: any, orm: any, inputValue: any): number;
}
declare module 'chayns-components/dist/esm/react-chayns-personfinder/utils/getSelectedListItem' {
    export default function getSelectedListItem(
        data: any,
        index: any,
        orm: any,
        inputValue: any
    ): any;
}
declare module 'chayns-components/dist/esm/react-chayns-personfinder/component/Divider' {
    type DividerProps = {
        name: string;
    };
    const Divider: React.SFC<DividerProps>;
    export default Divider;
}
declare module 'chayns-components/dist/esm/react-chayns-personfinder/utils/getText' {
    export default function getText(key: any, addText?: boolean, lang?: any): string;
}
declare module 'chayns-components/dist/esm/react-chayns-personfinder/component/LoadMore' {
    type LoadMoreProps = {
        onClick: (...args: any[]) => any;
        group: string;
        hide?: boolean;
    };
    const LoadMore: React.SFC<LoadMoreProps>;
    export default LoadMore;
}
declare module 'chayns-components/dist/esm/react-chayns-personfinder/component/result-item/FriendsIndicator' {
    type FriendsIndicatorProps = {
        personId: string;
        name: string;
    };
    const FriendsIndicator: React.SFC<FriendsIndicatorProps>;
    export default FriendsIndicator;
}
declare module 'chayns-components/dist/esm/react-chayns-personfinder/component/result-item/Relation' {
    type RelationProps = {
        relation: any;
    };
    const Relation: React.SFC<RelationProps>;
    export default Relation;
}
declare module 'chayns-components/dist/esm/react-chayns-verification_icon/component/VerificationIcon' {
    /**
     * @component
     */
    import React from 'react';

    type VerificationIconProps = {
        name: string;
        design?: number;
        verified?: boolean;
    };
    const VerificationIcon: React.SFC<VerificationIconProps>;
    export default VerificationIcon;
}
declare module 'chayns-components/dist/esm/react-chayns-personfinder/component/PersonFinderResultItem' {
    type PersonFinderResultItemProps = {
        orm: {
            identifier?: string;
            showName?: string;
            imageUrl?: string;
            relations?: string;
            subtitle?: string;
            verified?: string;
        };
        onClick: (...args: any[]) => any;
        data: any;
        isFocused: boolean;
        roundIcons?: boolean;
        hideFriendsIcon?: boolean;
        tags?: {
            value?: {};
        }[];
        showCheckbox?: boolean;
        onRemoveTag: (...args: any[]) => any;
    };
    const PersonFinderResultItem: React.SFC<PersonFinderResultItemProps>;
    export default PersonFinderResultItem;
}
declare module 'chayns-components/dist/esm/react-chayns-personfinder/component/WaitCursor' {
    type WaitCursorProps = {
        style?: any;
    };
    const WaitCursor: React.SFC<WaitCursorProps>;
    export default WaitCursor;
}
declare module 'chayns-components/dist/esm/react-chayns-personfinder/component/ResultItemList' {
    type ResultItemListProps = {
        data?: any[];
        orm: {
            identifier?: string;
            showName?: string;
            imageUrl?: string;
        };
        group?: string;
        onLoadMore?: (...args: any[]) => any;
        showWaitCursor?: boolean;
        separator?: string;
        hasMore?: boolean;
        onClick?: (...args: any[]) => any;
        className?: string;
        focusIndex?: number;
        roundIcons?: boolean;
        hideFriendsIcon?: boolean;
        onRemoveTag: (...args: any[]) => any;
        tags?: {
            value?: {};
        }[];
        showCheckbox?: boolean;
    };
    const ResultItemList: React.SFC<ResultItemListProps>;
    export default ResultItemList;
}
declare module 'chayns-components/dist/esm/react-chayns-personfinder/component/PersonFinderResults' {
    type PersonFinderResultsProps = {
        orm: {
            identifier?: string;
            showName?: string;
            imageUrl?: string;
            groups?: any[];
            filter?: (...args: any[]) => any;
            roundIcons?: boolean;
        };
        data?:
            | any[]
            | {
                  [key: string]: any[];
              };
        tags?: {
            value?: {};
        }[];
        value?: string;
        onSelect?: (...args: any[]) => any;
        onLoadMore: (...args: any[]) => any;
        hasMore?:
            | {
                  [key: string]: boolean;
              }
            | boolean;
        showWaitCursor?:
            | {
                  [key: string]: boolean;
              }
            | boolean;
        focusIndex?: number;
        noBackground?: boolean;
        filterSelected?: boolean;
        hideFriendsIcon?: boolean;
        showCheckbox?: boolean;
        onRemoveTag: (...args: any[]) => any;
    };
    const PersonFinderResults: React.SFC<PersonFinderResultsProps>;
    export default PersonFinderResults;
}
declare module 'chayns-components/dist/esm/react-chayns-personfinder/component/PersonFinderView' {
    interface IPersonFinderViewProps extends React.HTMLAttributes<Element> {
        orm: {
            identifier?: string;
            showName?: string;
            search?: string[];
            imageUrl?: string;
            groups?: {
                key: string;
                show?: (...args: any[]) => any;
            }[];
        };
        data?:
            | any[]
            | {
                  [key: string]: any[];
              };
        tags?: {
            value?: {};
        }[];
        autoLoading?: boolean;
        hasMore?:
            | {
                  [key: string]: boolean;
              }
            | boolean;
        onSelect: (...args: any[]) => any;
        onLoadMore?: (...args: any[]) => any;
        value?: ((...args: any[]) => any) | string;
        selectedValue?: boolean;
        inputComponent: ((...args: any[]) => any) | React.ReactNode;
        boxClassName?: string;
        parent?: any;
        boxRef?: (...args: any[]) => any;
        showWaitCursor?:
            | {
                  [key: string]: boolean;
              }
            | boolean;
        onChange?: (...args: any[]) => any;
        autoSelectFirst?: boolean;
        onKeyDown?: (...args: any[]) => any;
        noBackground?: boolean;
        filterSelected?: boolean;
        hideFriendsIcon?: boolean;
        inputValue?: string;
        renderInline?: boolean;
        showCheckbox?: boolean;
        onRemoveTag: (...args: any[]) => any;
        props?: any;
    }

    type PersonFinderViewState = {
        lazyLoading?: boolean;
        focusIndex?: number;
    };

    class PersonFinderView extends React.Component<IPersonFinderViewProps, PersonFinderViewState> {
        animationFrameId: number;

        boxRef: any;

        resultList: any;

        constructor(props: any);

        updateIndex: (index: any) => void;

        handleOnBlur: () => void;

        handleKeyDown: (ev: any) => void;

        handleLazyLoad: () => Promise<void>;

        hasEntries: () => boolean;

        renderChildren(): JSX.Element;

        render(): JSX.Element;
    }

    export default PersonFinderView;
}
declare module 'chayns-components/dist/esm/react-chayns-personfinder/component/MultiplePersonFinder' {
    interface IMultiplePersonFinderProps extends React.HTMLAttributes<Element> {
        onChange?: (...args: any[]) => any;
        showPersons?: boolean;
        showSites?: boolean;
        showUacGroups?: boolean;
        showKnownPersons?: boolean;
        disableFriends?: boolean;
        className?: string;
        defaultValue?:
            | {
                  name?: string;
                  firstName?: string;
                  lastName?: string;
                  siteId?: string;
                  personId?: string;
              }
            | string;
        defaultValues?: {
            name?: string;
            firstName?: string;
            lastName?: string;
            siteId?: string;
            personId?: string;
        }[];
        onAdd?: (...args: any[]) => any;
        onRemove?: (...args: any[]) => any;
        showId?: boolean;
        onInput?: (...args: any[]) => any;
        context: {
            Provider?: (...args: any[]) => any;
            Consumer?: any;
            ObjectMapping?: {
                showName?: string;
                identifier?: string;
                verified?: string;
            };
            ValueConverter?: (...args: any[]) => any;
        };
        contextProps?: any;
        max?: number;
        values?: any[];
        value?: string;
        props?: any;
    }

    type MultiplePersonFinderState = {
        inputValue?: any;
        selectedValue?: boolean;
        values?: any;
        valuesState?: any;
    };

    class MultiplePersonFinder extends React.Component<
        IMultiplePersonFinderProps,
        MultiplePersonFinderState
    > {
        boxRef: any;

        input: any;

        constructor(props: any);

        componentDidUpdate(prevProps: any, prevState: any): void;

        handleOnChange(inputValue: any, ...other: any[]): void;

        handleTagRemove(tag: any): void;

        handleSelect(type: any, value: any): void;

        onChange(values: any): void;

        getValues(): any;

        clear(): void;

        render(): JSX.Element;
    }

    export default MultiplePersonFinder;
}
declare module 'chayns-components/dist/esm/react-chayns-personfinder/component/SimplePersonFinder' {
    interface ISimplePersonFinderProps extends React.HTMLAttributes<Element> {
        onChange?: (...args: any[]) => any;
        showPersons?: boolean;
        showSites?: boolean;
        disableFriends?: boolean;
        showId?: boolean;
        className?: string;
        defaultValue?:
            | {
                  name?: string;
                  firstName?: string;
                  lastName?: string;
                  siteId?: string;
                  personId?: string;
              }
            | string;
        customData?: boolean;
        onInput?: (...args: any[]) => any;
        context: {
            Provider?: (...args: any[]) => any;
            Consumer?: any;
            ObjectMapping?: {
                identifier?: string;
                showName?: string;
            };
        };
        contextProps?: any;
        removeIcon?: boolean;
        value?: string | any;
        props?: any;
    }

    class SimplePersonFinder extends React.Component<ISimplePersonFinderProps, {}> {
        multipleFinder: any;

        constructor(props: any);

        clear(): void;

        render(): JSX.Element;
    }

    export default SimplePersonFinder;
}
declare module 'chayns-components/dist/esm/react-chayns-personfinder/component/PersonFinder' {
    interface IPersonFinderProps extends React.HTMLAttributes<Element> {
        placeholder?: string;
        multiple?: boolean;
        showPersons?: boolean;
        showSites?: boolean;
        showUacGroups?: boolean;
        showKnownPersons?: boolean;
        uacId?: number;
        locationId?: number;
        reducerFunction?: (...args: any[]) => any;
        context?: {
            Provider?: (...args: any[]) => any;
            Consumer?: any;
        };
        onChange?: (...args: any[]) => any;
        disableFriends?: boolean;
        className?: string;
        defaultValue?:
            | {
                  name?: string;
                  firstName?: string;
                  lastName?: string;
                  siteId?: string;
                  personId?: string;
              }
            | string;
        defaultValues?: {
            name?: string;
            firstName?: string;
            lastName?: string;
            siteId?: string;
            personId?: string;
        }[];
        onAdd?: (...args: any[]) => any;
        onRemove?: (...args: any[]) => any;
        onInput?: (...args: any[]) => any;
        contextProps?: any;
        max?: number;
        values?: any[];
        value?: string;
        hasOpenCloseIcon?: boolean;
    }

    /**
     * An autocomplete search for persons that can be customized to work with
     * arbitrary data.
     */
    class PersonFinder extends React.Component<IPersonFinderProps, {}> {
        personFinder: React.RefObject<unknown>;

        clear: () => void;

        render(): JSX.Element;
    }

    export default PersonFinder;
}
declare module 'chayns-components/dist/esm/react-chayns-position_input/component/AutocompleteItem' {
    type AutocompleteItemProps = {
        index: number;
        address: string;
        onClick: (...args: any[]) => any;
    };
    const AutocompleteItem: React.SFC<AutocompleteItemProps>;
    export default AutocompleteItem;
}
declare module 'chayns-components/dist/esm/react-chayns-position_input/component/PositionInput' {
    import './styles.scss';

    interface IPositionInputProps extends React.HTMLAttributes<Element> {
        defaultPosition: {
            lat: number;
            lng: number;
        };
        onPositionChange?: (...args: any[]) => any;
        mapOptions?: any;
        parent?: React.ReactNode;
    }

    type PositionInputState = {
        value?: string;
        addresses?: undefined[];
        currentInputType?: number;
        overlayPosition?: {
            width: number;
            left: number;
            bottom: number;
        };
    };
    /**
     * A location input with a map and text input.
     *
     * This requires the Google Maps JavaScript API with the places library enabled.
     * You can find more information about the Maps API
     * [here](https://developers.google.com/maps/documentation/javascript/overview).
     */
    export default class PositionInput extends React.PureComponent<
        IPositionInputProps,
        PositionInputState
    > {
        autocomplete: any;

        geocoder: any;

        mapOverlayRef: any;

        mapRef: any;

        constructor(props: any);

        setAddress: (position: any, triggerChange?: boolean) => void;

        handleUserPan: (map: any) => void;

        handleInputChange: (value: any) => void;

        changePosition: (value: any) => void;

        getAddresses: (value: any) => void;

        selectAddress: (value: any) => void;

        render(): JSX.Element;
    }
}
declare module 'chayns-components/dist/esm/react-chayns-progress_bar/component/ProgressBarDeterminate' {
    type ProgressBarDeterminateProps = {
        value: number;
    };
    const ProgressBarDeterminate: React.SFC<ProgressBarDeterminateProps>;
    export default ProgressBarDeterminate;
}
declare module 'chayns-components/dist/esm/react-chayns-progress_bar/component/ProgressBarIndeterminate' {
    const ProgressBarIndeterminate: React.SFC<{}>;
    export default ProgressBarIndeterminate;
}
declare module 'chayns-components/dist/esm/react-chayns-progress_bar/component/AutoProgressBar' {
    type AutoProgressBarProps = {
        value?: number;
    };
    const AutoProgressBar: React.SFC<AutoProgressBarProps>;
    export default AutoProgressBar;
}
declare module 'chayns-components/dist/esm/react-chayns-progress_bar/component/ProgressBar' {
    type ProgressBarProps = {
        value?: number;
        ready?: boolean;
    };
    const ProgressBar: React.SFC<ProgressBarProps>;
    export default ProgressBar;
}
declare module 'chayns-components/dist/esm/react-chayns-receiverinput/utils/member' {
    export function getMemberCount(chosenReceivers: any): number;
}
declare module 'chayns-components/dist/esm/react-chayns-receiverinput/component/content/ChosenMember' {
    interface IChosenMemberProps extends React.HTMLAttributes<Element> {
        removeMember: (...args: any[]) => any;
        name: string;
        locationId?: number;
        personId?: string;
        groupId?: number;
        siteId?: string;
        userId?: number;
        fixed?: boolean;
    }

    export default class ChosenMember extends React.Component<IChosenMemberProps, {}> {
        remove: () => void;

        render(): JSX.Element;
    }
}
declare module 'chayns-components/dist/esm/react-chayns-receiverinput/utils/image' {
    export function handleImageError(event: any): void;

    export function getGroupImage(groupId: any, members: any): JSX.Element;
}
declare module 'chayns-components/dist/esm/react-chayns-receiverinput/utils/textstring' {
    export function getTextstring(string: any): any;
}
declare module 'chayns-components/dist/esm/react-chayns-receiverinput/component/content/Receiver' {
    interface IReceiverProps extends React.HTMLAttributes<Element> {
        updateReceiverSearchString: (...args: any[]) => any;
        updateChosenReceivers: (...args: any[]) => any;
        chosenReceivers: any[];
        name: string;
        includedUsers?: any[];
        showIdInPopup?: boolean;
        locationId?: number;
        personId?: string;
        groupId?: number;
        userId?: number;
        imgUrl?: string;
        siteId?: string;
    }

    export default class Receiver extends React.Component<IReceiverProps, {}> {
        shouldComponentUpdate(nextProps: any): boolean;

        chooseReceiver(
            name: any,
            locationId: any,
            userId: any,
            groupId: any,
            personId: any,
            siteId: any
        ): void;

        render(): JSX.Element;
    }
}
declare module 'chayns-components/dist/esm/react-chayns-receiverinput/component/content/ReceiverSearchPopup' {
    interface IReceiverSearchPopupProps extends React.HTMLAttributes<Element> {
        updateReceiverSearchString: (...args: any[]) => any;
        updateChosenReceivers: (...args: any[]) => any;
        chosenReceivers: any[];
        foundReceivers: any;
        isLocation: boolean;
        position: any;
        width: number;
        show: boolean;
        showIdInPopup?: boolean;
        onlyPersons?: boolean;
        onlySites?: boolean;
    }

    export default class ReceiverSearchPopup extends React.Component<
        IReceiverSearchPopupProps,
        {}
    > {
        shouldComponentUpdate(nextProps: any): boolean;

        render(): JSX.Element;
    }
}
declare module 'chayns-components/dist/esm/react-chayns-receiverinput/component/ReceiverInput' {
    interface IReceiverInputProps extends React.HTMLAttributes<Element> {
        includeIntercomDisabled?: boolean;
        onChosenReceiverChange?: (...args: any[]) => any;
        preselectedReceivers?: any[];
        maxReceiverCount?: number;
        onGroupNameChange?: (...args: any[]) => any;
        showIdInSelection?: boolean;
        groupNameEnabled?: boolean;
        showIdInPopup?: boolean;
        addPageOffset?: boolean;
        placeholder?: string;
        locationMode?: boolean;
        fontFamily?: string;
        onlyPersons?: boolean;
        canFindOwn?: boolean;
        fontSize?: string;
        onlySites?: boolean;
        disabled?: boolean;
        pureMode?: boolean;
    }

    type ReceiverInputState = {
        chosenReceivers?: any;
        groupName?: any;
        receiverSearchString?: any;
        foundReceivers?: any;
        popupPosition?: any;
        chosenSender?: any;
        popupWidth?: any;
        showPopup?: any;
    };
    export default class ReceiverInput extends React.Component<
        IReceiverInputProps,
        ReceiverInputState
    > {
        lastResultDisplayedTime: number;

        defaultState: {
            foundReceivers: {
                locations: {
                    state: number;
                    values: any[];
                };
                groups: {
                    state: number;
                    values: any[];
                };
                users: {
                    state: number;
                    values: any[];
                };
            };
            popupPosition: {
                top: number;
                left: number;
            };
            receiverSearchString: string;
            chosenReceivers: any[];
            chosenSender: any;
            showPopup: boolean;
            groupName: string;
            popupWidth: number;
        };

        /**
         * @deprecated
         * */
        constructor(props: any);

        componentDidMount(): void;

        shouldComponentUpdate(nextProps: any, nextState: any): boolean;

        componentDidUpdate(): void;

        componentWillUnmount(): void;

        addPopupRootDiv: () => void;

        removePopupRootDiv: () => void;

        addReceiverPopupToDiv: () => void;

        searchForReceivers: (event: any) => void;

        removeReceiver: (receiverType: any, id: any) => void;

        updateChosenReceivers: (chosenReceivers: any) => void;

        changeGroupName: (event: any) => void;

        showReceiverPopup: (event: any) => Promise<void>;

        hideReceiverPopup: () => void;

        handleClick: (event: any) => void;

        updateReceiverSearchString: (receiverSearchString: any) => void;

        searchReceiversForString: any;

        render(): JSX.Element;
    }
}
declare module 'chayns-components/dist/esm/react-chayns-rfid_input/constants/regex' {
    export const VALID_RFID: RegExp;
    export const SPLIT_RFID: RegExp;
    export const RFID_CONTENT: RegExp;
}
declare module 'chayns-components/dist/esm/react-chayns-rfid_input/component/RfidInput' {
    interface IRfidInputProps extends React.HTMLAttributes<Element> {
        className?: string;
        style?: {
            [key: string]: string | number;
        };
        placeholder?: string;
        confirmNode?: React.ReactNode | React.ReactNode[];
        enableScan?: boolean;
        scanText?: string;
        value: string;
        onInput: (...args: any[]) => any;
        onConfirm: (...args: any[]) => any;
    }

    type RfidInputState = {
        isScanning?: boolean;
    };
    /**
     * A component to take in an RFID signal.
     */
    export default class RfidInput extends React.Component<IRfidInputProps, RfidInputState> {
        static pretifyRfid(rfid: any): any;

        static isNfcAvailable(): any;

        constructor(props: any);

        onConfirm: () => void;

        onInput: (newRfid: any) => void;

        onScan: (rfid: any) => void;

        startScan: () => void;

        endScan: () => void;

        render(): JSX.Element;
    }
}
declare module 'chayns-components/dist/esm/react-chayns-scrollview/component/ScrollViewHelper' {
    export default class ScrollViewHelper {
        bar: string;

        content: any;

        direction: string;

        scrollRatio: number;

        target: any;

        wrapper: any;

        constructor(
            el: any,
            {
                wrapper,
                content,
                bar,
            }: {
                wrapper: any;
                content: any;
                bar: any;
            }
        );

        dragDealer(): void;

        moveBar(): void;

        refresh(): void;
    }
}
declare module 'chayns-components/dist/esm/react-chayns-scrollview/component/ScrollView' {
    interface IScrollViewProps extends React.HTMLAttributes<Element> {
        style?: {
            [key: string]: number | string;
        };
        className?: string;
        scrollElementId?: string;
        scrollElementRef?: (...args: any[]) => any;
        onScroll?: (...args: any[]) => any;
    }

    type ScrollViewState = {
        contentWidth?: number;
    };
    /**
     * A scrollable container with a custom scrollbar that looks great on every
     * device.
     */
    export default class ScrollView extends React.Component<IScrollViewProps, ScrollViewState> {
        bar: any;

        children: any;

        content: any;

        node: any;

        scrollView: any;

        wrapper: any;

        constructor(props: any);

        componentDidMount(): void;

        componentDidUpdate(): void;

        setContentWidth(): void;

        handleRefreshScrollView: () => void;

        scrollTo(...args: any[]): void;

        render(): JSX.Element;
    }
}
declare module 'chayns-components/dist/esm/react-chayns-searchbox/component/result-selection/ResultSelection' {
    import './ResultSelection.scss';

    type ResultSelectionProps = {
        text?: string;
        search?: string;
    };
    const ResultSelection: React.SFC<ResultSelectionProps>;
    export default ResultSelection;
}
declare module 'chayns-components/dist/esm/react-chayns-searchbox/component/SearchBox' {
    import './SearchBox.scss';

    type SearchBoxProps = {
        onSelect?: (...args: any[]) => any;
        disabled?: boolean;
        list?: any[] | string[] | number[];
        listKey?: string;
        listValue?: string;
        sortKey?: string;
        className?: string;
        defaultValue?: string | number;
        stopPropagation?: boolean;
        parent?: ((...args: any[]) => any) | React.ReactNode;
        style?: {
            [key: string]: string | number;
        };
        value?: string | number;
        inputValue?: string;
        showListWithoutInput?: boolean;
        inputDefaultValue?: string;
        onChange?: (...args: any[]) => any;
        autoSelectFirst?: boolean;
        highlightInputInResult?: boolean;
        addInputToList?: boolean;
        emptyKey?: string | number;
        hasOpenCloseIcon?: boolean;
    };
    const SearchBox: React.SFC<SearchBoxProps>;
    export default SearchBox;
}
declare module 'chayns-components/dist/esm/react-chayns-selectbutton/component/SelectButton' {
    interface ISelectButtonProps extends React.HTMLAttributes<Element> {
        onSelect?: (...args: any[]) => any;
        title?: string;
        description?: string;
        disabled?: boolean;
        label?: string;
        list: any[];
        listKey?: string;
        listValue?: string;
        selectedFlag?: string;
        multiSelect?: boolean;
        quickFind?: boolean;
        selectAllButton?: string;
        className?: string;
        style?: {
            [key: string]: number | string;
        };
        showSelection?: boolean | number;
        showListSelection?: boolean;
        stopPropagation?: boolean;
    }

    type SelectButtonState = {
        selected?: any;
    };
    /**
     * A choose button that opens a selection dialog when clicked.
     */
    export default class SelectButton extends React.Component<
        ISelectButtonProps,
        SelectButtonState
    > {
        constructor(props: any);

        componentDidUpdate(prevProps: any): void;

        onClick(e: any): void;

        getDialogList(_list: any): any[];

        getReturnList(selected: any): {
            buttonType: any;
            selection: any[];
        };

        render(): JSX.Element;
    }
}
declare module 'chayns-components/dist/esm/react-chayns-selectlist/component/selectListContext' {
    const SelectListContext: import('react').Context<{
        selectListSelectedId: any;
        changeListItem: () => void;
    }>;
    export default SelectListContext;
}
declare module 'chayns-components/dist/esm/react-chayns-selectlist/component/SelectItem' {
    type SelectListItemProps = {
        id?: number;
        className?: string;
        disabled?: boolean;
        name?: string | React.ReactNode;
        value?: any | any[];
        tooltipProps?: any;
    };
    const SelectListItem: React.SFC<SelectListItemProps>;
    export default SelectListItem;
}
declare module 'chayns-components/dist/esm/react-chayns-selectlist/component/SelectList' {
    interface ISelectListProps extends React.HTMLAttributes<Element> {
        onChange?: (...args: any[]) => any;
        defaultValue?: string | number;
        value?: string | number;
        selectFirst?: boolean;
        className?: string;
        style?: {
            [key: string]: number | string;
        };
    }

    type SelectListState = {
        selectedId?: any;
    };
    /**
     * A vertical list of radio buttons that reveal content when selected.
     */
    export default class SelectList extends React.Component<ISelectListProps, SelectListState> {
        changing: boolean;

        selectListId: string;

        constructor(props: any);

        componentDidMount(): void;

        componentDidUpdate(prevProps: any): void;

        changeActiveItem: (id: any, value: any) => void;

        calculateFirst(children: any): void;

        render(): JSX.Element;
    }
}
declare module 'chayns-components/dist/esm/react-chayns-setupwizard/utils/setupWizardHelper' {
    export const isDisabled: (enabledSteps: any, step: any) => boolean;
}
declare module 'chayns-components/dist/esm/react-chayns-setupwizard/component/SetupItemRight' {
    type SetupItemRightProps = {
        ready?: boolean;
        right?: React.ReactNode;
    };
    const SetupItemRight: React.SFC<SetupItemRightProps>;
    export default SetupItemRight;
}
declare module 'chayns-components/dist/esm/react-chayns-setupwizard/component/setupWizardContext' {
    const SetupWizardContext: import('react').Context<{
        enabledSteps: any[];
        completedSteps: any[];
        requiredSteps: any[];
        currentStep: number;
        contentStyle: any;
        stepComplete: any;
        stepEnabled: any;
        stepRequired: any;
        previousStep: any;
        nextStep: any;
        toStep: any;
        resetToStep: any;
        notComplete: any;
    }>;
    export default SetupWizardContext;
}
declare module 'chayns-components/dist/esm/react-chayns-setupwizard/component/withSetupWizardContext' {
    const withSetupWizardContext: (WrappedComponent: any) => (props: any) => JSX.Element;
    export default withSetupWizardContext;
}
declare module 'chayns-components/dist/esm/react-chayns-setupwizard/component/SetupItem' {
    const _default_6: (props: any) => JSX.Element;
    export default _default_6;
}
declare module 'chayns-components/dist/esm/react-chayns-setupwizard/component/SetupWizard' {
    interface ISetupWizardProps extends React.HTMLAttributes<Element> {
        ready?: (...args: any[]) => any;
        notComplete?: (...args: any[]) => any;
        className?: string;
        style?: {
            [key: string]: string | number;
        };
        contentStyle?: {
            [key: string]: string | number;
        };
        title?: string;
        description?: React.ReactNode;
        numberOfSteps?: number;
        allRequiredStepsCompleted?: (...args: any[]) => any;
        initialStep?: number;
        disableShowStep?: boolean;
        operationMode?: 0 | 1;
    }

    type SetupWizardState = {
        currentStep?: any;
        maxProgress?: number;
        completedSteps?: any;
        requiredSteps?: undefined[];
        enabledSteps?: number[];
        operationMode?: any;
    };

    /**
     * A set of steps the user has to go through sequentially.
     */
    class SetupWizard extends React.Component<ISetupWizardProps, SetupWizardState> {
        completedSteps: any;

        constructor(props: any);

        getChildContext(): {
            stepComplete: (value: any, step: any) => void;
            stepEnabled: (value: any, step: any) => void;
            previousStep: () => void;
            nextStep: () => void;
            toStep: (step: any) => void;
            resetToStep: (step: any) => void;
        };

        componentDidMount(): void;

        /**
         * Complete or uncomplete a step
         * @param value: true/false to complete/uncomplete
         * @param step: step that should be changed
         */
        stepComplete: (value: any, step: any) => void;

        /**
         * Enable or disable a step
         * @param value: true/false to enable/disable
         * @param step: step that should be changed
         */
        stepEnabled: (value: any, step: any) => void;

        /**
         * Set a step required/not required
         * @param value: true/false for required/not required
         * @param step: step that should be changed
         */
        stepRequired: (value: any, step: any) => void;

        /**
         * Go one step back
         */
        previousStep: () => void;

        /**
         * Go one step forward
         */
        nextStep: () => void;

        /**
         * Go to a step
         * @param step: the chosen step
         */
        toStep: (step: any) => void;

        /**
         * Reset the wizard to a step and go to this step
         * @param step: the chosen step
         */
        resetToStep: (step: any) => void;

        ready: () => void;

        allRequiredStepsCompleted: () => void;

        notComplete: () => void;

        render(): JSX.Element;
    }

    export default SetupWizard;
}
declare module 'chayns-components/dist/esm/react-chayns-sharingbar/component/sharingProvider' {
    export const shareOptions: {
        COPY: number;
        MAIL: number;
        WHATSAPP: number;
        FACEBOOK: number;
        TWITTER: number;
        QRCODE: number;
        CUSTOM_CHAYNS: number;
        CUSTOM_ALL: number;
    };
    export const shareProvider: {
        id: number;
        providerId: number;
        name: string;
        androidIdentifier: string;
        icon: string;
        url: string;
        available: boolean;
    }[];
}
declare module 'chayns-components/dist/esm/react-chayns-sharingbar/component/sharingActions' {
    export default function share(provider: any, link: any, linkText: any): void;
}
declare module 'chayns-components/dist/esm/react-chayns-sharingbar/component/sharingHelper' {
    export function getAvailableShareProviders(): any;

    export function getDefaultShareLink(): any;
}
declare module 'chayns-components/dist/esm/react-chayns-sharingbar/component/SharingBar' {
    import './sharingBar.scss';

    type SharingBarProps = {
        link?: string;
        linkText?: string;
        className?: string;
        stopPropagation?: boolean;
        style?: {
            [key: string]: string | number;
        };
    };
    const SharingBar: React.SFC<SharingBarProps>;
    export default SharingBar;
}
declare module 'chayns-components/dist/esm/react-chayns-signature/api/signature' {
    export const getUserSignature: () => Promise<any>;
    export const putUserSignature: (dataURL: any) => Promise<boolean>;
    export const deleteUserSignature: () => Promise<boolean>;
}
declare module 'chayns-components/dist/esm/react-chayns-signature/component/Signature' {
    /**
     * @component
     */
    import React from 'react';

    type SignatureProps = {
        onSubscribe?: (...args: any[]) => any;
    };
    const Signature: React.SFC<SignatureProps>;
    export default Signature;
}
declare module 'chayns-components/dist/esm/react-chayns-sliderbutton/component/SliderButton' {
    import './SliderButton.scss';

    type SliderButtonProps = {
        className?: string;
        style?: {
            [key: string]: string | number;
        };
        items?: {
            id?: string | number;
            text?: string | React.ReactNode;
        }[];
        onChange?: (...args: any[]) => any;
        onDragStop?: (...args: any[]) => any;
        onDragStart?: (...args: any[]) => any;
        selectedItemId?: number;
        disabled?: boolean;
    };
    const SliderButton: React.SFC<SliderButtonProps>;
    export default SliderButton;
}
declare module 'chayns-components/dist/esm/react-chayns-textarea/component/TextArea' {
    type TextAreaProps = {
        style?: {
            [key: string]: string | number;
        };
        disabled?: boolean;
        className?: string;
        placeholder?: string;
        required?: boolean;
        design?: number;
        onChange?: (...args: any[]) => any;
        onBlur?: (...args: any[]) => any;
        defaultValue?: string;
        value?: string;
        onKeyUp?: (...args: any[]) => any;
        onKeyDown?: (...args: any[]) => any;
        autogrow?: boolean;
        reference?: (...args: any[]) => any;
        stopPropagation?: boolean;
    };
    const TextArea: React.SFC<TextAreaProps>;
    export default TextArea;
}
declare module 'chayns-components/dist/esm/utils/createLinks' {
    const makeLinks: (txt: any) => any;
    export default makeLinks;
}
declare module 'chayns-components/dist/esm/utils/imageUpload' {
    /**
     * Uploads an image to the tsimg cloud service.
     *
     * @export
     * @param {string | File} file A URL as a string or a `File` object that should be uploaded.
     * @param {string} referenceId
     * @param {string} personId A person is that should be associated with the uploaded image.
     * @param {string} siteId A site id that should be associated with the uploaded image.
     * @param {string} [url='https://api.tsimg.cloud/image']
     * @return {Promise<object>} The response data for the image upload.
     */
    export default function imageUpload(
        file: any,
        referenceId: any,
        personId: any,
        siteId: any,
        url?: string
    ): Promise<any>;
}
declare module 'chayns-components/dist/esm/utils/OrientationHelper' {
    class OrientationHelper {
        constructor();

        getOrientation(): 1 | 0;

        update: () => void;
    }

    const _default_7: OrientationHelper;
    export default _default_7;
}
declare module 'chayns-components/dist/esm/utils/removeHtml' {
    const removeHtml: (txt: any) => any;
    export default removeHtml;
}

declare module 'chayns-components' {
    export { CHAYNS_CSS_VERSION } from 'chayns-components/dist/esm/constants/index';
    export { default as Accordion } from 'chayns-components/dist/esm/react-chayns-accordion/component/Accordion';
    export { default as AccordionIntro } from 'chayns-components/dist/esm/react-chayns-accordion/component/AccordionIntro';
    export { default as AmountControl } from 'chayns-components/dist/esm/react-chayns-amountcontrol/component/AmountControl';
    export { default as AnimationWrapper } from 'chayns-components/dist/esm/react-chayns-animation_wrapper/component/AnimationWrapper';
    export { default as Badge } from 'chayns-components/dist/esm/react-chayns-badge/component/Badge';
    export { default as Bubble } from 'chayns-components/dist/esm/react-chayns-bubble/component/Bubble';
    export { default as Button } from 'chayns-components/dist/esm/react-chayns-button/component/Button';
    export { default as ChooseButton } from 'chayns-components/dist/esm/react-chayns-button/component/ChooseButton';
    export { default as Calendar } from 'chayns-components/dist/esm/react-chayns-calendar/component/Calendar';
    export { default as Checkbox } from 'chayns-components/dist/esm/react-chayns-checkbox/component/Checkbox';
    export { default as ColorArea } from 'chayns-components/dist/esm/react-chayns-color_picker/component/colorArea/ColorArea';
    export { default as ColorInput } from 'chayns-components/dist/esm/react-chayns-color_picker/component/colorInput/ColorInput';
    export { default as ColorPicker } from 'chayns-components/dist/esm/react-chayns-color_picker/component/ColorPicker';
    export { default as HueSlider } from 'chayns-components/dist/esm/react-chayns-color_picker/component/hueSlider/HueSlider';
    export { default as TransparencySlider } from 'chayns-components/dist/esm/react-chayns-color_picker/component/transparencySlider/TransparencySlider';
    export { default as ColorScheme } from 'chayns-components/dist/esm/react-chayns-color_scheme/component/ColorScheme';
    export { default as ComboBox } from 'chayns-components/dist/esm/react-chayns-combobox/component/ComboBox';
    export { default as ContextMenu } from 'chayns-components/dist/esm/react-chayns-contextmenu/component/ContextMenu';
    export { default as DateInfo } from 'chayns-components/dist/esm/react-chayns-dateinfo/component/DateInfo';
    export { default as EmojiInput } from 'chayns-components/dist/esm/react-chayns-emoji_input/component/EmojiInput';
    export { default as ExpandableContent } from 'chayns-components/dist/esm/react-chayns-expandable_content/component/ExpandableContent';
    export { default as FileInput } from 'chayns-components/dist/esm/react-chayns-file_input/component/FileInput';
    export { default as FilterButton } from 'chayns-components/dist/esm/react-chayns-filterbutton/component/FilterButton';
    export { default as FormattedInput } from 'chayns-components/dist/esm/react-chayns-formatted_input/component/FormattedInput';
    export { default as DecimalFormatter } from 'chayns-components/dist/esm/react-chayns-formatted_input/utils/DecimalFormatter';
    export { default as Formatter } from 'chayns-components/dist/esm/react-chayns-formatted_input/utils/Formatter';
    export { default as FORMAT_DECIMAL } from 'chayns-components/dist/esm/react-chayns-formatted_input/utils/instances/formatDecimal';
    export { default as FORMAT_INTEGER } from 'chayns-components/dist/esm/react-chayns-formatted_input/utils/instances/formatInteger';
    export { default as FORMAT_PRICE } from 'chayns-components/dist/esm/react-chayns-formatted_input/utils/instances/formatPrice';
    export { default as IntegerFormatter } from 'chayns-components/dist/esm/react-chayns-formatted_input/utils/IntegerFormatter';
    export { default as PriceFormatter } from 'chayns-components/dist/esm/react-chayns-formatted_input/utils/PriceFormatter';
    export { default as Gallery } from 'chayns-components/dist/esm/react-chayns-gallery/component/Gallery';
    export { default as Image } from 'chayns-components/dist/esm/react-chayns-gallery/component/Image';
    export { default as ImageContainer } from 'chayns-components/dist/esm/react-chayns-gallery/component/ImageContainer';
    export {
        getDataUrlFromBase64,
        getDataUrlFromFile,
    } from 'chayns-components/dist/esm/react-chayns-gallery/utils/getDataUrl';
    export {
        getImageMetaDataFromApi,
        getImageMetaDataFromPreview,
    } from 'chayns-components/dist/esm/react-chayns-gallery/utils/getImageMetaData';
    export { default as getOrientation } from 'chayns-components/dist/esm/react-chayns-gallery/utils/getOrientation';
    export { default as GridCalendar } from 'chayns-components/dist/esm/react-chayns-gridcalendar/component/GridCalendar';
    export { default as Icon } from 'chayns-components/dist/esm/react-chayns-icon/component/Icon';
    export { default as ImageAccordion } from 'chayns-components/dist/esm/react-chayns-image_accordion/component/ImageAccordion';
    export { default as ImageAccordionGroup } from 'chayns-components/dist/esm/react-chayns-image_accordion/component/ImageAccordionGroup';
    export { default as Input } from 'chayns-components/dist/esm/react-chayns-input/component/Input';
    export { default as List } from 'chayns-components/dist/esm/react-chayns-list/component/List';
    export { default as ListItem } from 'chayns-components/dist/esm/react-chayns-list/component/ListItem';
    export { default as Mode } from 'chayns-components/dist/esm/react-chayns-modeswitch/component/Mode';
    export { default as ModeSwitch } from 'chayns-components/dist/esm/react-chayns-modeswitch/component/ModeSwitch';
    export { default as OpeningTimes } from 'chayns-components/dist/esm/react-chayns-openingtimes/component/OpeningTimes';
    export { default as SimpleWrapperContext } from 'chayns-components/dist/esm/react-chayns-personfinder/component/data/simpleWrapper/SimpleWrapperContext';
    export { default as PersonFinder } from 'chayns-components/dist/esm/react-chayns-personfinder/component/PersonFinder';
    export { default as PositionInput } from 'chayns-components/dist/esm/react-chayns-position_input/component/PositionInput';
    export { default as ProgressBar } from 'chayns-components/dist/esm/react-chayns-progress_bar/component/ProgressBar';
    export { default as RadioButton } from 'chayns-components/dist/esm/react-chayns-radiobutton/component/RadioButton';
    export { default as ReceiverInput } from 'chayns-components/dist/esm/react-chayns-receiverinput/component/ReceiverInput';
    export { default as RfidInput } from 'chayns-components/dist/esm/react-chayns-rfid_input/component/RfidInput';
    export { default as ScrollView } from 'chayns-components/dist/esm/react-chayns-scrollview/component/ScrollView';
    export { default as ResultSelection } from 'chayns-components/dist/esm/react-chayns-searchbox/component/result-selection/ResultSelection';
    export { default as SearchBox } from 'chayns-components/dist/esm/react-chayns-searchbox/component/SearchBox';
    export { default as SelectButton } from 'chayns-components/dist/esm/react-chayns-selectbutton/component/SelectButton';
    export { default as SelectListItem } from 'chayns-components/dist/esm/react-chayns-selectlist/component/SelectItem';
    export { default as SelectList } from 'chayns-components/dist/esm/react-chayns-selectlist/component/SelectList';
    export { default as SetupWizardItem } from 'chayns-components/dist/esm/react-chayns-setupwizard/component/SetupItem';
    export { default as SetupWizard } from 'chayns-components/dist/esm/react-chayns-setupwizard/component/SetupWizard';
    export { default as withSetupWizardContext } from 'chayns-components/dist/esm/react-chayns-setupwizard/component/withSetupWizardContext';
    export { default as SharingBar } from 'chayns-components/dist/esm/react-chayns-sharingbar/component/SharingBar';
    export { default as Signature } from 'chayns-components/dist/esm/react-chayns-signature/component/Signature';
    export { default as Slider } from 'chayns-components/dist/esm/react-chayns-slider/component/Slider';
    export { default as SliderButton } from 'chayns-components/dist/esm/react-chayns-sliderbutton/component/SliderButton';
    export { default as SmallWaitCursor } from 'chayns-components/dist/esm/react-chayns-smallwaitcursor/component/SmallWaitCursor';
    export { default as TagInput } from 'chayns-components/dist/esm/react-chayns-tag_input/component/TagInput';
    export { default as TextArea } from 'chayns-components/dist/esm/react-chayns-textarea/component/TextArea';
    export { default as TextString } from 'chayns-components/dist/esm/react-chayns-textstring/component/TextString';
    export { default as Tooltip } from 'chayns-components/dist/esm/react-chayns-tooltip/component/Tooltip';
    export { default as VerificationIcon } from 'chayns-components/dist/esm/react-chayns-verification_icon/component/VerificationIcon';
    export { default as createLinks } from 'chayns-components/dist/esm/utils/createLinks';
    export { default as equalizer } from 'chayns-components/dist/esm/utils/equalizer';
    export { default as imageUpload } from 'chayns-components/dist/esm/utils/imageUpload';
    export { default as OrientationHelper } from 'chayns-components/dist/esm/utils/OrientationHelper';
    export { default as removeHtml } from 'chayns-components/dist/esm/utils/removeHtml';
    export { default as isTobitEmployee } from 'chayns-components/dist/esm/utils/tobitEmployee';
}

declare module 'chayns-components/dist/esm/constants/background-colors' {
    export const BACKGROUND_COLOR_000: string;
    export const BACKGROUND_COLOR_001: string;
    export const BACKGROUND_COLOR_002: string;
    export const BACKGROUND_COLOR_003: string;
    export const BACKGROUND_COLOR_004: string;
    export const BACKGROUND_COLOR_005: string;
    export const BACKGROUND_COLOR_006: string;
    export const BACKGROUND_COLOR_007: string;
    export const BACKGROUND_COLOR_008: string;
    export const BACKGROUND_COLOR_009: string;
    export const BACKGROUND_COLOR_100: string;
    export const BACKGROUND_COLOR_101: string;
    export const BACKGROUND_COLOR_102: string;
    export const BACKGROUND_COLOR_103: string;
    export const BACKGROUND_COLOR_104: string;
    export const BACKGROUND_COLOR_105: string;
    export const BACKGROUND_COLOR_106: string;
    export const BACKGROUND_COLOR_107: string;
    export const BACKGROUND_COLOR_108: string;
    export const BACKGROUND_COLOR_109: string;
    export const BACKGROUND_COLOR_200: string;
    export const BACKGROUND_COLOR_201: string;
    export const BACKGROUND_COLOR_202: string;
    export const BACKGROUND_COLOR_203: string;
    export const BACKGROUND_COLOR_204: string;
    export const BACKGROUND_COLOR_205: string;
    export const BACKGROUND_COLOR_206: string;
    export const BACKGROUND_COLOR_207: string;
    export const BACKGROUND_COLOR_208: string;
    export const BACKGROUND_COLOR_209: string;
    export const BACKGROUND_COLOR_300: string;
    export const BACKGROUND_COLOR_301: string;
    export const BACKGROUND_COLOR_302: string;
    export const BACKGROUND_COLOR_303: string;
    export const BACKGROUND_COLOR_304: string;
    export const BACKGROUND_COLOR_305: string;
    export const BACKGROUND_COLOR_306: string;
    export const BACKGROUND_COLOR_307: string;
    export const BACKGROUND_COLOR_308: string;
    export const BACKGROUND_COLOR_309: string;
    export const BACKGROUND_COLOR_PRIMARY: string;
    export const BACKGROUND_COLOR_HEADLINE: string;
    export const BACKGROUND_COLOR_TEXT: string;
    export const BACKGROUND_COLOR_HEADER_BAR: string;
    export const BACKGROUND_COLOR_CW_BACKGROUND: string;
    export const BACKGROUND_COLOR_YELLOW_1: string;
    export const BACKGROUND_COLOR_YELLOW_2: string;
    export const BACKGROUND_COLOR_YELLOW_3: string;
    export const BACKGROUND_COLOR_YELLOW_4: string;
    export const BACKGROUND_COLOR_RED_1: string;
    export const BACKGROUND_COLOR_RED_2: string;
    export const BACKGROUND_COLOR_RED_3: string;
    export const BACKGROUND_COLOR_RED_4: string;
    export const BACKGROUND_COLOR_GREEN_1: string;
    export const BACKGROUND_COLOR_GREEN_2: string;
    export const BACKGROUND_COLOR_GREEN_3: string;
    export const BACKGROUND_COLOR_GREEN_4: string;
}
declare module 'chayns-components/dist/esm/constants/colors' {
    export const COLOR_000: string;
    export const COLOR_001: string;
    export const COLOR_002: string;
    export const COLOR_003: string;
    export const COLOR_004: string;
    export const COLOR_005: string;
    export const COLOR_006: string;
    export const COLOR_007: string;
    export const COLOR_008: string;
    export const COLOR_009: string;
    export const COLOR_100: string;
    export const COLOR_101: string;
    export const COLOR_102: string;
    export const COLOR_103: string;
    export const COLOR_104: string;
    export const COLOR_105: string;
    export const COLOR_106: string;
    export const COLOR_107: string;
    export const COLOR_108: string;
    export const COLOR_109: string;
    export const COLOR_200: string;
    export const COLOR_201: string;
    export const COLOR_202: string;
    export const COLOR_203: string;
    export const COLOR_204: string;
    export const COLOR_205: string;
    export const COLOR_206: string;
    export const COLOR_207: string;
    export const COLOR_208: string;
    export const COLOR_209: string;
    export const COLOR_300: string;
    export const COLOR_301: string;
    export const COLOR_302: string;
    export const COLOR_303: string;
    export const COLOR_304: string;
    export const COLOR_305: string;
    export const COLOR_306: string;
    export const COLOR_307: string;
    export const COLOR_308: string;
    export const COLOR_309: string;
    export const COLOR_PRIMARY: string;
    export const COLOR_HEADLINE: string;
    export const COLOR_TEXT: string;
    export const COLOR_HEADER_BAR: string;
    export const COLOR_CW_BACKGROUND: string;
    export const COLOR_YELLOW_1: string;
    export const COLOR_YELLOW_2: string;
    export const COLOR_YELLOW_3: string;
    export const COLOR_YELLOW_4: string;
    export const COLOR_RED_1: string;
    export const COLOR_RED_2: string;
    export const COLOR_RED_3: string;
    export const COLOR_RED_4: string;
    export const COLOR_GREEN_1: string;
    export const COLOR_GREEN_2: string;
    export const COLOR_GREEN_3: string;
    export const COLOR_GREEN_4: string;
}
declare module 'chayns-components/dist/esm/react-chayns-accordion/component/Accordion.stories' {
    import Accordion from 'react-chayns-accordion/component/Accordion';

    const _default_8: {
        title: string;
        component: typeof Accordion;
    };
    export default _default_8;
    export const BasicExample: any;
}
declare module 'chayns-components/dist/esm/react-chayns-amountcontrol/component/AmountControl.stories' {
    import AmountControl from 'react-chayns-amountcontrol/component/AmountControl';

    const _default_9: {
        title: string;
        component: typeof AmountControl;
    };
    export default _default_9;
    export const BasicExample: (args: any) => JSX.Element;
    export const WithoutState: any;
}
declare module 'chayns-components/dist/esm/react-chayns-animation_wrapper/component/AnimationWrapper.stories' {
    const _default_10: {
        title: string;
        component: React.SFC<{
            animationTime?: number;
            setAutoTime?: number;
        }>;
    };
    export default _default_10;
    export const BasicExample: any;
    export const WithLongDuration: any;
}
declare module 'chayns-components/dist/esm/react-chayns-badge/component/Badge.stories' {
    const _default_11: {
        title: string;
        component: React.SFC<{
            className?: string;
            style?: {
                [key: string]: string | number;
            };
            badgeRef?: (...args: any[]) => any;
        }>;
    };
    export default _default_11;
    export const BasicExample: {
        (args: any): JSX.Element;
        args: {
            children: number;
        };
    };
    export const InAccordionHead: {
        (args: any): JSX.Element;
        args: {
            children: number;
        };
    };
    export const WithText: {
        (args: any): JSX.Element;
        args: {
            children: string;
        };
    };
}
declare module 'chayns-components/dist/esm/react-chayns-bubble/component/Bubble.stories' {
    const _default_12: {
        title: string;
        component: React.SFC<{
            className?: string;
            style?: {
                [key: string]: string | number;
            };
            position?: 0 | 1 | 2 | 3 | 4 | 5;
            parent?: any;
            coordinates?: {
                x: number;
                y: number;
            };
            onMouseEnter?: (...args: any[]) => any;
            onMouseLeave?: (...args: any[]) => any;
            topDivStyle?: {
                [key: string]: string | number;
            };
        }>;
    };
    export default _default_12;
    export const BasicExample: any;
}
declare module 'chayns-components/dist/esm/react-chayns-button/component/Button.stories' {
    const _default_13: {
        title: string;
        component: React.SFC<{
            chooseButton?: boolean;
            disabled?: boolean;
            onClick?: (...args: any[]) => any;
            className?: string;
            icon?: any;
            secondary?: boolean;
            stopPropagation?: boolean;
            type?: 'button' | 'submit' | 'reset';
        }>;
    };
    export default _default_13;
    export const Primary: any;
    export const ChooseButton: any;
    export const Secondary: any;
}
declare module 'chayns-components/dist/esm/react-chayns-button/component/ChooseButton.stories' {
    const _default_14: {
        title: string;
        component: React.SFC<{
            disabled?: boolean;
            onClick?: (...args: any[]) => any;
            className?: string;
            icon?: any;
            stopPropagation?: boolean;
            type?: 'button' | 'submit' | 'reset';
        }>;
    };
    export default _default_14;
    export const BasicExample: any;
}
declare module 'chayns-components/dist/esm/react-chayns-calendar/component/Calendar.stories' {
    import Calendar from 'react-chayns-calendar/component/Calendar';

    const _default_15: {
        title: string;
        component: typeof Calendar;
    };
    export default _default_15;
    export const BasicExample: any;
}
declare module 'chayns-components/dist/esm/react-chayns-checkbox/component/Checkbox.stories' {
    const _default_16: {
        title: string;
        component: React.SFC<{
            style?: {
                [key: string]: string | number;
            };
            className?: string;
            labelStyle?: {
                [key: string]: string | number;
            };
            labelClassName?: string;
            label?:
                | string
                | number
                | boolean
                | {}
                | React.ReactElement<
                      any,
                      | string
                      | ((props: any) => React.ReactElement<any, any>)
                      | (new (props: any) => React.Component<any, any, any>)
                  >
                | React.ReactNodeArray
                | React.ReactPortal
                | React.ReactNode[];
            onChange?: (...args: any[]) => any;
            toggleButton?: boolean;
            checked?: boolean;
            defaultChecked?: boolean;
            disabled?: boolean;
            dangerouslySetLabel?: {
                __html: string;
            };
            stopPropagation?: boolean;
            id?: string | number;
        }>;
    };
    export default _default_16;
    export const BasicExample: any;
    export const ToggleButton: any;
}
declare module 'chayns-components/dist/esm/react-chayns-color_picker/component/ColorPicker.stories' {
    const _default_17: {
        title: string;
        component: React.SFC<{
            inline?: boolean;
            color: string | number;
            bubblePosition?: number;
            onChange?: (...args: any[]) => any;
            onChangeEnd?: (...args: any[]) => any;
            onBlur?: (...args: any[]) => any;
            transparency?: boolean;
            parent?: any;
            className?: string;
            style?: {
                [key: string]: string | number;
            };
            bubbleClassName?: string;
            bubbleStyle?: {
                [key: string]: string | number;
            };
            input?: boolean;
            defaultColorModel?: number;
            removeParentSpace?: boolean;
        }>;
    };
    export default _default_17;
    export const Inline: any;
}
declare module 'chayns-components/dist/esm/react-chayns-color_scheme/component/ColorScheme.stories' {
    const _default_18: {
        title: string;
        component: React.SFC<{
            color?: string;
            secondaryColor?: string;
            colorMode?: string | number;
            style?: {
                [key: string]: string | number;
            };
            cssVariables?: {
                [key: string]: string | number;
            };
        }>;
    };
    export default _default_18;
    export const BasicExample: any;
}
declare module 'chayns-components/dist/esm/react-chayns-combobox/component/ComboBox.stories' {
    const _default_19: {
        title: string;
        component: React.SFC<{
            onSelect?: (...args: any[]) => any;
            disabled?: boolean;
            label?: string;
            list: any[];
            listKey: string;
            listValue: string;
            className?: string;
            defaultValue?: string;
            stopPropagation?: boolean;
            parent?:
                | string
                | number
                | boolean
                | {}
                | React.ReactElement<
                      any,
                      | string
                      | ((props: any) => React.ReactElement<any, any>)
                      | (new (props: any) => React.Component<any, any, any>)
                  >
                | React.ReactNodeArray
                | React.ReactPortal
                | ((...args: any[]) => any);
            style?: {
                [key: string]: string | number;
            };
            value?: string | number;
        }>;
    };
    export default _default_19;
    export const BasicExample: any;
}
declare module 'chayns-components/dist/esm/react-chayns-contextmenu/component/ContextMenu.stories' {
    const _default_20: {
        title: string;
        component: React.SFC<{
            onLayerClick?: (...args: any[]) => any;
            coordinates?: {
                x: number;
                y: number;
            };
            items?: {
                className?: string;
                onClick?: (...args: any[]) => any;
                text: React.ReactNode;
                stringName?: string;
                icon?: any;
            }[];
            position?: number;
            positionOnChildren?: number;
            parent?: any;
            onChildrenClick?: (...args: any[]) => any;
            childrenStyle?: {
                [key: string]: string | number;
            };
            childrenClassName?: string;
            stopPropagation?: boolean;
            minWidth?: number;
            maxWidth?: number;
            showTriggerBackground?: boolean;
            className?: string;
            style?: any;
            removeParentSpace?: boolean;
            disableDialog?: boolean;
            arrowDistance?: number;
        }>;
    };
    export default _default_20;
    export const BasicExample: any;
}
declare module 'chayns-components/dist/esm/react-chayns-dateinfo/component/DateInfo.stories' {
    import DateInfo from 'react-chayns-dateinfo/component/DateInfo';

    const _default_21: {
        title: string;
        component: typeof DateInfo;
    };
    export default _default_21;
    export const BasicExample: any;
}
declare module 'chayns-components/dist/esm/react-chayns-emoji_input/component/EmojiInput.stories' {
    import EmojiInput from 'react-chayns-emoji_input/component/EmojiInput';

    const _default_22: {
        title: string;
        component: typeof EmojiInput;
    };
    export default _default_22;
    export const BasicExample: any;
}
declare module 'chayns-components/dist/esm/react-chayns-expandable_content/component/ExpandableContent.stories' {
    import ExpandableContent from 'react-chayns-expandable_content/component/ExpandableContent';

    const _default_23: {
        title: string;
        component: typeof ExpandableContent;
    };
    export default _default_23;
    export const BasicExample: any;
}
declare module 'chayns-components/dist/esm/react-chayns-formatted_input/utils/index' {
    import FORMAT_INTEGER from 'react-chayns-formatted_input/utils/instances/formatInteger';
    import FORMAT_DECIMAL from 'react-chayns-formatted_input/utils/instances/formatDecimal';
    import FORMAT_PRICE from 'react-chayns-formatted_input/utils/instances/formatPrice';

    export {
        Formatter,
        IntegerFormatter,
        DecimalFormatter,
        PriceFormatter,
        FORMAT_INTEGER,
        FORMAT_DECIMAL,
        FORMAT_PRICE,
    };
}
declare module 'chayns-components/dist/esm/react-chayns-list/component/List.stories' {
    const _default_24: {
        component: React.SFC<{
            title:
                | string
                | number
                | boolean
                | {}
                | React.ReactElement<
                      any,
                      | string
                      | ((props: any) => React.ReactElement<any, any>)
                      | (new (props: any) => React.Component<any, any, any>)
                  >
                | React.ReactNodeArray
                | React.ReactPortal
                | React.ReactNode[];
            subtitle?:
                | string
                | number
                | boolean
                | {}
                | React.ReactElement<
                      any,
                      | string
                      | ((props: any) => React.ReactElement<any, any>)
                      | (new (props: any) => React.Component<any, any, any>)
                  >
                | React.ReactNodeArray
                | React.ReactPortal
                | React.ReactNode[];
            image?: string;
            images?: string[];
            icon?: any;
            className?: string;
            onClick?: (...args: any[]) => any;
            right?:
                | string
                | number
                | boolean
                | {}
                | React.ReactElement<
                      any,
                      | string
                      | ((props: any) => React.ReactElement<any, any>)
                      | (new (props: any) => React.Component<any, any, any>)
                  >
                | React.ReactNodeArray
                | React.ReactPortal
                | React.ReactNode[];
            style?: {
                [key: string]: string | number;
            };
            headerProps?: any;
            circle?: boolean;
            hoverItem?: React.ReactNode;
            onLongPress?: (...args: any[]) => any;
            onMouseDown?: (...args: any[]) => any;
            onMouseMove?: (...args: any[]) => any;
            onMouseUp?: (...args: any[]) => any;
            onTouchStart?: (...args: any[]) => any;
            onTouchMove?: (...args: any[]) => any;
            onTouchEnd?: (...args: any[]) => any;
            onTouchCancel?: (...args: any[]) => any;
            longPressTimeout?: number;
            noContentClass?: boolean;
            onOpen?: (...args: any[]) => any;
            imageBorderColor?: string;
            left?:
                | string
                | number
                | boolean
                | {}
                | React.ReactElement<
                      any,
                      | string
                      | ((props: any) => React.ReactElement<any, any>)
                      | (new (props: any) => React.Component<any, any, any>)
                  >
                | React.ReactNodeArray
                | React.ReactPortal
                | React.ReactNode[];
        }>;
        title: string;
        decorators: ((Story: any) => JSX.Element)[];
    };
    export default _default_24;
    export const Basic: any;
    export const WithSubtitle: any;
    export const WithImage: any;
    export const WithIcon: any;
}
declare module 'chayns-components/dist/esm/react-chayns-personfinder/component/data/uacGroups/UacGroupReducer' {
    export const initialState: {
        data: any[];
        showWaitCursor: boolean;
        isLoading: boolean;
    };
    export const reducer: (
        state: {
            data: any[];
            showWaitCursor: boolean;
            isLoading: boolean;
        },
        action: any
    ) =>
        | {
              data: any[];
              showWaitCursor: boolean;
              isLoading: boolean;
          }
        | {
              data: any[];
              showWaitCursor: boolean;
              isLoading: boolean;
              hasMore: any;
          };
}
declare module 'chayns-components/dist/esm/react-chayns-personfinder/component/data/uacGroups/UacGroupContext' {
    const _default_25: {
        Consumer: React.Consumer<{
            value: any;
        }>;
        Provider: React.SFC<{}>;
        ObjectMapping: {
            showName: string;
            identifier: string;
            search: string[];
            imageUrl: any;
            filter: (inputValue: any) => (e: any) => boolean;
        };
    };
    export default _default_25;
}
declare module 'chayns-components/dist/esm/react-chayns-position_input/component/GoogleMap/PropTypes' {
    /**
     * @param {string} eventName Name of the event
     * @returns {string} Name of the event handler
     */
    export const toHandlerName: (eventName: any) => string;
    /**
     * Transforms event names into PropTypes
     * @param {string[]} events The event names
     * @param {boolean} returnDefaultProps Return propTypes or defaultProps
     * @returns {{ [eventHandler: string]: PropTypes.func | null }}
     */
    export const toPropTypes: (events: any, returnDefaultProps: any) => any;
    export const PositionProps: any;
}
declare module 'chayns-components/dist/esm/react-chayns-scrollview/utils/requestAnimationFrame' {
    const requestAnimationFrame:
        | (((callback: FrameRequestCallback) => number) & typeof globalThis.requestAnimationFrame)
        | typeof setImmediate
        | ((c: any) => NodeJS.Timeout);
    export default requestAnimationFrame;
}
declare module 'chayns-components/dist/esm/utils/debounce.js_js2ts_1628235542942' {
    /**
     * Returns a wrapper function that executes `func` after it was not called for the last `delay` milliseconds
     * @param {(...args: any[]) => void} func
     * @param {number} delay
     */
    const debounce: (func: any, delay: any) => (...args: any[]) => void;
    export default debounce;
}
declare module 'chayns-components/dist/esm/utils/fetch' {
    /**
     * This is an example that simulates an API call. Make sure to remove this function and call your own APIs
     * instead.
     * @returns {Promise}
     */
    export function fetchDataFromApi(
        url: any,
        method: string,
        body: any,
        statusCodes: any
    ): Promise<any>;

    export function reloadCache(reload: any): Promise<unknown>;
}
declare module 'chayns-components/dist/esm/utils/modulo' {
    export default function mod(n: any, m: any): number;
}
declare module 'chayns-components/dist/esm/utils/selectFile' {
    /**
     * Requests a file upload from the user and returns the selected files
     * @param {{}} config - Config object that describes the behaviour of the select-dialog
     * @param {string} [config.type = *\/*] - MIME-Types that are allowed to be selected
     * @param {bool} [config.multiple = false] - Allow the selecting of multiple files
     * @returns {Promise<File>|Promise<File[]>|Promise<FileList>|Promise<null>} - Promise is resolved when user
     *     selects a file. Returns the file (or file list, when multiple is set)
     */
    function selectFile({
        type,
        multiple,
    }?: {
        type?: string;
        multiple?: boolean;
    }): Promise<File | FileList>;

    export default selectFile;
}
declare module 'chayns-components/dist/esm/utils/chayns/setOverlay' {
    export default function setOverlay(
        enabled: any,
        {
            color,
            transition,
            mode,
        }: {
            color: any;
            transition: any;
            mode: any;
        }
    ): Promise<unknown>;

    export function showOverlay(config: any): Promise<unknown>;

    export function hideOverlay(config: any): Promise<unknown>;
}
