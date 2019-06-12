import React from 'react';

class App extends React.Component {

  state = {
    list: [],
    rootInput: ""
  };

  setRootInput = e => {
    this.setState({ rootInput: e.target.value });
    console.log("rootInput", this.state.rootInput)
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
  }

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
            
          </div>
        </header>
      </div>
    );
  }  
};

export default App;
