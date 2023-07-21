import { useSelector } from "react-redux";
import { PostListsType } from "../features/posts/postsSlice";
import { AddPostForm } from "./AddPostForm";


export const PostsList = () => {
  const posts = useSelector((state: PostListsType) => state.posts);
  const renderedPosts = posts.map((post) => (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
      <p className="post-content">{post.content.substring(0, 100)}</p>
    </article>
  ));

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      <AddPostForm />
      {renderedPosts}
    </section>
  );
};
