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
export declare type EmpGrowthCreateFormInputValues = {
    name?: string;
    data?: number[];
};
export declare type EmpGrowthCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    data?: ValidationFunction<number>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EmpGrowthCreateFormOverridesProps = {
    EmpGrowthCreateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
    data?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EmpGrowthCreateFormProps = React.PropsWithChildren<{
    overrides?: EmpGrowthCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: EmpGrowthCreateFormInputValues) => EmpGrowthCreateFormInputValues;
    onSuccess?: (fields: EmpGrowthCreateFormInputValues) => void;
    onError?: (fields: EmpGrowthCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: EmpGrowthCreateFormInputValues) => EmpGrowthCreateFormInputValues;
    onValidate?: EmpGrowthCreateFormValidationValues;
} & React.CSSProperties>;
export default function EmpGrowthCreateForm(props: EmpGrowthCreateFormProps): React.ReactElement;
