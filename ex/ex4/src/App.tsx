import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { PostsList } from "./components/posts/PostsList";
import RootLayout from "./components/common/RootLayout";
import HomePage from "./components/HomePage";
import SinglePostPage from "./components/posts/SinglePostPage";
import PostRootLayout from "./components/posts/PostRootLayout";
import EditPostLayout from "./components/posts/EditPostLayout";
import { EditPostForm } from "./components/posts/EditPostForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "posts",
        element: <PostRootLayout />,
        children: [
          {
            index: true,
            element: <PostsList />,
          },
          {
            path: ":postId",
            element: <SinglePostPage />,
          },
        ],
      },
      {
        path:"editPost",
        element: <EditPostLayout />,
        children: [
          {
            path: ":postId",
            element: <EditPostForm />
          }
        ]
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
