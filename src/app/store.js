//Primer paso, importar configureStore de @redux/toolkit
import { configureStore } from '@reduxjs/toolkit';
import taskReducer from '../features/tasks/taskSlice';

//Crear la contsante store y exportarla
const store = configureStore({
    reducer: {
        //Recibimos el reducer del slice
        tasks: taskReducer
    }
});

export default store;
