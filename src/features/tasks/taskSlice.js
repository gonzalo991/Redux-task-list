//Tercer paso creo la carpeta features, la carpeta del reducer
//y el archivo del reducer

//Tercer paso importamos desde createSlice de redux toolkit
import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: "1",
        title: "task 1",
        description: "Task 1 description",
        completed: false
    },
    {
        id: "2",
        title: "task 2",
        description: "Task 2 description",
        completed: false
    }
]

//Configuramos el slice
export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload);
        },

        editTask: (state, action) => {
            const { id, title, description } = action.payload

            const foundTask = state.find(task => task.id === id)
            if (foundTask) {
                foundTask.title = title
                foundTask.description = description
            }
        },

        deleteTask: (state, action) => {
            const taskFound = state.find(task => task.id === action.payload)
            if (taskFound) {
                state.splice(state.indexOf(taskFound), 1);
            }
        }
    }
});

//Exportamos las funciones del reducer
export const { addTask, editTask, deleteTask } = taskSlice.actions;

//Exportamos el metodo reducer del slice
export default taskSlice.reducer;