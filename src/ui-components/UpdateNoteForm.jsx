/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { ToDo } from "../models";
import {
  getOverrideProps,
  useDataStoreUpdateAction,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { schema } from "../models/schema";
import { useEffect } from "react";
import { Button, Flex, TextAreaField, TextField } from "@aws-amplify/ui-react";
export default function UpdateNoteForm(props) {
  const { toDo, overrides, ...rest } = props;
  const [titleTextFieldValue, setTitleTextFieldValue] =
    useStateMutationAction("");
  const [descTextAreaFieldValue, setDescTextAreaFieldValue] =
    useStateMutationAction("");
  const saveButtonOnClick = useDataStoreUpdateAction({
    fields: { title: titleTextFieldValue, description: descTextAreaFieldValue },
    id: toDo?.id,
    model: ToDo,
    schema: schema,
  });
  useEffect(() => {
    if (
      titleTextFieldValue === "" &&
      toDo !== undefined &&
      toDo?.title !== undefined
    )
      setTitleTextFieldValue(toDo?.title);
  }, [toDo]);
  useEffect(() => {
    if (
      descTextAreaFieldValue === "" &&
      toDo !== undefined &&
      toDo?.description !== undefined
    )
      setDescTextAreaFieldValue(toDo?.description);
  }, [toDo]);
  return (
    <Flex
      gap="16px"
      direction="column"
      width="320px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      border="1px SOLID rgba(222,220,222,1)"
      boxShadow="2px 2px 8px rgba(0, 0, 0, 0.10000000149011612)"
      borderRadius="8px"
      padding="15px 15px 15px 15px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "UpdateNoteForm")}
    >
      <Flex
        gap="16px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Form Fields")}
      >
        <TextField
          label="Title"
          placeholder="Enter Title"
          width="unset"
          shrink="0"
          alignSelf="stretch"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          value={titleTextFieldValue}
          onChange={(event) => {
            setTitleTextFieldValue(event.target.value);
          }}
          {...getOverrideProps(overrides, "TitleTextField")}
        ></TextField>
        <TextAreaField
          label="Description"
          placeholder="Enter Description"
          width="unset"
          shrink="0"
          alignSelf="stretch"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          value={descTextAreaFieldValue}
          onChange={(event) => {
            setDescTextAreaFieldValue(event.target.value);
          }}
          {...getOverrideProps(overrides, "DescTextAreaField")}
        ></TextAreaField>
      </Flex>
      <Flex
        gap="16px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Form Actions")}
      >
        <Button
          shrink="0"
          size="default"
          isDisabled={false}
          variation="default"
          children="Cancel"
          {...getOverrideProps(overrides, "CancelButton")}
        ></Button>
        <Button
          shrink="0"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Save"
          onClick={() => {
            saveButtonOnClick();
          }}
          {...getOverrideProps(overrides, "SaveButton")}
        ></Button>
      </Flex>
    </Flex>
  );
}
