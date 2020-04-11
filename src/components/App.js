import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { TodoForm } from './TodoForm'
import { Todos } from './Todos'

export const App = () => {
  return (
    <>
      <h1>todoアプリ</h1>
      <TodoForm />
      <hr />
      <Todos />
    </>
  )
} 
