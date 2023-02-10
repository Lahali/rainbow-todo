import "./App.css"
import { useState } from "react"
import styled, { createGlobalStyle } from "styled-components"
import { colors } from "./styles"
import data from "./components/data.json"
import TodoList from "./components/TodoList"
import TodoForm from "./components/TodoForm"

const ContainerStyled = styled.div`
  /* display: grid;
  grid-template-columns: 1fr; */
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  width: auto;
  height: 100vh;
  background-color: ${colors.main};
  padding: 10px;
`

const App = () => {
  const GlobalStyle = createGlobalStyle`
    body {
      font-family: 'Roboto', sans-serif;
      margin: 0px;
    }
  `
  const [todos, setTodos] = useState(data)

  const onComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === Number(id)
          ? // lo ponemos así para que el estado sea siempre el opuesto, así se marca y desmarca, sino, no cambia
            { ...todo, completed: !todo.completed }
          : { ...todo }
      })
    )
  }

  const addTodo = (newTodo) => {
    let newItem = { id: +new Date(), task: newTodo, completed: false }

    setTodos([...todos, newItem])
  }

  const onDeleteItem = (id) => {
    setTodos([...todos].filter((todo) => todo.id !== id))
  }
  console.log(todos)

  return (
    <ContainerStyled>
      <GlobalStyle />
      <h1>Tasks!</h1>
      <div>
        <TodoForm addTodo={addTodo} />
      </div>
      <div style={{ margin: "2rem" }}>
        <TodoList
          todos={todos}
          onComplete={onComplete}
          onDeleteItem={onDeleteItem}
        />
      </div>
    </ContainerStyled>
  )
}

export default App
