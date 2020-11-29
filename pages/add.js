import React, { useContext, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { EmployeesContext } from "../context/EmployeesContext";

import Form from "../components/Form";

export default function AddEmployeePage() {
  const router = useRouter();

  const { createEmployee } = useContext(EmployeesContext);

  const [formData, setFormData] = useState({});

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    createEmployee(formData);

    router.push("/");
  };

  return (
    <div>
      <Head>
        <title>Add a new employee</title>
      </Head>
      <Form
        title="Add a new employee"
        description="Fill out the information of your new employee."
        onSubmit={handleFormSubmit}
        primaryActionLabel="Add employee"
      >
        <label>
          Name
          <input name="name" type="text" onChange={handleInputChange} />
        </label>
        <label>
          Birth date
          <input name="birthDate" type="text" onChange={handleInputChange} />
        </label>
        <label>
          Job title
          <input name="jobTitle" type="text" onChange={handleInputChange} />
        </label>
        <label>
          Country
          <input name="country" type="text" onChange={handleInputChange} />
        </label>
        <label>
          Salary
          <input name="salary" type="text" onChange={handleInputChange} />
        </label>
      </Form>
    </div>
  );
}
