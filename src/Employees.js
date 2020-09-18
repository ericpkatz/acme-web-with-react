import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Employees = ({ employees })=> {
  return (
    <ul>
      {
        employees.map( employee => {
          return (
            <li key={ employee.id }>
              <Link to={`/employees/${employee.id}`}>
                { employee.name }
              </Link>
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
