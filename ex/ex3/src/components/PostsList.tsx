import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { PostListsType, PostStateType } from "../features/posts/postsSlice";

export const PostsList = () => {
  const posts = useSelector((state: PostListsType) => state.posts);
  const orderedPosts = posts.slice().sort((a : PostStateType, b: PostStateType) => b.date.localeCompare(a.date));

  const renderedPosts = orderedPosts.map((post : PostStateType) => (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
      <p className="post-content">{post.content.substring(0, 100)}</p>
      <Link to={`/posts/${post.id}`} className="button muted-button">
        View Post
      </Link>
    </article>
  ));

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};
