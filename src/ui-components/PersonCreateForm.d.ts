/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PersonCreateFormInputValues = {
    name?: string;
    date_of_birth?: string;
    date_of_joining?: string;
    email?: string;
    location?: string;
    mobile?: string;
};
export declare type PersonCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    date_of_birth?: ValidationFunction<string>;
    date_of_joining?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    location?: ValidationFunction<string>;
    mobile?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PersonCreateFormOverridesProps = {
    PersonCreateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
    date_of_birth?: FormProps<TextFieldProps>;
    date_of_joining?: FormProps<TextFieldProps>;
    email?: FormProps<TextFieldProps>;
    location?: FormProps<TextFieldProps>;
    mobile?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PersonCreateFormProps = React.PropsWithChildren<{
    overrides?: PersonCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PersonCreateFormInputValues) => PersonCreateFormInputValues;
    onSuccess?: (fields: PersonCreateFormInputValues) => void;
    onError?: (fields: PersonCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: PersonCreateFormInputValues) => PersonCreateFormInputValues;
    onValidate?: PersonCreateFormValidationValues;
} & React.CSSProperties>;
export default function PersonCreateForm(props: PersonCreateFormProps): React.ReactElement;
