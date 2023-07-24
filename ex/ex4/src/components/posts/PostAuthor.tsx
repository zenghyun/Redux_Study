import { useSelector } from "react-redux";
import { UserListType } from "../../features/users/usersSlice";

export const PostAuthor = ({ userId }: { userId: string }) => {
  const author = useSelector((state: UserListType) =>
    state.users.find((user) => user.id === userId)
  );

  return <span>by {author ? author.name : "Unknown author"}</span>;
};

export default PostAuthor;
