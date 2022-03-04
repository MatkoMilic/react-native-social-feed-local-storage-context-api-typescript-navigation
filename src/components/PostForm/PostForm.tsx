import React, { useState } from "react";
import {
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
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
  const [image, setImage] = useState("");
  return (
    <ScrollView
      style={styles.postFormContainer}
      keyboardShouldPersistTaps="always"
    >
      <View>
        {image ? (
          <Image
            source={{ uri: image }}
            resizeMode="cover"
            style={styles.image}
          />
        ) : (
          <TouchableOpacity
            style={styles.imagePlaceholder}
            //icon={{ name: "add-photo-alternate", color: "white" }}
            onPress={() => {
              pickImage(handleChange("postImage"), setImage);
            }}
          >
            <Text>Press to upload new image</Text>
          </TouchableOpacity>
        )}
        <Text style={styles.inputErrorMessage}>{errors.postImage}</Text>
      </View>
      <View>
        <KeyboardAvoidingView behavior={"padding"}>
          <TextInput
            placeholder="Add a description to your post"
            onChangeText={handleChange("postDescription")}
            value={values.postDescription}
            multiline
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
        </KeyboardAvoidingView>
      </View>
    </ScrollView>
  );
};

export default PostForm;
