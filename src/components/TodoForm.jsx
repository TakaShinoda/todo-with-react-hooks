import React from 'react'

export const TodoForm = () => {
    return (
        <>
            <form>
                <div className="form-group">
                <label htmlFor="formTask">タスク</label>
                <input className="form-control" id="formTask" placeholder="タスクを入力する" />
                </div>
                <button className="btn btn-primary">追加</button>
               
            </form>
        </>
    )
}