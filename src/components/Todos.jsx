import React from 'react'

export const Todos = () => {
    return (
        <>
            <h2>タスク一覧</h2>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">タスク</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">0</th>
                        <td>テスト</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}