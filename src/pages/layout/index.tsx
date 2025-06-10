import { Outlet } from "react-router";
import Sidebar from "./component/sidebar";
import HaderBar from "./component/haderbar";
import MusicPlayBar from "./component/musicplaybar";

export default function Layout() {
  return (
    <div className="flex flex-row bg-blue-500">
      <Sidebar/>
      <div className="flex flex-col">
        <HaderBar />
        <Outlet />
        <MusicPlayBar/>
      </div>
    </div>
  );
}
