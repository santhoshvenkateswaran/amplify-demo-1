/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ToDo } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ToDoUpdateFormInputValues = {
    title?: string;
    description?: string;
};
export declare type ToDoUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ToDoUpdateFormOverridesProps = {
    ToDoUpdateFormGrid?: FormProps<GridProps>;
    title?: FormProps<TextFieldProps>;
    description?: FormProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type ToDoUpdateFormProps = React.PropsWithChildren<{
    overrides?: ToDoUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    toDo?: ToDo;
    onSubmit?: (fields: ToDoUpdateFormInputValues) => ToDoUpdateFormInputValues;
    onSuccess?: (fields: ToDoUpdateFormInputValues) => void;
    onError?: (fields: ToDoUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: ToDoUpdateFormInputValues) => ToDoUpdateFormInputValues;
    onValidate?: ToDoUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ToDoUpdateForm(props: ToDoUpdateFormProps): React.ReactElement;
