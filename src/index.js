import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import store, { fetchEmployees, fetchDepartments } from './store';
import { HashRouter as Router, Link, Route} from 'react-router-dom';
import Departments from './Departments';
import Employees from './Employees';
import Employee from './Employee';

class _App extends React.Component{
  constructor(){
    super();
  }
  componentDidMount(){
    this.props.load();
  }
  render(){
    return (
      <Router>
        <div>
          <ul>
            <li><Link to='/employees'>Employees</Link></li>
            <li><Link to='/departments'>Departments</Link></li>
          </ul>
          <Route path='/' exact component={ Employees } />
          <Route path='/employees' exact component={ Employees } />
          <Route path='/employees/:id' exact component={ Employee } />
          <Route path='/departments' component={ Departments } />
        </div>
      </Router>
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
