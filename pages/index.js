import React, { useContext } from "react";
import Link from "next/link";
import Head from "next/head";
import { EmployeesContext } from "../context/EmployeesContext";

import PageHeader from "../components/PageHeader";
import Button from "../components/Button";
import EmployeeList from "../components/EmployeeList";
import EmployeeCard from "../components/EmployeeCard";

export default function IndexPage() {
  const { employees } = useContext(EmployeesContext);

  return (
    <>
      <Head>
        <title>People</title>
      </Head>
      <PageHeader
        title="People"
        description={`${employees.length} employees`}
        action={
          <Link href="/add" passHref>
            <Button as="a">Add employee</Button>
          </Link>
        }
      />
      <EmployeeList>
        {employees.map((employee) => (
          <EmployeeCard key={employee.id} {...employee} />
        ))}
      </EmployeeList>
    </>
  );
}
