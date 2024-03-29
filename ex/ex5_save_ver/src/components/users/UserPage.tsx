import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { UserListType, UserStateType, selectUserById } from "../../features/users/usersSlice";
import { selectPostsByUser } from "../../features/posts/postsSlice";
import { useParams } from "react-router-dom";
import { RootStateType } from "../../app/store";

const UserPage = () => {
  const param = useParams();

  const user = useSelector((state: UserListType) =>
    selectUserById(state, param.userId)
  ) as UserStateType;

  const postsForUser = useSelector((state:RootStateType) => 
    selectPostsByUser(state, param.userId));

  const postTitles = postsForUser.map(post => (
    <li key={post.id}>
        <Link to={`/posts/${post.id}`}>{post.title}</Link>
    </li>
  ))

  return (
    <section>
        <h2>{user.name}</h2>
        <ul>{postTitles}</ul>
    </section>
  )
};

export default UserPage;
