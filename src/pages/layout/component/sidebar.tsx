import { useState } from 'react';
import { Menu, Tooltip } from 'antd';
import {
  HomeOutlined,
  PlayCircleOutlined,
  HeartOutlined,
  DownOutlined,
  UpOutlined,
  PlusOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons';

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  
  // 响应式断点：移动端小于768px时自动折叠
  const isMobile = window.innerWidth < 768;
  const shouldCollapse = isMobile || collapsed;

  return (
    <div className='flex flex-col'>
        <div className='hidden md:block'>
            sidebar
        </div>
    </div>
  );
}