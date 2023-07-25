import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { PostStateType, fetchPosts, selectAllPosts } from "../../features/posts/postsSlice";
import { RootStateType } from "../../app/store";
import { Spinner } from "../common/Spinner";
import PostAuthor from "./PostAuthor";
import { TimeAgo } from "../common/TimeAgo";
import { ReactionButtons } from "../common/ReactionButtons";
import { useAppDispatch } from "../../features/posts/postsSlice";


const PostExcerpt = ({post} : {post: PostStateType}) => {
  return(
    <article className="post-excerpt">
        <h3>{post.title}</h3>
        <div>
          <PostAuthor userId={post.user} />
          <TimeAgo timestamp={post.date} />
        </div>
        <p className="post-content">{post.content.substring(0, 100)}</p>

        <ReactionButtons post={post} />
        <Link to={`/posts/${post.id}`} className="button muted-button">
          View Post
        </Link>
    </article>
  )
};
export const PostsList = () => {
  const dispatch = useAppDispatch();
  const posts = useSelector((selectAllPosts));
  const postStatus = useSelector((state: RootStateType) => state.posts.status);
  const error = useSelector((state: RootStateType) => state.posts.error);

  useEffect(() => {
    if(postStatus === 'idle') {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);

  let content;

  if(postStatus === 'loading') {
    content = <Spinner text="Loading..." />
  } else if(postStatus === 'succeeded') {
    // Sort posts in reverse chronological order by dateTime string 
    const orderedPosts = posts.slice().sort((a : PostStateType, b: PostStateType) => b.date.localeCompare(a.date));
    content = orderedPosts.map(post => (
      <PostExcerpt key={post.id} post={post} />
    ))
  } else if (postStatus === 'failed') {
    content = <div>{error}</div>
  }


  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {content}
    </section>
  );
};
