export interface IPost {
  postImage: string;
  postDescription: string;
  uniquePostID: string;
  postCreationDateAndTime: Date;
}

export const initialPost = (): IPost => ({
  postImage: "",
  postDescription: "",
  uniquePostID: "",
  postCreationDateAndTime: new Date(),
});
