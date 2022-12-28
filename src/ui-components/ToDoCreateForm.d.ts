/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ToDoCreateFormInputValues = {
    title?: string;
    description?: string;
};
export declare type ToDoCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ToDoCreateFormOverridesProps = {
    ToDoCreateFormGrid?: FormProps<GridProps>;
    title?: FormProps<TextFieldProps>;
    description?: FormProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type ToDoCreateFormProps = React.PropsWithChildren<{
    overrides?: ToDoCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ToDoCreateFormInputValues) => ToDoCreateFormInputValues;
    onSuccess?: (fields: ToDoCreateFormInputValues) => void;
    onError?: (fields: ToDoCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: ToDoCreateFormInputValues) => ToDoCreateFormInputValues;
    onValidate?: ToDoCreateFormValidationValues;
} & React.CSSProperties>;
export default function ToDoCreateForm(props: ToDoCreateFormProps): React.ReactElement;
