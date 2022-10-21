import React, { useState } from 'react';
import { Breadcrumb, Layout, Menu, Space } from 'antd';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

import styles from './style.less';

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: any[],
): any {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items: any[] = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [
    getItem('Team 1', '6'),
    getItem('Team 2', '8'),
  ]),
  getItem('Files', '9', <FileOutlined />),
];

const DefaultLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  const handleChangeCollapse = (value: boolean) => {
    setCollapsed(value);
  };

  return (
    <Layout className={styles['layout']}>
      <Layout.Sider
        theme='dark'
        collapsible
        collapsed={collapsed}
        onCollapse={handleChangeCollapse}
      >
        <div className={styles['logo']}></div>
        <Menu theme='dark' items={items} mode={'inline'}></Menu>
      </Layout.Sider>
      <Layout>
        <Layout.Header className={styles['layout_header']}>
          <Space size='large'>
            <Breadcrumb className={styles['layout_breadcrumb']}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
          </Space>
        </Layout.Header>
        <Layout.Content className={styles['layout_content']}>
          Bill is a cat
        </Layout.Content>
        <Layout.Footer className={styles['layout_footer']}>
          Ant Design ©2018 Created by Ant UED
        </Layout.Footer>
      </Layout>
    </Layout>
  );
};

export default DefaultLayout;
