import React, { useReducer, useState } from 'react'
import reducer from '../reducers'


export const TodoForm = () => {
    const [state, dispatch] = useReducer(reducer, [])
    const [title, setTitle] = useState('')

    const addTask = e => {
        e.preventDefault()
        dispatch({
            type: 'ADD_TASK',
            title
        })
        setTitle('')
    }


    return (
        <>
            <form>
                <div className="form-group">
                <label htmlFor="formTask">タスク</label>
                <input className="form-control" id="formTask" placeholder="タスクを入力する" value={title} onChange={e => setTitle(e.target.value)} />
                </div>
                <button className="btn btn-primary" onClick={addTask} >追加</button>
               
            </form>
        </>
    )
}