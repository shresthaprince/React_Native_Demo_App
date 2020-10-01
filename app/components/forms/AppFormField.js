import React from "react";
import AppTextInput from "../AppTextInput";
import ErrorText from "./ErrorText";
import { useFormikContext } from "formik";

function AppFormField({ name, ...rest }) {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();
  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...rest}
      />
      <ErrorText error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormField;
