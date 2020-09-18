import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

const SET_EMPLOYEE = 'SET_EMPLOYEE';

const employeeReducer = (state = {}, action)=> {
  if(action.type === SET_EMPLOYEE){
    return action.employee;
  }
  return state;
};

const setEmployee = (employee)=> {
  return {
    type: SET_EMPLOYEE,
    employee
  };
};

const fetchEmployee = (id)=> {
  return async(dispatch)=> {
    dispatch(setEmployee((await axios.get(`/api/employees/${id}`)).data));
  };
};

const SET_EMPLOYEES = 'SET_EMPLOYEES';

const employeesReducer = (state = [], action)=> {
  if(action.type === SET_EMPLOYEES){
    return action.employees;
  }
  return state;
};

const setEmployees = (employees)=> {
  return {
    type: SET_EMPLOYEES,
    employees
  };
};

const fetchEmployees = ()=> {
  return async(dispatch)=> {
    dispatch(setEmployees((await axios.get('/api/employees')).data));
  };
};

const SET_DEPARTMENTS = 'SET_DEPARTMENTS';

const departmentsReducer = (state = [], action)=> {
  if(action.type === SET_DEPARTMENTS){
    return action.departments;
  }
  return state;
};

const setDepartments = (departments)=> {
  return {
    type: SET_DEPARTMENTS,
    departments
  };
};

const fetchDepartments = ()=> {
  return async(dispatch)=> {
    dispatch(setDepartments((await axios.get('/api/departments')).data));
  };
};

const reducer = combineReducers({
  departments: departmentsReducer,
  employees: employeesReducer,
  employee: employeeReducer
});

const store = createStore(reducer, applyMiddleware(thunk));


export { fetchEmployees, fetchDepartments, fetchEmployee };

export default store;
