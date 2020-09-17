import React from 'react';
import { connect } from 'react-redux';

const Employees = ({ employees })=> {
  return (
    <ul>
      {
        employees.map( employee => {
          return (
            <li key={ employee.id }>
              { employee.name }
            </li>
          );
        })
      }
    </ul>
  );
};

export default connect(({ employees})=> {
  return {
    employees
  };
})(Employees);
