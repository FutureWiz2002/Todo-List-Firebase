import React from 'react';
import { useState, useEffect } from 'react';
import Todo from './todo';
import {db} from './firebase';
import {query, collection, onSnapshot, updateDoc, doc, addDoc, deleteDoc} from 'firebase/firestore';





const style = {
  bg: `h-screen p-4 bg-slate-400`,
  button: 'p-4 bg-white',
  container: 'bg-slate-100 max-w-[500] w-full m-auto p-4 rounded-md',
  heading: 'text-4xl font-bold text-center text=gray-800 p-3',
  form: 'flex justify-around',
  input: 'border p-2 text-xl w-full ',
  button: 'border p-4 ml-2 bg-purple-400 rounded-full text-slate-100'
}


function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  // create 
  const createTodo = async (e) => {
    e.preventDefault(e);
    if (input === "") {
      alert("Please enter your tasks");
      return
    }
    await addDoc(collection(db, 'todos'), {
      text: input,
      completed: false,
    })
    setInput('');
    
  }
  //read 
  useEffect(() => {
    const q = query(collection(db, 'todos'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArr);
    });
    return () => unsubscribe();
  }, []);


  // update
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, 'todos', todo.id), {
      completed: !todo.completed,
    });
  };
  //delete
  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, 'todos', id))
  }


  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.heading}>Your to do list</h3>
        <form onSubmit={createTodo} className={style.form}>
          <input value={input} onChange={(e) => setInput(e.target.value)} className={style.input} type='text' placeholder='Add your tasks'/>
          <button  className={style.button}>+</button>
        </form>
        <ul>
          {todos.map((todo, index) => (
            <Todo 
              key={index} 
              todo = {todo} 
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo} 
            /> 
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App;
