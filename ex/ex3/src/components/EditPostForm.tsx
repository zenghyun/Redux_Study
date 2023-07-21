import { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { PostListsType, PostStateType, postUpdated } from "../features/posts/postsSlice";

export const EditPostForm = () => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const post = useSelector((state: PostListsType) =>
    state.posts.find((post: PostStateType) => post.id === params.postId)
  ) as PostStateType;

  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  const onTitleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);
  const onContentChanged = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setContent(e.target.value);

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postUpdated({ id: params.postId, title, content }));
      navigate(`/posts/${params.postId}`);
    }
  };

  return (
    <section>
      <h2>Edit Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          placeholder="What's on your mind?"
          value={title}
          onChange={onTitleChange}
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent "
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
      </form>
      <button type="button" className="button saveButton" onClick={onSavePostClicked}>
        Save Post
      </button>
    </section>
  );
};
