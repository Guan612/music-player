import { MenuOutlined } from "@ant-design/icons";

export default function HaderBar() {
  return (
    <div className="flex flex-row m-1 bg-white/30 backdrop-blur-sm rounded-2xl">
      <div className="flex flex-row rounded-2xl">
        <div className="m-2 text-3xl md:hidden">
          <MenuOutlined />
        </div>
        <div className=" flex rounded-xl min-w-60 p-2 items-center font-bold text-xl border-2 border-gray-100/30">
          竟不懂我三分拙劲破天下
        </div>
      </div>
    </div>
  );
}
