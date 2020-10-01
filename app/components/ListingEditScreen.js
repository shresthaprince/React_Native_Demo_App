import React from "react";
import PaddedScreen from "./PaddedScreen";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import {
  AppForm,
  AppFormField,
  AppSubmitButton,
  AppFormPicker,
} from "../components/forms";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1),
  price: Yup.number().min(1).max(10000),
  description: Yup.string(),
});

function ListingEditScreen(props) {
  return (
    <PaddedScreen style={styles.container}>
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField placeholder="Title" name="title" />
        <AppFormField placeholder="Price" name="price" />
        {/* <AppFormPicker placeholder="Category" /> */}
        <AppFormField
          icon="email"
          placeholder="Description"
          name="description"
        />

        <AppSubmitButton title="Post" />
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
export default ListingEditScreen;
