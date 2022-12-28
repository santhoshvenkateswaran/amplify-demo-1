/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import { Button, Flex, TextAreaField, TextField } from "@aws-amplify/ui-react";
export default function FormLayout(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        TitleTextField: {},
        DescTextAreaField: {},
        "Form Fields": {},
        CancelButton: {},
        SaveButton: {},
        "Form Actions": {},
        Card: {},
        FormLayout: {},
      },
      variantValues: { type: "create" },
    },
    {
      overrides: {
        TitleTextField: {},
        DescTextAreaField: {},
        "Form Fields": {},
        CancelButton: {},
        SaveButton: {},
        "Form Actions": {},
        Card: {},
        FormLayout: {},
      },
      variantValues: { type: "update" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="0"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      display="flex"
      {...rest}
      {...getOverrideProps(overrides, "FormLayout")}
    >
      <Flex
        gap="16px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        boxShadow="2px 2px 8px rgba(0, 0, 0, 0.10000000149011612)"
        borderRadius="8px"
        padding="16px 16px 16px 16px"
        backgroundColor="rgba(255,255,255,1)"
        display="flex"
        {...getOverrideProps(overrides, "Card")}
      >
        <Flex
          gap="16px"
          direction="column"
          width="300px"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "Form Fields")}
        >
          <TextField
            label="Title"
            placeholder="Enter Title"
            shrink="0"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TitleTextField")}
          ></TextField>
          <TextAreaField
            label="Description"
            placeholder="Enter Description"
            shrink="0"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "DescTextAreaField")}
          ></TextAreaField>
        </Flex>
        <Flex
          gap="16px"
          direction="row"
          width="300px"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
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
            {...getOverrideProps(overrides, "SaveButton")}
          ></Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
