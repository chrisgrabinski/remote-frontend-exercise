import React, { useContext, useState } from "react";
import { useRouter } from "next/router";
import { EmployeesContext } from "../context/EmployeesContext";

export default function AddEmployeePage() {
  const router = useRouter();

  const { addEmployee } = useContext(EmployeesContext);

  const [formData, setFormData] = useState({});

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    addEmployee(formData);

    router.push("/");
  };

  const handleButtonResetClick = (event) => {
    router.push("/");
  };

  return (
    <div>
      <h1>Add a new employee</h1>
      <p>Fill out the information of your new employee.</p>
      <form onSubmit={handleFormSubmit}>
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
        <div>
          <button type="reset" onClick={handleButtonResetClick}>
            Cancel
          </button>
          <button type="submit">Add employee</button>
        </div>
      </form>
    </div>
  );
}
