import React from 'react';
import { Layout, theme } from 'antd';
import DashboardSidebar from './DashboardSidebar';
import { Outlet } from 'react-router-dom';
const { Header, Content } = Layout;

const DashboardLayout: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <DashboardSidebar />
      <Layout>
        <Header style={{ margin: '16px 16px 0', padding: 0, background: colorBgContainer, borderRadius: borderRadiusLG }} />
        <Content style={{ margin: '16px 16px 0' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;