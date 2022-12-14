/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Person } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function PersonUpdateForm(props) {
  const {
    id,
    person,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: undefined,
    date_of_birth: undefined,
    date_of_joining: undefined,
    email: undefined,
    location: undefined,
    mobile: undefined,
  };
  const [name, setName] = React.useState(initialValues.name);
  const [date_of_birth, setDate_of_birth] = React.useState(
    initialValues.date_of_birth
  );
  const [date_of_joining, setDate_of_joining] = React.useState(
    initialValues.date_of_joining
  );
  const [email, setEmail] = React.useState(initialValues.email);
  const [location, setLocation] = React.useState(initialValues.location);
  const [mobile, setMobile] = React.useState(initialValues.mobile);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = { ...initialValues, ...personRecord };
    setName(cleanValues.name);
    setDate_of_birth(cleanValues.date_of_birth);
    setDate_of_joining(cleanValues.date_of_joining);
    setEmail(cleanValues.email);
    setLocation(cleanValues.location);
    setMobile(cleanValues.mobile);
    setErrors({});
  };
  const [personRecord, setPersonRecord] = React.useState(person);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id ? await DataStore.query(Person, id) : person;
      setPersonRecord(record);
    };
    queryData();
  }, [id, person]);
  React.useEffect(resetStateValues, [personRecord]);
  const validations = {
    name: [{ type: "Required" }],
    date_of_birth: [],
    date_of_joining: [],
    email: [{ type: "Required" }, { type: "Email" }],
    location: [{ type: "Required" }],
    mobile: [{ type: "Phone" }],
  };
  const runValidationTasks = async (fieldName, value) => {
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          date_of_birth,
          date_of_joining,
          email,
          location,
          mobile,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          await DataStore.save(
            Person.copyOf(personRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...rest}
      {...getOverrideProps(overrides, "PersonUpdateForm")}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        defaultValue={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              date_of_birth,
              date_of_joining,
              email,
              location,
              mobile,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Date of birth"
        isRequired={false}
        isReadOnly={false}
        type="date"
        defaultValue={date_of_birth}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              date_of_birth: value,
              date_of_joining,
              email,
              location,
              mobile,
            };
            const result = onChange(modelFields);
            value = result?.date_of_birth ?? value;
          }
          if (errors.date_of_birth?.hasError) {
            runValidationTasks("date_of_birth", value);
          }
          setDate_of_birth(value);
        }}
        onBlur={() => runValidationTasks("date_of_birth", date_of_birth)}
        errorMessage={errors.date_of_birth?.errorMessage}
        hasError={errors.date_of_birth?.hasError}
        {...getOverrideProps(overrides, "date_of_birth")}
      ></TextField>
      <TextField
        label="Date of joining"
        isRequired={false}
        isReadOnly={false}
        type="date"
        defaultValue={date_of_joining}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              date_of_birth,
              date_of_joining: value,
              email,
              location,
              mobile,
            };
            const result = onChange(modelFields);
            value = result?.date_of_joining ?? value;
          }
          if (errors.date_of_joining?.hasError) {
            runValidationTasks("date_of_joining", value);
          }
          setDate_of_joining(value);
        }}
        onBlur={() => runValidationTasks("date_of_joining", date_of_joining)}
        errorMessage={errors.date_of_joining?.errorMessage}
        hasError={errors.date_of_joining?.hasError}
        {...getOverrideProps(overrides, "date_of_joining")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={true}
        isReadOnly={false}
        defaultValue={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              date_of_birth,
              date_of_joining,
              email: value,
              location,
              mobile,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Location"
        isRequired={true}
        isReadOnly={false}
        defaultValue={location}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              date_of_birth,
              date_of_joining,
              email,
              location: value,
              mobile,
            };
            const result = onChange(modelFields);
            value = result?.location ?? value;
          }
          if (errors.location?.hasError) {
            runValidationTasks("location", value);
          }
          setLocation(value);
        }}
        onBlur={() => runValidationTasks("location", location)}
        errorMessage={errors.location?.errorMessage}
        hasError={errors.location?.hasError}
        {...getOverrideProps(overrides, "location")}
      ></TextField>
      <TextField
        label="Mobile"
        isRequired={false}
        isReadOnly={false}
        type="tel"
        defaultValue={mobile}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              date_of_birth,
              date_of_joining,
              email,
              location,
              mobile: value,
            };
            const result = onChange(modelFields);
            value = result?.mobile ?? value;
          }
          if (errors.mobile?.hasError) {
            runValidationTasks("mobile", value);
          }
          setMobile(value);
        }}
        onBlur={() => runValidationTasks("mobile", mobile)}
        errorMessage={errors.mobile?.errorMessage}
        hasError={errors.mobile?.hasError}
        {...getOverrideProps(overrides, "mobile")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
