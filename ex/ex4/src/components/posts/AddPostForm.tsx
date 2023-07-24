import { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserListType, UserStateType } from "../../features/users/usersSlice";
// import { addNewPost, InitialPostType } from "../../features/posts/postsSlice";
import { postAdded } from "../../features/posts/postsSlice";
import { AppDispatch } from "./PostsList";

export const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  // const [addRequestStatus, setAddRequestStatus] = useState('idle');

  const dispatch = useDispatch<AppDispatch>();
  
  const users = useSelector((state: UserListType) => state.users);

  const onTitleChanged = (e: ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);
  const onContentChanged = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setContent(e.target.value);
  const onAuthorChanged = (e: ChangeEvent<HTMLSelectElement>) => setUserId(e.target.value);

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postAdded(title, content, userId));
    }
    setTitle("");
    setContent("");
  };
  const canSave = [title, content, userId].every(Boolean);


  // 실제 Backend API에 data 추가 가능할 시 logic 

  // const canSave =
  //   [title, content, userId].every(Boolean) && addRequestStatus === 'idle'

  // const initialPost = { title, content, user: userId} as InitialPostType;
  
  // const onSavePostClicked = async () => {
  //   if (canSave) {
  //     try {
  //       setAddRequestStatus('pending')
  //       await dispatch(addNewPost(initialPost)).unwrap()
  //       setTitle('')
  //       setContent('')
  //       setUserId('')
  //     } catch (err) {
  //       console.error('Failed to save the post: ', err)
  //     } finally {
  //       setAddRequestStatus('idle')
  //     }
  //   }
  // }

  const usersOptions = users.map((user : UserStateType) => (
    <option key={user.id} value={user.id}>
        {user.name}
    </option>
  ));

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
           <label htmlFor="postAuthor">Author:</label>
           <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
            <option value=""></option>
            {usersOptions}
           </select>
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button
          type="button"
          className="button saveButton"
          onClick={onSavePostClicked}
          disabled={!canSave}
        >
          Save Post
        </button>
      </form>
    </section>
  );
};
