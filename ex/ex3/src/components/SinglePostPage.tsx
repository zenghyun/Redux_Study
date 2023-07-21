import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import PostAuthor from "./PostAuthor";
import { TimeAgo } from "./TimeAgo";
import { PostListsType, PostStateType } from "../features/posts/postsSlice";
import { ReactionButtons } from "./ReactionButtons";
const SinglePostPage = () => {
  const params = useParams();
  const post = useSelector((state: PostListsType) =>
    state.posts.find((post: PostStateType) => post.id === params.postId)
  );

  if (!post) {
    return (
      <section>
        <h2>Page not found!</h2>
      </section>
    );
  }

  return (
    <section>
      <article className="post">
        <h2>{post.title}</h2>
        <div>
          <PostAuthor userId={post.user} />
          <TimeAgo timestamp={post.date} />
        </div>
        <p className="post-content">{post.content}</p>
        <ReactionButtons post={post} />
        <Link to={`/editPost/${post.id}`} className="button">
          Edit Post
        </Link>
      </article>
    </section>
  );
};

export default SinglePostPage;
