import React, { useContext } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { EmployeesContext } from "../../context/EmployeesContext";

import Form from "../../components/Form";

export default function EditEmployeePage() {
  const router = useRouter();
  const { id } = router.query;
  const { getEmployee, updateEmployee } = useContext(EmployeesContext);
  const employeeData = getEmployee(id);

  const handleFormSubmit = (formData) => {
    updateEmployee(id, formData);
    router.push("/");
  };

  return employeeData ? (
    <>
      <Head>
        <title>Edit employee</title>
      </Head>
      <Form
        description="Edit the information of your employee."
        inititalState={employeeData}
        onSubmit={handleFormSubmit}
        primaryActionLabel="Save"
        title="Edit employee"
      />
    </>
  ) : (
    <p>Employee not found</p>
  );
}
