import { configureStore } from "@reduxjs/toolkit";
import postsReducer, { PostListsType } from "../features/posts/postsSlice";
import usersReducer, { UserListType } from "../features/users/usersSlice";

export type RootStateType = {
  posts: PostListsType,
  users: UserListType,
};


export default configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
  },
});
