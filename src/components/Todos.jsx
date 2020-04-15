import React from 'react'
import { TodoList } from './TodoList'


export const Todos = ({ state, dispatch }) => {
    return (
        <>
            <h2>タスク一覧</h2>
            <button className="btn btn-danger">削除</button>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">タスク</th>
                        <th scope="col">チェック</th>
                    </tr>
                </thead>
                <tbody>
                    { state.map((task, index) => (<TodoList key={index} task={task} dispatch={dispatch} />))}
                </tbody>
            </table>

        </>
    )
}