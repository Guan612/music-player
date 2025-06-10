import { createBrowserRouter } from "react-router";
import Layout from "../pages/layout";
import Playlist from "../pages/playlist";
import Author from "../pages/ author";
import Lyrics from "../pages/ lyrics";
import Album from "../pages/album";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Playlist />,
      },
      {
        path: "/author",
        element: <Author />,
      },
      {
        path: "/album",
        element: <Album />,
      },
    ],
  },
  {
    path: "/lyrics",
    element: <Lyrics />,
  },
]);

export default router;
