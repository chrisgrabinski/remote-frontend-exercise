import React, { useContext } from "react";
import { EmployeesContext } from "../context/EmployeesContext";

export default function IndexPage() {
  const { employees } = useContext(EmployeesContext);

  return (
    <ul>
      {employees.map((employee) => (
        <li key={employee.id}>{employee.name}</li>
      ))}
    </ul>
  );
}
