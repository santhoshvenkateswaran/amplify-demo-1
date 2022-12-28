/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ToDo } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type CreateNoteFormProps = React.PropsWithChildren<Partial<FlexProps> & {
    toDo?: ToDo;
} & {
    overrides?: EscapeHatchProps | undefined | null;
}>;
export default function CreateNoteForm(props: CreateNoteFormProps): React.ReactElement;
