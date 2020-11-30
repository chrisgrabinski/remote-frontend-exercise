import React, { useContext } from "react";
import { render, screen } from "@testing-library/react";
import UserEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import {
  DEFAULT_EMPLOYEES,
  EmployeesContext,
  EmployeesProvider,
} from "./EmployeesContext";

const NEW_EMPLOYEE = {
  birthDate: "1964-02-23",
  country: "United States",
  jobTitle: "FBI agent",
  name: "Dana Scully",
  salary: "75000",
};

function renderWithEmployees(ui) {
  const Wrapper = ({ children }) => (
    <EmployeesProvider>{children}</EmployeesProvider>
  );

  render(ui, { wrapper: Wrapper });
}

test("create a new employee in context", () => {
  const TestComponent = () => {
    const { employees, createEmployee } = useContext(EmployeesContext);

    return (
      <>
        <button onClick={() => createEmployee(NEW_EMPLOYEE)}>
          Add new employee
        </button>
        <div data-testid="output">{JSON.stringify(employees)}</div>
      </>
    );
  };

  renderWithEmployees(<TestComponent />);

  UserEvent.click(screen.getByRole("button"));

  const employeeOutput = JSON.parse(
    screen.getByTestId("output").textContent
  )[0];
  expect(employeeOutput).toMatchObject(NEW_EMPLOYEE);
});

test("read an existing employee from context", () => {
  const exampleEmployee = DEFAULT_EMPLOYEES[0];

  const TestComponent = () => {
    const { getEmployee } = useContext(EmployeesContext);

    return (
      <>
        <div data-testid="output">
          {JSON.stringify(getEmployee(exampleEmployee.id))}
        </div>
      </>
    );
  };

  renderWithEmployees(<TestComponent />);

  const employeeOutput = JSON.parse(screen.getByTestId("output").textContent);
  expect(employeeOutput).toMatchObject(exampleEmployee);
});

test("update an existing employee in context", () => {
  const updatedEmployee = {
    ...NEW_EMPLOYEE,
    name: "Fox Mulder",
  };

  const TestComponent = () => {
    const { employees, getEmployee, updateEmployee } = useContext(
      EmployeesContext
    );

    const targetEmployee = employees[0].id;

    return (
      <>
        <div data-testid="output">
          {JSON.stringify(getEmployee(targetEmployee))}
        </div>
        <button onClick={() => updateEmployee(targetEmployee, updatedEmployee)}>
          Update employee
        </button>
      </>
    );
  };

  renderWithEmployees(<TestComponent />);

  let employeeOutput = JSON.parse(screen.getByTestId("output").textContent);
  expect(employeeOutput).toMatchObject(NEW_EMPLOYEE);

  UserEvent.click(screen.getByRole("button"));

  employeeOutput = JSON.parse(screen.getByTestId("output").textContent);
  expect(employeeOutput).toMatchObject(updatedEmployee);
});
