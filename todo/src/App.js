import React from 'react';

class App extends React.Component {

  state = {
    list: [],
    rootInput: ""
  };
  render () {

    const { rootInput } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <div className="main">
            <form>
              <input
                value={rootInput}
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
