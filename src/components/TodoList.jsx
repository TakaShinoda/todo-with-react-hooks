import React, { useState } from 'react'

export const TodoList = ({ dispatch, task }) => {
    const id = task.id
    const [check, setCheck] = useState(false)
    console.log(check)

    return (
        <tr>
            <td>{id}</td>
            <td>{task.title}</td>
            <td><input type="checkbox" onChange={e => setCheck(e.target.checked)}/></td>
        </tr>
    )

}