import React, { useContext, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { EmployeesContext } from "../context/EmployeesContext";

import Form from "../components/Form";

export default function AddEmployeePage() {
  const router = useRouter();
  const [formData, setFormData] = useState({});
  const { createEmployee } = useContext(EmployeesContext);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    createEmployee(formData);

    router.push("/");
  };

  return (
    <>
      <Head>
        <title>Add a new employee</title>
      </Head>
      <Form
        description="Fill out the information of your new employee."
        onSubmit={handleFormSubmit}
        primaryActionLabel="Add employee"
        title="Add a new employee"
        {...{ formData, setFormData }}
      />
    </>
  );
}
