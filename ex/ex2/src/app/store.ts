import { configureStore } from "@reduxjs/toolkit";
import postsReducer from '../features/posts/postsSlice';
import { PostListsType } from "../features/posts/postsSlice";

export type RootStateType = {
    posts: PostListsType;
};

export default configureStore({
    reducer: {
        posts: postsReducer
    }
})