import React from 'react';

class App extends React.Component {

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

    console.log("newElem", newElem)
    console.log("list", this.state.list)
  };

  parseList = item => (
    <li key={item.id}>
      <div className="title-wrap">
         {item.title}
        <button 
          type="button"
          className="add"
        >
          +
        </button>
        <button 
          type="button"
          className="remove"
        >
          -
        </button>
      </div>
      {item.children && item.children.length > 0 && (
        <ul>{item.children.map(this.parseList)}</ul>
      )}
    </li>
  );

  render () {

    const { rootInput } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <div className="main">
            <form onSubmit={e => this.addToRoot(e)}>
              <input
                value={rootInput}
                onChange={e => this.setRootInput(e)}
              />
              <button className="add">+</button>
            </form>
            <div className="list-wrap">
              {this.state.list.length > 0 && (
                <ul>{this.state.list.map(this.parseList)}</ul>
              )}
            </div>
          </div>
        </header>
      </div>
    );
  }  
};

export default App;
