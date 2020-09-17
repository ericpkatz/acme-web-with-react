import React from 'react';
import { connect } from 'react-redux';

const Departments = ({ departments })=> {
  return (
    <ul>
      {
        departments.map( department => {
          return (
            <li key={ department.id }>
              {
                department.name
              }
            </li>
          );
        })
      }
    </ul>
  );
};

export default connect(({ departments})=> {
  return {
    departments
  };
})(Departments);
