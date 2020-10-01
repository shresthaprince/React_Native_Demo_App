import React from "react";
import PaddedScreen from "./PaddedScreen";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import { AppForm, AppFormField, AppSubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(1).max(10),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen(props) {
  return (
    <PaddedScreen style={styles.container}>
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          icon="email"
          placeholder="Name"
          autoCorrect={false}
          name="name"
        />
        <AppFormField
          icon="email"
          placeholder="Email"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          textContentType="emailAddress"
          name="email"
        />
        <AppFormField
          icon="lock"
          placeholder="Password"
          autoCapitalize="none"
          secureTextEntry
          textContentType="password"
          name="password"
        />

        <AppSubmitButton title="Register" />
      </AppForm>
    </PaddedScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },

  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
export default RegisterScreen;
