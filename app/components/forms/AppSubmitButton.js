import React from "react";
import AppButton from "../AppButton";
import { useFormikContext } from "formik";

function AppSubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();
  return <AppButton text={title} onPress={handleSubmit} />;
}

export default AppSubmitButton;
