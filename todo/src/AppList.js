import React from 'react';
import List from './List';

class AppList extends React.Component {

  state = {
    list: [],
    rootInput: ""
  };

  setRootInput = e => {
    this.setState({ rootInput: e.target.value });
  };

  addToRoot = e => {
    e.preventDefault();
    const newElem = {
      id: Date.now(),
      title: this.state.rootInput
    };

    this.setState({
      list: [...this.state.list, newElem],
      rootInput: ""
    });
  };

  addChildRoot = () => {
    return ( <List addChildRoot={this.addInnerElem}/>)
  }

  addInnerElem = parentId => {
    const title = <input 
      value={this.state.rootInput}
      onChange={(e) => this.setRootInput(e)} 
    />
    let list = [...this.state.list];

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
    }

    const addElem = parentElem => {

      const newElem = {
        id: Date.now(),
        title: this.state.rootInput
      };

      console.log("newElem", newElem);

      if (!parentElem.children) {
        parentElem.children = [];
      }
      parentElem.children.push(newElem);
      this.setState({ list })
    };

    console.log("parentId", parentId)
    console.log("list", this.state.list)
    findElembyId(list, parentId, addElem)
  }

  render () {

    let items = this.state.list.map((item, index) => {
      return (
        <li key={index}>
          <div className="title-wrap">
            {item.title}
            <button onClick={() => console.log(item.title)}>&#8593;</button>
            <button onClick={() => console.log(item.title)}>&darr;</button>
            <input 
              value={this.state.rootInput}
              onChange={(e) => this.setRootInput(e)} 
            />
            <button onClick={() => this.addInnerElem(item.id)}>Add SubInput</button>
            <button>Remove SubInput</button>
          </div>
        </li>
      )
    })

    return (
      <div className="App">
        <ul>
          <li>Text</li>
          <input />
          <button>&darr;</button>
          <button>Add SubInput</button>
          <button>Remove SubInput</button>
            <div style={{ marginLeft: '20px' }}>
              <li>Second Text</li>
              <input />
              <button>&#8593;</button>
              <button>&darr;</button>
              <button>Add SubInput</button>
              <button>Remove SubInput</button>
            </div>
            <div  style={{ marginLeft: '20px' }}>
              <li>Third Text</li>
              <input />
              <button>&#8593;</button>
              <button>&darr;</button>
              <button>Add SubInput</button>
              <button>Remove SubInput</button>
                <div  style={{ marginLeft: '40px' }}>
                  <li>Third Text</li>
                  <input />
                  <button>&#8593;</button>
                  <button>Add SubInput</button>
                  <button>Remove SubInput</button>
                </div>
            </div>
        </ul>
        <div style={{ marginLeft: '20px' }}>
          <form onSubmit={e => this.addToRoot(e)}>
            <input 
              value={this.state.rootInput}
              onChange={(e) => this.setRootInput(e)} 
            />
            <button>Add</button>
            <ul>{items}</ul>
          </form>  
        </div> 
      </div>
    );
  }  
};

export default AppList;
