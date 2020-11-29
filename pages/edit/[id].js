import React, { useContext, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { EmployeesContext } from "../../context/EmployeesContext";

import Form from "../../components/Form";

export default function EditEmployeePage() {
  const router = useRouter();
  const { id } = router.query;
  const { getEmployee, updateEmployee } = useContext(EmployeesContext);
  const employeeData = getEmployee(id);
  const [formData, setFormData] = useState(employeeData);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    updateEmployee(id, formData);

    router.push("/");
  };

  return employeeData ? (
    <>
      <Head>
        <title>Edit employee {formData.name}</title>
      </Head>
      <Form
        description="Edit the information of your employee."
        inititalState={employeeData}
        onSubmit={handleFormSubmit}
        primaryActionLabel="Save"
        title="Edit employee"
        {...{ formData, setFormData }}
      />
    </>
  ) : (
    <p>Employee not found</p>
  );
}
