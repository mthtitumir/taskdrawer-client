// import { createElement } from "react";
import Demo from "../pages/dashboard/Demo";
import { TeamOutlined, FileDoneOutlined } from '@ant-design/icons';

export const userPaths = [
    {
        name: 'My Tasks',
        path: 'dashboard',
        icon: <FileDoneOutlined />,
        element: <Demo />
    },
    {
      name: 'My Teams',
      icon: <TeamOutlined />,
      children: [
        {
            name: 'Academic Semester ',
            path: 'academic-semester',
            icon: <TeamOutlined />,
            element: <Demo />
        }
      ]
    },
    {
        name: 'User Management',
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