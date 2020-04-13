import React, { useReducer } from 'react'
import { TodoList } from './TodoList'
import reducer from '../reducers'

export const Todos = () => {
    const [state, dispatch] = useReducer(reducer, [])
    return (
        <>
            <h2>タスク一覧</h2>

        </>
    )
}