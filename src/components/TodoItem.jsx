import React from "react"
import styled from "styled-components"
import { colors } from "../styles"

// estamos pasando el tachado como props!!!
const DivStyled = styled.div`
  color: ${colors.main};
  text-decoration: ${(props) => props.getTextDeco};
  min-width: 80vw;
  margin-top: none;
  margin-bottom: none;
  margin-left: 20px;
  margin-right: 20px;
  background-color: ${({ backgroundColor }) => backgroundColor || colors.red};
  padding: 20px;
`
const ButtonStyled = styled.button`
  float: right;
  background-color: ${colors.main};
  color: ${colors.font.light};
  border: none;
  border-radius: 5px;
  width: 25px;
  height: 25px;
  font-size: large;
  &:hover {
    background-color: ${colors.secondary};
    color: ${colors.main};
  }
`

const CheckboxStyled = styled.input`
  margin-right: 1rem;
`

const TodoItem = ({ todo, onComplete, onDeleteItem, taskColor }) => {
  const getTextDeco = todo.completed ? "line-through" : "none"

  return (
    <DivStyled getTextDeco={getTextDeco} backgroundColor={taskColor}>
      <label htmlFor="todoTask">
        <CheckboxStyled
          type="checkbox"
          checked={todo.completed}
          onChange={() => onComplete(todo.id)}
        />
        {todo.task}
      </label>
      <ButtonStyled className="add-btn" onClick={() => onDeleteItem(todo.id)}>
        x
      </ButtonStyled>
    </DivStyled>
  )
}

export default TodoItem
