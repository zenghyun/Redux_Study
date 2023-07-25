import { configureStore } from "@reduxjs/toolkit";
import postsReducer, { PostListsType } from "../features/posts/postsSlice";
import usersReducer, { UserListType } from "../features/users/usersSlice";
import { combineReducers } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from "redux-persist";

export type RootStateType = {
  posts: PostListsType;
  users: UserListType;
};
const reducers = combineReducers({
  posts: postsReducer,
  users: usersReducer,
});

const persistConfig = {
  key: 'root', // localStorage key 
  storage, // localStorage
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }),
});
