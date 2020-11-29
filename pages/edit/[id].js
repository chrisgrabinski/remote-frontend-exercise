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
        <label>
          Name
          <input
            name="name"
            type="text"
            onChange={handleInputChange}
            value={formData.name}
          />
        </label>
        <label>
          Birth date
          <input
            name="birthDate"
            type="text"
            onChange={handleInputChange}
            value={formData.birthDate}
          />
        </label>
        <label>
          Job title
          <input
            name="jobTitle"
            type="text"
            onChange={handleInputChange}
            value={formData.jobTitle}
          />
        </label>
        <label>
          Country
          <input
            name="country"
            type="text"
            onChange={handleInputChange}
            value={formData.country}
          />
        </label>
        <label>
          Salary
          <input
            name="salary"
            type="text"
            onChange={handleInputChange}
            value={formData.salary}
          />
        </label>
      </Form>
    </div>
  ) : (
    <div>Employee not found</div>
  );
}
