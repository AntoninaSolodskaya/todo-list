import React, { useState } from 'react';

const Form = () => {
  const [list, setList] = useState([]);
  const [rootInput, setItem] = useState("");

  const addToRoot = e => {
    e.preventDefault();

    const newElem = {
      id: Date.now(),
      title: rootInput
    };

    setList([...list, newElem]);
    
    console.log("newElem", newElem)
    console.log("list", list)
  };

  return (
    
    <form onSubmit={e => addToRoot(e)}>
      <input
        value={rootInput}
        onChange={e => setItem(e.target.value)} 
      />
      <button className="add">+</button>
    </form>
          
  );
}

export default Form;