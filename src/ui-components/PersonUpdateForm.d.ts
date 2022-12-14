/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Person } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PersonUpdateFormInputValues = {
    name?: string;
    date_of_birth?: string;
    date_of_joining?: string;
    email?: string;
    location?: string;
    mobile?: string;
};
export declare type PersonUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    date_of_birth?: ValidationFunction<string>;
    date_of_joining?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    location?: ValidationFunction<string>;
    mobile?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PersonUpdateFormOverridesProps = {
    PersonUpdateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
    date_of_birth?: FormProps<TextFieldProps>;
    date_of_joining?: FormProps<TextFieldProps>;
    email?: FormProps<TextFieldProps>;
    location?: FormProps<TextFieldProps>;
    mobile?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PersonUpdateFormProps = React.PropsWithChildren<{
    overrides?: PersonUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    person?: Person;
    onSubmit?: (fields: PersonUpdateFormInputValues) => PersonUpdateFormInputValues;
    onSuccess?: (fields: PersonUpdateFormInputValues) => void;
    onError?: (fields: PersonUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: PersonUpdateFormInputValues) => PersonUpdateFormInputValues;
    onValidate?: PersonUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PersonUpdateForm(props: PersonUpdateFormProps): React.ReactElement;
