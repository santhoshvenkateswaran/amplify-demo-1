/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text } from "@aws-amplify/ui-react";
export default function Header(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="32px"
      direction="row"
      width="1440px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      border="1px SOLID rgba(222,220,222,1)"
      boxShadow="0px 2px 16px rgba(0, 0, 0, 0.10000000149011612)"
      padding="23px 31px 23px 31px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "Header")}
    >
      <Flex
        gap="4px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Logo")}
      >
        <Icon
          width="16px"
          height="18px"
          viewBox={{ minX: 0, minY: 0, width: 16, height: 18 }}
          paths={[
            {
              d: "M0 5C0 3.89543 0.895431 3 2 3L14 3C15.1046 3 16 3.89543 16 5L16 16C16 17.1046 15.1046 18 14 18L2 18C0.895431 18 0 17.1046 0 16L0 5Z",
              fill: "rgba(255,255,255,1)",
              fillRule: "nonzero",
            },
            {
              d: "M2 1C2 0.447715 2.44772 0 3 0C3.55228 0 4 0.447715 4 1L4 3L2 3L2 1Z",
              fill: "rgba(255,255,255,1)",
              fillRule: "nonzero",
            },
            {
              d: "M7 1C7 0.447715 7.44772 0 8 0C8.55228 0 9 0.447715 9 1L9 3L7 3L7 1Z",
              fill: "rgba(255,255,255,1)",
              fillRule: "nonzero",
            },
            {
              d: "M12 1C12 0.447715 12.4477 0 13 0C13.5523 0 14 0.447715 14 1L14 3L12 3L12 1Z",
              fill: "rgba(255,255,255,1)",
              fillRule: "nonzero",
            },
            {
              d: "M2 8C2 7.44772 2.44772 7 3 7L8 7C8.55228 7 9 7.44772 9 8C9 8.55228 8.55228 9 8 9L3 9C2.44772 9 2 8.55228 2 8Z",
              fill: "rgba(255,255,255,1)",
              fillRule: "nonzero",
            },
            {
              d: "M2 11C2 10.4477 2.44772 10 3 10L13 10C13.5523 10 14 10.4477 14 11C14 11.5523 13.5523 12 13 12L3 12C2.44772 12 2 11.5523 2 11Z",
              fill: "rgba(255,255,255,1)",
              fillRule: "nonzero",
            },
            {
              d: "M2 14C2 13.4477 2.44772 13 3 13L13 13C13.5523 13 14 13.4477 14 14C14 14.5523 13.5523 15 13 15L3 15C2.44772 15 2 14.5523 2 14Z",
              fill: "rgba(255,255,255,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "NoteIcon")}
        ></Icon>
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="600"
          color="rgba(0,0,0,1)"
          textTransform="capitalize"
          lineHeight="24.204544067382812px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Easy Notes"
          {...getOverrideProps(overrides, "Easy Notes")}
        ></Text>
      </Flex>
      <Flex
        gap="24px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "MenuItems")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.01px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Home"
          {...getOverrideProps(overrides, "Home")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.01px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Dashboard"
          {...getOverrideProps(overrides, "Dashboard")}
        ></Text>
      </Flex>
    </Flex>
  );
}
