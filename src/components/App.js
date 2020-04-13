import React, { useReducer } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import reducer from '../reducers'
import { TodoForm } from './TodoForm'
import { Todos } from './Todos'

export const App = () => {
  const [state, dispatch] = useReducer(reducer, [])
  
  return (
    <div className="container-fluid">
      <h1>todoアプリ</h1>
      <TodoForm state={state} dispatch={dispatch} />
      <hr />
      <Todos state={state} dispatch={dispatch} />
    </div>
  )
} 
