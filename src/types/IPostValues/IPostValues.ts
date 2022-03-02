export interface IPostValues {
  postImage: string;
  postDescription: string;
}

export const initialUserLoginValues = (): IPostValues => ({
  postImage: "",
  postDescription: "",
});
