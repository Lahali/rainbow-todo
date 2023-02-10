import React from "react"
import { useState } from "react"
import styled from "styled-components"
import { colors } from "../styles"

const InputStyled = styled.input`
  border-radius: 5px;
  border: solid 2px;
  border-color: ${colors.font.light};
  padding: 0.5rem;
  margin-right: 10px;
  background-color: ${colors.font.light};
  &:focus {
    border: solid 2px;
    border-color: ${colors.font.base};
    outline: none;
  }
`

const ButtonStyled = styled.button`
  border-radius: 5px;
  border: none;
  padding: 0.5rem;
  color: ${colors.font.base};
  background-color: ${colors.secondary};
  &:hover {
    background-color: ${colors.font.base};
    color: ${colors.secondary};
  }
`

const TodoForm = ({ addTodo }) => {
  const [userInput, setUserInput] = useState("")

  const handleOnChange = (e) => {
    setUserInput(e.currentTarget.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (userInput.trim() !== "") {
      addTodo(userInput)
      // esto para que la caja de texto quede vacía de vuelta
      setUserInput("")
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <InputStyled type="text" value={userInput} onChange={handleOnChange} />
        <ButtonStyled>Add to do</ButtonStyled>
      </form>
    </div>
  )
}

export default TodoForm
