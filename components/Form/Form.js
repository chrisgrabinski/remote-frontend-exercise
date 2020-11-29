import React, { useState } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";

import countries from "../../constants/countries";

import ButtonGroup from "../ButtonGroup";
import Button from "../Button";
import FormItem from "../FormItem";

import {
  FormWrapper,
  Header,
  Title,
  Description,
  Body,
  BodyInner,
  Footer,
} from "./Form.styles";

export default function Form({
  description,
  inititalState,
  onSubmit,
  primaryActionLabel,
  title,
}) {
  const router = useRouter();

  const [formData, setFormData] = useState(inititalState);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
  };

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleButtonResetClick = (event) => {
    event.preventDefault();

    router.push("/");
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <Header>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Header>
      <Body>
        <BodyInner>
          <FormItem label="Name" hint="First and last names">
            <input
              autoComplete="off"
              name="name"
              onChange={handleInputChange}
              placeholder="e.g. Jane Doe"
              required
              type="text"
              value={formData.name}
            />
          </FormItem>
          <FormItem label="Birthdate" hint="DD/MM/YYYY">
            <input
              autoComplete="off"
              name="birthDate"
              onChange={handleInputChange}
              placeholder="e.g. 17/02/1990"
              required
              type="date"
              value={formData.birthDate}
            />
          </FormItem>
          <FormItem label="Job title" hint="What is their role?">
            <input
              name="jobTitle"
              onChange={handleInputChange}
              placeholder="e.g. Product manager"
              required
              type="text"
              value={formData.jobTitle}
            />
          </FormItem>
          <FormItem label="Country" hint="Where are they based?">
            <select
              name="country"
              onChange={handleInputChange}
              required
              type="text"
              value={formData.country}
            >
              <option value="">Select a country</option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </FormItem>
          <FormItem label="Salary" hint="Gross yearly salary">
            <input
              min="0"
              name="salary"
              onChange={handleInputChange}
              placeholder="e.g. 50000"
              required
              type="number"
              value={formData.salary}
            />
          </FormItem>
        </BodyInner>
      </Body>
      <Footer>
        <ButtonGroup>
          <Button isSecondary onClick={handleButtonResetClick} type="reset">
            Cancel
          </Button>
          <Button type="submit">{primaryActionLabel}</Button>
        </ButtonGroup>
      </Footer>
    </FormWrapper>
  );
}

Form.propTypes = {
  description: PropTypes.string,
  inititalState: PropTypes.shape({
    birthDate: PropTypes.string,
    country: PropTypes.string,
    jobTitle: PropTypes.string,
    name: PropTypes.string,
    salary: PropTypes.string,
  }),
  onSubmit: PropTypes.func,
  primaryActionLabel: PropTypes.string,
  title: PropTypes.string,
};

Form.defaultProps = {
  description: null,
  inititalState: {
    birthDate: "",
    country: "",
    jobTitle: "",
    name: "",
    salary: "",
  },
  onSubmit: () => {},
  primaryActionLabel: null,
  title: null,
};
