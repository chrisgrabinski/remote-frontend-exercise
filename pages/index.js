import React, { useContext } from "react";
import Link from "next/link";
import Head from "next/head";
import { EmployeesContext } from "../context/EmployeesContext";

import EmployeeCard from "../components/EmployeeCard";

export default function IndexPage() {
  const { employees } = useContext(EmployeesContext);

  return (
    <>
      <Head>
        <title>People</title>
      </Head>
      <Link href="/add">Add employee</Link>
      <ul>
        {employees.map((employee) => (
          <EmployeeCard key={employee.id} {...employee} />
        ))}
      </ul>
    </>
  );
}
