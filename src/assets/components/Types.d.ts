export type IContent = "bookModelForm" | "LoginForm";
export type IUser = {
  name: string;
  url: string;
};
export type Imodal = { state: boolean; content: "bookModelForm" | "LoginForm" };
