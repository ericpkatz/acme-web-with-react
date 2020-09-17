import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
  constructor(){
    super();
  }
  render(){
    return (
      <hr />
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
