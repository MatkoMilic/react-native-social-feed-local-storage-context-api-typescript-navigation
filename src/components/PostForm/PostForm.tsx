import React from "react";
import { Text, TextInput, View } from "react-native";
import { Button } from "react-native-elements";
import { FormikProps } from "formik";
import { pickImage } from "../../constants";
import { styles } from "./styles";

interface FormikValues {
  postImage: string;
  postDescription: string;
}

const PostForm: React.FC<FormikProps<FormikValues>> = ({
  handleChange,
  errors,
  values,
  handleSubmit,
}) => {
  return (
    <View style={styles.postFormContainer}>
      <Button
        icon={{ name: "add-photo-alternate", color: "white" }}
        title="Pick an image"
        onPress={() => {
          pickImage(handleChange("postImage"));
        }}
      />
      <Text style={styles.inputErrorMessage}>{errors.postImage}</Text>
      <TextInput
        placeholder="Your description please"
        onChangeText={handleChange("postDescription")}
        value={values.postDescription}
      />
      <Text style={styles.inputErrorMessage}>{errors.postDescription}</Text>
      <Button
        buttonStyle={styles.postButton}
        title="Post"
        icon={{
          name: "post-add",
          size: 20,
          color: "white",
        }}
        onPress={handleSubmit}
      />
    </View>
  );
};

export default PostForm;
