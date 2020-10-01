import React from "react";
import ErrorText from "./ErrorText";
import { useFormikContext } from "formik";
import AppPicker from "./../AppPicker";

function AppFormPicker({ name, ...rest }) {
  const { setFieldValue, values, errors, touched } = useFormikContext();
  return (
    <>
      <AppPicker
        onBlur={() => setFieldTouched(name)}
        onSelectItem={setFieldValue(name)}
        {...rest}
      />
      <ErrorText error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormPicker;
