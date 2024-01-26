import { sidebarItemsGenerator } from '../../utils/sidebarItemsGenerator';
import { userPaths } from '../../routes/user.route';
import { Layout, Menu } from 'antd';
const { Sider } = Layout;

const DashboardSidebar = () => {
    const sidebarItems = sidebarItemsGenerator(userPaths);
  return (
    <Sider
        breakpoint="lg"
        collapsible
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div><h4 style={{color: "white", textAlign: "center"}}>TaskDrawer</h4></div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} items={sidebarItems} />
      </Sider>
  )
}

export default DashboardSidebar