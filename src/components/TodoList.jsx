import React from 'react'

export const TodoList = ({ dispatch, task }) => {
    const id = task.id
    const handleCheckBox = e => {
        let ischeck = e.target.checked
        console.log(ischeck)
    }
    return (
        <tr>
            <td>{id}</td>
            <td>{task.title}</td>
            <td><input type="checkbox" onChange={handleCheckBox}/></td>
        </tr>
    )

}