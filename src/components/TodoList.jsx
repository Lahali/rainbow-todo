import React, { useState } from "react"
import TodoItem from "./TodoItem"
import { colors } from "../styles"

const TodoList = ({ todos, onComplete, onDeleteItem }) => {
  const [currentColor, setCurrentColor] = useState(0)

  const rainbow = [
    colors.red,
    colors.orange,
    colors.yellow,
    colors.green,
    colors.lightblue,
    colors.blue,
    colors.purple,
  ]

  return (
    <div>
      {todos.map((todo, index) => {
        const taskColor = rainbow[(currentColor + index) % rainbow.length]
        return (
          <TodoItem
            key={`todo-${index}`}
            todo={todo}
            onComplete={onComplete}
            onDeleteItem={onDeleteItem}
            index={index}
            taskColor={taskColor}
          />
        )
      })}
    </div>
  )
}

export default TodoList
