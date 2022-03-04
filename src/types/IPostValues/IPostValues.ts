export interface IPostValues {
  postImage: string;
  postDescription: string;
  uniquePostID: string;
}

export const initialPostValues = (): IPostValues => ({
  postImage: "",
  postDescription: "",
  uniquePostID: "",
});
