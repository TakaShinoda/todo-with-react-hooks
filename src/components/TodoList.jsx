import React from 'react'

export const TodoList = ({ dispatch, task }) => {
    const id = task.id
    return (
        <tr>
            <td>{id}</td>
            <td>{task.title}</td>
        </tr>
    )

}