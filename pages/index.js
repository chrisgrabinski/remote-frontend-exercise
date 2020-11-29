import React, { useContext } from "react";
import Link from "next/link";
import Head from "next/head";
import { EmployeesContext } from "../context/EmployeesContext";

import PageHeader from "../components/PageHeader";
import ButtonLink from "../components/ButtonLink";
import UserIcon from "../components/UserIcon";
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
          <ButtonLink href="/add" isHighlight size="lg" icon={<UserIcon />}>
            Add employee
          </ButtonLink>
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
