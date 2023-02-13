import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTask, editTask } from '../features/tasks/taskSlice';
import { v4 as uuid } from 'uuid';
import { useNavigate, useParams } from 'react-router-dom';

function TaskForm() {

    const [task, setTask] = useState({ title: '', desciption: '' });

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    const tasks = useSelector(state => state.tasks);

    const handleChange = ev => {
        setTask({
            ...task,
            [ev.target.name]: ev.target.value
        })
    }

    const hanldeSubmit = (ev) => {

        ev.preventDefault();
        //Ejecuto primer dispatch para poder ejecutar la tarea de agregar tarea
        if (params.id) {
            dispatch(editTask(task))
        } else {
            dispatch(addTask({
                ...task,
                id: uuid()
            }))
        }
        navigate('/')
    }

    //Utilizo el useEffect para que cuando se cargue la pagina editar me traiga el parametro id
    useEffect(() => {
        if (params.id) {
            setTask(tasks.find(task => task.id === params.id));
        }
    }, [params,tasks])


    return (
        <form onSubmit={hanldeSubmit} className="bg-zinc-800 max-w-sm p-4">
            <label htmlFor='title' className='block text-sm font-bold mb-2'>Task</label>
            <input type="text" placeholder='title' name='title'
                onChange={handleChange} value={task.title}
                className="w-full p-2 rounded-md bg-zinc-600 mb-2"
            />

            <label htmlFor='description' className='block text-sm font-bold mb-2'>Description</label>
            <textarea name='description' placeholder='description' onChange={handleChange}
                value={task.description}
                className="w-full p-2 rounded-md bg-zinc-600 mb-2"></textarea>

            <button className='bg-indigo-600 px-2 py-1'>Save</button>
        </form>
    )
}

export default TaskForm
