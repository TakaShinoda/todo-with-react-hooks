import React, { useState } from 'react'
//import { TodoList } from './TodoList'


export const Todos = ({ state, dispatch }) => {
    const [check, setCheck] = useState(false)
    console.log(check)

    const deleteTask = e => {
        e.preventDefault()
        const result = window.confirm('削除していいですか？')
        if(result){
            dispatch({
                type: 'DELETE_TASK',
                check
            })
        }
        setCheck(false)
    }

    const deleteAllTasks = e => {
        e.preventDefault()
        const reset_result = window.confirm('タスクを全て削除していいですか？')
        if(reset_result) dispatch({type: 'DELETE_ALL_TASKS'})
    }

    return (
        <>
            <h2>タスク一覧</h2>
            {/*<button className="btn btn-danger" onClick={deleteTask}>削除</button>*/}
            <button className="btn btn-danger" onClick={deleteAllTasks}>全て削除</button>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">タスク</th>
                        <th scope="col">チェック</th>
                    </tr>
                </thead>
                <tbody>
                    { state.map((task, index) => (
                            <tr key={index}>
                                <td>{task.id}</td>
                                <td>{task.title}</td>
                                <td><input type="checkbox" onChange={e => setCheck(e.target.checked)}/></td>
                            </tr>
                    ))}
                </tbody>
            </table>

        </>
    )
}