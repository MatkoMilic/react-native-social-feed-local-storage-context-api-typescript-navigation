export interface IPostValues {
  postImage: string;
  postDescription: string;
}

export const initialPostValues = (): IPostValues => ({
  postImage: "",
  postDescription: "",
});
