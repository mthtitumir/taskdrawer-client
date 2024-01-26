// import Test from "../components/Test";
import Demo from "../pages/dashboard/Demo";
import { TeamOutlined, FileDoneOutlined } from '@ant-design/icons';
import MyTasks from "../pages/dashboard/MyTasks";

export const userPaths = [
    {
        name: 'My Tasks',
        path: 'my-tasks',
        icon: <FileDoneOutlined />,
        element: <MyTasks />
    },
    {
      name: 'My Teams',
      icon: <TeamOutlined />,
      children: [
        {
            name: 'Academic Semester ',
            path: 'projects/academic-semester',
            icon: <TeamOutlined />,
            element: <Demo />
        }
      ]
    },
    {
        name: 'Management',
        children: [
            {
                name: 'Create Admin',
                path: 'create-student',
                icon: <TeamOutlined />,
                element: <Demo />,
            },
            {
                name: 'Create Student',
                path: 'create-admin',
                icon: <TeamOutlined />,
                element: <Demo />,
            },
            {
                name: 'Create Faculty',
                path: 'create-faculty',
                icon: <TeamOutlined />,
                element: <Demo />,
            },
        ]
    },
];