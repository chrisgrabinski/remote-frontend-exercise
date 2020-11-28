import React, { useContext } from "react";
import Link from "next/link";
import { EmployeesContext } from "../context/EmployeesContext";

import EmployeeCard from "../components/EmployeeCard";

export default function IndexPage() {
  const { employees } = useContext(EmployeesContext);

  return (
    <>
      <Link href="/add">Add employee</Link>
      <ul>
        {employees.map((employee) => (
          <EmployeeCard key={employee.id} {...employee} />
        ))}
      </ul>
    </>
  );
}
