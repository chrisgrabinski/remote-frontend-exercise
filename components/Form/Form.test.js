import React from "react";
import { render, screen } from "@testing-library/react";
import UserEvent from "@testing-library/user-event";

import Form from "./";

const FORM_DATA = {
  birthDate: "1964-02-23",
  country: "United States",
  jobTitle: "FBI agent",
  name: "Dana Scully",
  salary: "75000",
};

test("submits a form and calls the onSubmit event with form data", () => {
  const handleSubmit = jest.fn();

  render(<Form onSubmit={handleSubmit} />);

  UserEvent.type(
    screen.getByRole("textbox", { name: /name first and last names/i }),
    FORM_DATA.name
  );
  UserEvent.type(
    screen.getByLabelText(/birthdatedd\/mm\/yyyy/i),
    FORM_DATA.birthDate
  );
  UserEvent.type(
    screen.getByRole("textbox", { name: /job title what is their role\?/i }),
    FORM_DATA.jobTitle
  );
  UserEvent.selectOptions(
    screen.getByRole("combobox", { name: /country where are they based\?/i }),
    FORM_DATA.country
  );
  UserEvent.type(
    screen.getByRole("spinbutton", { name: /salary gross yearly salary/i }),
    FORM_DATA.salary
  );
  UserEvent.click(screen.getByTestId("submitButton"));

  expect(handleSubmit).toHaveBeenCalledWith(FORM_DATA);
  expect(handleSubmit).toHaveBeenCalledTimes(1);
});
