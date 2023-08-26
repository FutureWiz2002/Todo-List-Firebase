import React from 'react' 

const style = {
    bg: `h-screen p-4 bg-slate-400`,
    button: 'p-4 bg-white',
    li: 'flex justify-between bg-slate-400 p-4',
    liComplete: 'flex justify-between bg-slate-600 p-4',
    row: 'flex',
    text: 'm-2',
    textComplete: 'line-through',
    button: 'flex items-center'
  }
const Todo = ({todo, toggleComplete, deleteTodo}) => {
    return (
        <li className={todo.completed ? style.liComplete : style.li}>
            <div>
                <input onChange={() => toggleComplete(todo)} type='checkbox' checked={todo.completed ? 'checked' : ''}/>
                <p onClick={() => toggleComplete(todo)}  className={todo.completed ? style.textComplete : style.text}>{todo.text}</p>
            </div>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
    )
    
}

export default Todo;