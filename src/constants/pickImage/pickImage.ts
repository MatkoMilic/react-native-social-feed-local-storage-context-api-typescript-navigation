import * as ImagePicker from "expo-image-picker";

export const pickImage = async (handleChange: {
  (e: React.ChangeEvent<any>): void;
  <T = string | React.ChangeEvent<any>>(
    field: T
  ): T extends React.ChangeEvent<any>
    ? void
    : (e: string | React.ChangeEvent<any>) => void;
}) => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  //I will for now leave this console.log as its useful
  //for us to see the functionality of this demo app
  console.log(result);

  if (!result.cancelled) {
    handleChange(result.uri);
  }
};
