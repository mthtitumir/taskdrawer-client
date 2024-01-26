import { Flex } from "antd"
import { useGetUserAllTasksQuery } from "../redux/features/task/taskApi";
import { useAppDispatch } from "../redux/hooks";
import { setTasks } from "../redux/features/task/taskSlice";

const Test = () => {
  const dispatch = useAppDispatch();
  const { data, isLoading } = useGetUserAllTasksQuery(undefined);
  const tasks = data?.data;
  console.log(isLoading);
  
  dispatch(setTasks(tasks));
  return (
    <div>
      <h1>My Tasks page</h1>
      <Flex vertical gap="middle">
          <div style={{width: "30%"}}>
            <h1>In Progress</h1>
            <div style={{height: '200px', border: "1px solid black"}}>

            </div>
          </div>
      </Flex>
    </div>
  )
}

export default Test