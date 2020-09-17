import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import store, { fetchEmployees, fetchDepartments } from './store';
import Departments from './Departments';
import Employees from './Employees';

class _App extends React.Component{
  constructor(){
    super();
  }
  componentDidMount(){
    this.props.load();
  }
  render(){
    return (
      <div>
        <Departments />
        <Employees />
      </div>
    );
  }
}

const App = connect(
  (state)=> {
    return {
      state
    };
  },
  (dispatch)=> {
    return {
      load: ()=> {
        dispatch(fetchEmployees());
        dispatch(fetchDepartments());
      }
    };
  },
)(_App);

ReactDOM.render(<Provider store={ store }><App /></Provider>, document.querySelector('#root'));
