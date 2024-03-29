import { useSelector } from "react-redux";
import { UserListType, UserStateType } from "../../features/users/usersSlice";
import { selectUserById } from "../../features/users/usersSlice";

export const PostAuthor = ({ userId }: { userId: string }) => {
  const author = useSelector((state: UserListType) =>
  selectUserById(state, userId)
) as UserStateType;

  return <span>by {author ? author.name : "Unknown author"}</span>;
};

export default PostAuthor;
