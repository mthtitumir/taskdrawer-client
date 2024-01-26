import { createSlice } from "@reduxjs/toolkit";
// import { RootState } from "../../store";

export type TTask = {
    taskId?: string;
    title: string;
    description?: string;
    dueDate: Date;
    status: 'in-progress' | 'cancelled' | 'completed';
    type: 'personal' | 'team';
    priority: 'low' | 'medium' | 'high';
    assignee: string;
    project?: string;
};
type TTaskState = {
    tasks: null | TTask[];
}
const initialState: TTaskState = {
    tasks: [],
}
const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        setTasks: (state, action) => {
            // console.log(action.payload);
            const tasks = action.payload;            
            state.tasks = tasks;
        }
    }
});

export const {setTasks} = taskSlice.actions;
export default taskSlice.reducer;
// export const useTasks = (state: RootState) => state.