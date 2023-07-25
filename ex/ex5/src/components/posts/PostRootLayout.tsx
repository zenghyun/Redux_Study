import { Outlet } from "react-router-dom";
import { AddPostForm } from "./AddPostForm";
const PostRootLayout = () => {
  return (
    <>
      <AddPostForm />
        <Outlet />
    </>
  )
}

export default PostRootLayout;