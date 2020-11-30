/* eslint-disable react/prop-types */

import React, { useContext } from "react";
import { render, screen } from "@testing-library/react";
import UserEvent from "@testing-library/user-event";

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

function parseOutput(output) {
  return JSON.parse(output.textContent);
}

const TestComponentBody = ({ onClick, output }) => (
  <>
    <button {...{ onClick }} />
    <div data-testid="output">{JSON.stringify(output)}</div>
  </>
);

test("create a new employee in context", () => {
  const TestComponent = () => {
    const { employees, createEmployee } = useContext(EmployeesContext);
    const handleClick = () => createEmployee(NEW_EMPLOYEE);

    return <TestComponentBody onClick={handleClick} output={employees} />;
  };

  renderWithEmployees(<TestComponent />);

  UserEvent.click(screen.getByRole("button"));

  const employeeOutput = parseOutput(screen.getByTestId("output"))[0];
  expect(employeeOutput).toMatchObject(NEW_EMPLOYEE);
});

test("read an existing employee from context", () => {
  const exampleEmployee = DEFAULT_EMPLOYEES[0];

  const TestComponent = () => {
    const { getEmployee } = useContext(EmployeesContext);
    const output = getEmployee(exampleEmployee.id);

    return <TestComponentBody {...{ output }} />;
  };

  renderWithEmployees(<TestComponent />);

  const employeeOutput = parseOutput(screen.getByTestId("output"));
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
    const output = getEmployee(targetEmployee);
    const handleClick = () => updateEmployee(targetEmployee, updatedEmployee);

    return <TestComponentBody onClick={handleClick} output={output} />;
  };

  renderWithEmployees(<TestComponent />);

  const originalEmployeeOutput = parseOutput(screen.getByTestId("output"));
  expect(originalEmployeeOutput).toMatchObject(NEW_EMPLOYEE);

  UserEvent.click(screen.getByRole("button"));

  const updatedEmployeeOutput = parseOutput(screen.getByTestId("output"));
  expect(updatedEmployeeOutput).toMatchObject(updatedEmployee);
});
