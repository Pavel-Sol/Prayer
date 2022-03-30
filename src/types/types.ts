import {
  loginUserAction,
  registerUserAction,
  createColumnAction,
  createPrayerAction,
  deletePrayerAction,
  updatePrayerAction,
  createCommentAction,
  updateCommentAction,
  deleteCommentAction,
} from './../store/actions';

export type UserType = {
  email: string;
  name: string;
  token: string;
  id: number;
};

export type UserProps = {
  email: string;
  name?: string;
  password: string;
};

export type ColumnType = {
  id: number;
  title: string;
  description?: string;
  userId: number;
};
export type CreateColumnType = {
  title: string;
  description: string;
};

export type PrayerType = {
  id: number;
  title: string;
  description: string;
  checked: boolean;
  columnId: number;
  commentsIds: CommentType[];
};

export type CreatePrayerType = {
  columnId: number;
  title: string;
  description: string;
  checked: boolean;
};
export type UpdatePrayerType = {
  id: number;
  title: string;
  description: string;
  checked: boolean;
};

export type CommentType = {
  id: number;
  body: string;
  created: string;
  prayerId: number;
  userId: number;
};

export type CreateCommentType = {
  body: string;
  prayerId: number;
};
export type UpdateCommentType = {
  body: string;
  id: number;
};

export type AuthSignUpResponse = {
  email: string;
  name: string;
  password: string;
  token: string;
  columns: ColumnType[];
  id: number;
  message?: string;
};

export type AuthSignInResponse = {
  id: number;
  email: string;
  name: string;
  token: string;
  message?: string;
};

export type LoginUserActionType = ReturnType<typeof loginUserAction>;
export type RegisterUserActionType = ReturnType<typeof registerUserAction>;
export type CreateColumnActionType = ReturnType<typeof createColumnAction>;
export type CreatePrayerActionType = ReturnType<typeof createPrayerAction>;
export type DeletePrayerActionType = ReturnType<typeof deletePrayerAction>;
export type UpdatePrayerActionType = ReturnType<typeof updatePrayerAction>;
export type CreateCommentActionType = ReturnType<typeof createCommentAction>;
export type UpdateCommentActionType = ReturnType<typeof updateCommentAction>;
export type DeleteCommentActionType = ReturnType<typeof deleteCommentAction>;
