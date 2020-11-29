import React, { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { v4 as uuid4 } from "uuid";

export const DEFAULT_EMPLOYEES = [
  {
    id: "0",
    name: "Ann Henry",
    birthDate: "1990-12-04",
    jobTitle: "Product manager",
    country: "United States",
    salary: "60000",
  },
  {
    id: "1",
    name: "Annette Williamson",
    birthDate: "1995-04-20",
    jobTitle: "CEO",
    country: "United States",
    salary: "60000",
  },
  {
    id: "2",
    name: "Philip Alexander",
    birthDate: "1989-07-25",
    jobTitle: "Software engineer",
    country: "United States",
    salary: "60000",
  },
];

export const EmployeesContext = createContext();

export const EmployeesProvider = ({ children }) => {
  const initialState =
    typeof window !== "undefined" && localStorage.getItem("employees")
      ? JSON.parse(localStorage.getItem("employees"))
      : DEFAULT_EMPLOYEES;

  const [employees, setEmployees] = useState(initialState);

  const createEmployee = (employee) => {
    const employeeData = {
      id: uuid4(),
      ...employee,
    };

    setEmployees([employeeData, ...employees]);
  };

  const updateEmployee = (employeeId, data) => {
    const updatedEmployees = employees.map((employee) =>
      employee.id === employeeId
        ? {
            id: employee.id,
            ...data,
          }
        : employee
    );

    setEmployees(updatedEmployees);
  };

  const getEmployee = (employeeId) => {
    const employeeData = employees.filter(
      (employee) => employee.id === employeeId
    )[0];

    return employeeData;
  };

  useEffect(() => {
    const localEmployees = JSON.stringify(employees);
    localStorage.setItem("employees", localEmployees);
  }, [employees]);

  return (
    <EmployeesContext.Provider
      value={{ employees, createEmployee, getEmployee, updateEmployee }}
    >
      {children}
    </EmployeesContext.Provider>
  );
};

EmployeesProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

EmployeesProvider.defaultProps = {
  children: null,
};

export default EmployeesProvider;
