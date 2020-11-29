import React, { useContext, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { EmployeesContext } from "../../context/EmployeesContext";

import Form from "../../components/Form";
import FormItem from "../../components/FormItem";

export default function EditEmployeePage() {
  const router = useRouter();
  const { id } = router.query;

  const { getEmployee, updateEmployee } = useContext(EmployeesContext);

  const employeeData = getEmployee(id);
  const [formData, setFormData] = useState(employeeData);

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    updateEmployee(id, formData);

    router.push("/");
  };

  return employeeData ? (
    <div>
      <Head>
        <title>Edit employee {formData.name}</title>
      </Head>
      <Form
        title="Edit employee"
        description="Edit the information of your employee."
        primaryActionLabel="Save"
        onSubmit={handleFormSubmit}
      >
        <FormItem label="Name" hint="First and last names">
          <input
            autoComplete="off"
            name="name"
            onChange={handleInputChange}
            placeholder="e.g. Jane Doe"
            type="text"
          />
        </FormItem>
        <FormItem label="Birthdate" hint="DD/MM/YYYY">
          <input
            autoComplete="off"
            name="birthDate"
            onChange={handleInputChange}
            placeholder="e.g. 17/02/1990"
            type="text"
          />
        </FormItem>
        <FormItem label="Job title" hint="What is their role?">
          <input
            name="jobTitle"
            onChange={handleInputChange}
            placeholder="e.g. Product manager"
            type="text"
          />
        </FormItem>
        <FormItem label="Country" hint="Where are they based?">
          <input name="country" type="text" onChange={handleInputChange} />
        </FormItem>
        <FormItem label="Salary" hint="Gross yearly salary">
          <input
            name="salary"
            onChange={handleInputChange}
            placeholder="e.g. 50000"
            type="text"
          />
        </FormItem>
      </Form>
    </div>
  ) : (
    <div>Employee not found</div>
  );
}
