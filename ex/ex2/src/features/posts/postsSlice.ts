import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: 1, title: 'First Post!', content: 'Hello!'},
    {id: 2, title: 'Second Post', content: 'More text'}
];

export type PostStateType = {
    id: number;
    title: string;
    content: string;
};

export type PostListsType = {
    posts: Array<PostStateType>
}
 
const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: { 
        postAdded(state, action) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            state.push(action.payload)
        }
    }
});

export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;

 