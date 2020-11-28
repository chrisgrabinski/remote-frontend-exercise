import React, { useContext } from "react";
import Link from "next/link";
import { EmployeesContext } from "../context/EmployeesContext";

export default function IndexPage() {
  const { employees } = useContext(EmployeesContext);

  return (
    <>
      <Link href="/add">Add employee</Link>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            <p>{employee.name}</p>
            <Link href={`/edit/${employee.id}`}>Edit</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
