import React, { useContext, useState } from "react";
import { useRouter } from "next/router";
import { EmployeesContext } from "../../context/EmployeesContext";

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

  const handleButtonResetClick = (event) => {
    router.push("/");
  };

  return employeeData ? (
    <div>
      <h1>Edit employee: {formData.name}</h1>
      <div>
        <form onSubmit={handleFormSubmit}>
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
          <div>
            <button type="reset" onClick={handleButtonResetClick}>
              Cancel
            </button>
            <button type="submit">Add employee</button>
          </div>
        </form>
      </div>
    </div>
  ) : (
    <div>Employee not found</div>
  );
}
