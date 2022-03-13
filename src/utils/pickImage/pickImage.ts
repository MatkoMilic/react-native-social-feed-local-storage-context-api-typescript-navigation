import * as ImagePicker from "expo-image-picker";

export const pickImage = async (): Promise<string> => {
  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });
  if (result.cancelled) {
    throw new Error("Image picking canceled");
  }
  return result.uri;
};
