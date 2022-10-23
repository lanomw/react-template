import React from 'react';
import {
  ApartmentOutlined,
  BarChartOutlined,
  CloudServerOutlined,
  ContainerOutlined,
  DesktopOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons';

import type { ItemType } from 'antd/es/menu/hooks/useItems';

const items: ItemType[] = [
  {
    label: '数据统计',
    key: '/',
    icon: <BarChartOutlined />,
  },
  {
    label: '权限管理',
    key: 'permission',
    icon: <ApartmentOutlined />,
  },
  {
    label: '用户管理',
    key: 'user',
    icon: <UserOutlined />,
    children: [
      {
        label: '列表',
        key: '/user/list',
      },
      {
        label: '详情',
        key: '/user/detail',
      },
    ],
  },
  {
    label: '运营中心',
    key: 'operation',
    icon: <DesktopOutlined />,
  },
  {
    label: '社区圈子',
    key: 'community',
    icon: <ContainerOutlined />,
    children: [
      {
        label: '社区管理',
        key: '/community',
      },
      {
        label: '圈子管理',
        key: '/topic',
      },
      {
        label: '帖子管理',
        key: '/article',
      },
      {
        label: '评论管理',
        key: '/comment',
      },
    ],
  },
  {
    label: '文件存储',
    key: 'storage',
    icon: <CloudServerOutlined />,
  },
  {
    label: '系统信息',
    key: 'setting',
    icon: <SettingOutlined />,
  },
];

export default items;
