export interface IPost {
  postImage: string;
  postDescription: string;
  uniquePostID: string;
  dateAndTime: string;
}

export const initialPost = (): IPost => ({
  postImage: "",
  postDescription: "",
  uniquePostID: "",
  dateAndTime: "",
});
