import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchEmployee } from './store';


class Employee extends Component{
  componentDidMount(){
    this.props.load(this.props.match.params.id);
  }
  render(){
    const { employee } = this.props;
    return (
      <div>
        <h1>{ employee.name }</h1>
        <p>{ employee.bio }</p>
      </div>
    );
  }
}


export default connect(
  ({ employee })=> {
    return {
      employee
    };
  },
  (dispatch)=> {
    return {
      load: (id)=> dispatch(fetchEmployee(id))
    };
  }
)(Employee);
