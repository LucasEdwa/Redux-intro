import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Task {
    id: string;
    title: string;
    completed: boolean;
}

interface TaskState {
    tasks: Task[];
}

const initialState: TaskState = {
    tasks: [],
}

const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<{ title: string }>) => {
            const newTask: Task = {
                id: Math.random().toString(36).substr(2, 9),
                title: action.payload.title,
                completed: false
            };
            state.tasks.push(newTask);
        },
        removeTask: (state, action: PayloadAction<string>) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload);
        },
        toggleTask: (state, action: PayloadAction<string>) => {
            const task = state.tasks.find((task) => task.id === action.payload);
            if (task) {
                task.completed = !task.completed;
            }
        },
        editTask: (state, action: PayloadAction<Task>) => {
            const task = state.tasks.find((task) => task.id === action.payload.id);
            if (task) {
                task.title = action.payload.title;
            }
        }
    },
});

export const { addTask, removeTask, toggleTask, editTask } = taskSlice.actions;
export default taskSlice.reducer;   