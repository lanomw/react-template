import React, { useEffect, useMemo, useState } from 'react';
import { Breadcrumb, Layout, Menu, Space } from 'antd';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import items from './menuItems';

import type { ItemType } from 'antd/es/menu/hooks/useItems';

import styles from './style.less';

function getOpenMenu(pathname: string): string[] {
  const openMenuList: string[] = [];

  function recursive(list: ItemType[]): boolean {
    for (let i = 0; i < list.length; i++) {
      if (list[i]?.key === pathname) {
        return true;
      }

      // @ts-ignore
      if (list[i]?.children?.length && recursive(list[i]?.children)) {
        openMenuList.push(list[i]?.key as string);
        return true;
      }
    }

    return false;
  }

  recursive(items);

  return openMenuList;
}

const DefaultLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState<string[]>([]);
  const [openMenuGroup, setOpenMenuGroup] = useState<string[]>([]);

  const rootMenuKeys = useMemo(() => {
    return items.map((item: ItemType) => item?.key);
  }, []);

  const navigate = useNavigate();
  const location = useLocation();

  const handleChangeCollapse = (value: boolean) => {
    setCollapsed(value);
  };

  const handleSelectMenu = ({ key }: { key: string }) => {
    setSelectedMenuItem([key]);
    navigate(key);
  };

  const handleOpenChange = (keys: string[]) => {
    const latestOpenKey = keys.find(key => openMenuGroup.indexOf(key) === -1);

    if (rootMenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenMenuGroup(keys);
    } else {
      setOpenMenuGroup(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  useEffect(() => {
    const pathname = location.pathname;

    setSelectedMenuItem([pathname]);
    setOpenMenuGroup(getOpenMenu(pathname));
  }, []);

  return (
    <Layout className={styles['layout']}>
      <Layout.Sider
        theme='dark'
        collapsible
        collapsed={collapsed}
        onCollapse={handleChangeCollapse}
      >
        <div className={styles['logo']}></div>
        <Menu
          theme='dark'
          items={items}
          mode={'inline'}
          openKeys={openMenuGroup}
          onOpenChange={handleOpenChange}
          selectedKeys={selectedMenuItem}
          onSelect={handleSelectMenu}
        ></Menu>
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
          <Outlet />
        </Layout.Content>
        <Layout.Footer className={styles['layout_footer']}>
          Ant Design ©2018 Created by Ant UED
        </Layout.Footer>
      </Layout>
    </Layout>
  );
};

export default DefaultLayout;
