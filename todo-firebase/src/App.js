import React from 'react';
import { useState } from 'react';

const style = {
  bg: `h-screen p-4 bg-slate-400`,
}


function App() {
  const [text, setText] = useState("");

  const handleInputChange = (event) => {
    setText("lol");
  };

  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.heading}>Your to do list</h3>
        <form>
          <input className="bg-white" type='text' placeholder='Add your tasks' onClick={handleInputChange}/>
        </form>
      </div>
    </div>
  )
}

export default App;
