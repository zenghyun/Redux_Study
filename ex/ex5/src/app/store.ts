import { configureStore } from "@reduxjs/toolkit";
import postsReducer, { PostListsType } from "../features/posts/postsSlice";
import usersReducer, { UserListType } from "../features/users/usersSlice";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import notificationReducer, { NotificationListType } from '../features/notifications/notificationsSlice';
import { useDispatch } from "react-redux";

export type RootStateType = {
  posts: PostListsType;
  users: UserListType;
  notifications: NotificationListType;
};
const reducers = combineReducers({
  posts: postsReducer,
  users: usersReducer,
  notifications: notificationReducer,
});

const persistConfig = {
  key: 'root', // localStorage key 
  storage, // localStorage
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }),
});

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>(); 

export default store;