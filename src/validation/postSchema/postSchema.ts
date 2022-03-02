import * as yup from "yup";

export const postSchema = yup.object().shape({
  postImage: yup.string().label("image"),
  postDescription: yup
    .string()
    .label("description")
    .max(
      200,
      "You have exceeded the maximum number of characters in a post description (200)."
    ),
});
