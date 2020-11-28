import { createContext, useState } from "react";

const DEFAULT_EMPLOYEES = [
  {
    id: 0,
    name: "Ann Henry",
    birthDate: "1990-12-04",
    jobTitle: "Product manager",
    country: "United States",
    salary: 60000,
  },
  {
    id: 1,
    name: "Annette Williamson",
    birthDate: "1995-04-20",
    jobTitle: "CEO",
    country: "United States",
    salary: 60000,
  },
  {
    id: 2,
    name: "Philip Alexander",
    birthDate: "1989-07-25",
    jobTitle: "Software engineer",
    country: "United States",
    salary: 60000,
  },
];

export const EmployeesContext = createContext();

export const EmployeesProvider = ({ children }) => {
  const initialState = DEFAULT_EMPLOYEES;
  const [employees, setEmployees] = useState(initialState);

  return (
    <EmployeesContext.Provider value={{ employees }}>
      {children}
    </EmployeesContext.Provider>
  );
};
