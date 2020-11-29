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

  render(
    <EmployeesProvider>
      <TestComponent />
    </EmployeesProvider>
  );

  UserEvent.click(screen.getByRole("button"));

  const output = screen.getByTestId("output");

  expect(output).toHaveTextContent(new RegExp(NEW_EMPLOYEE.name, "i"));
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

  render(
    <EmployeesProvider>
      <TestComponent />
    </EmployeesProvider>
  );

  const output = screen.getByTestId("output");

  expect(output).toHaveTextContent(new RegExp(exampleEmployee.name, "i"));
});

test("update an existing employee in context", () => {
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
        <button onClick={() => updateEmployee(targetEmployee, NEW_EMPLOYEE)}>
          Update employee
        </button>
      </>
    );
  };

  render(
    <EmployeesProvider>
      <TestComponent />
    </EmployeesProvider>
  );

  let output = screen.getByTestId("output");

  expect(output.textContent).toMatch(
    new RegExp(DEFAULT_EMPLOYEES[0].name, "i")
  );

  UserEvent.click(screen.getByRole("button"));

  output = screen.getByTestId("output");

  expect(output).toHaveTextContent(new RegExp(NEW_EMPLOYEE.name, "i"));
});
