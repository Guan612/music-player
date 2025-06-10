import {createBrowserRouter} from "react-router"
import Layout from "../pages/layout";
import Playlist from "../pages/playlist";
import Author from "../pages/ author";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                path:"/",
                element:<Playlist/>
            },
            {
                path:"/author",
                element:<Author/>
            }
        ]
    }
]);

export default router