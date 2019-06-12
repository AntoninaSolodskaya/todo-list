import React, { useState } from 'react';

function TodoApp() {
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

  const addInnerElem = parentId => {
    const title = prompt("Enter title", "");
    let newList = [...list];

    const findElembyId = (arr, elemId, action) => {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].id === elemId) {
          action(arr[i]);
          console.log("arr[i].id", arr[i].id)
          console.log("elemId", elemId)
          break;
        } 
        if (arr[i].children) {
          findElembyId(arr[i].children, elemId, action);
          console.log(arr[i].children)
        }
      }
    };

    const addElem = parentElem => {

      const newElem = {
        id: Date.now(),
        title
      };

      console.log("newElem", newElem);
      if (!parentElem.children) {
        parentElem.children = [];
      }
      parentElem.children.push(newElem);
      setList(newList);
      setItem("")
    };
      console.log("parentId", parentId)
      console.log("list", list)
      findElembyId(list, parentId, addElem)
  };

  const removeElem = id => {
    let todoList = [...list];

    const findParentElem = (arr, elemId, action) => {
      if (arr.some(item => item.id === elemId)) {
        action(arr);
        console.log("action", arr)
      } else {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i].children) {
            findParentElem(arr[i].children, elemId, action);
          }
        }
      }
    };

    const removeElemById = parentArr => {
      const elem = parentArr.find(item => item.id === id);
      const elemIndex = parentArr.indexOf(elem);

      parentArr.splice(elemIndex, 1);

      setList(todoList);
    };

    findParentElem(todoList, id, removeElemById);
  };

  const parseList = (item, index) => (
    <li key={index}>
      <div className="title-wrap"> 
        {item.title}
        <button 
          type="button"
          className="add"
          onClick={() => addInnerElem(item.id)}
        >
          +
        </button>
        <button 
          type="button"
          className="remove"
          onClick={() => removeElem(item.id)}
        >
          -
        </button>
      </div> 
      {item.children && item.children.length > 0 && (
        <ul>{item.children.map((item, index) => parseList(item, index))}</ul> 
      )}
    </li>
  );

  return (
    <div className="App">
      <header className="App-header">
        <div className="main">
          <form onSubmit={e => addToRoot(e)}>
            <input
              value={rootInput}
              onChange={e => setItem(e.target.value)} 
            />
            <button className="add">+</button>
          </form>
          <div className="list-wrap">
            {list.length > 0 && (
              <ul>{list.map((item, index) => parseList(item, index))}</ul>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default TodoApp;