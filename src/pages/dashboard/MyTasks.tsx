import { Col, Row } from "antd"
import { useAppDispatch } from "../../redux/hooks";
import { useGetUserAllTasksQuery } from "../../redux/features/task/taskApi";
import { setTasks } from "../../redux/features/task/taskSlice";

const MyTasks = () => {
    const dispatch = useAppDispatch();
    const { data } = useGetUserAllTasksQuery(undefined);
    const tasks = data?.data;


    dispatch(setTasks(tasks));
    return (
        <div>
            <h1>My Tasks page</h1>
            <Row>
                <Col xs={24} sm={12} md={8} lg={6}>
                    Col1
                </Col>
                <Col xs={24} sm={12} md={8} lg={6}>
                    Col2
                </Col>
                <Col xs={24} sm={12} md={8} lg={6}>
                    Col3
                </Col>
                <Col xs={24} sm={12} md={8} lg={6}>
                    Col4
                </Col>
            </Row>
        </div>
    )
}

export default MyTasks