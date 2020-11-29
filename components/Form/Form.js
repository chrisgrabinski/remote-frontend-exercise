import React, { useState } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";

import countries from "../../constants/countries.json";

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
  formData,
  onSubmit,
  primaryActionLabel,
  setFormData,
  title,
}) {
  const router = useRouter();

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleButtonResetClick = () => {
    router.push("/");
  };

  return (
    <FormWrapper {...{ onSubmit }}>
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
              type="text"
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
          <Button isSecondary onClick={handleButtonResetClick}>
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
  formData: PropTypes.shape({
    birthDate: PropTypes.string,
    country: PropTypes.string,
    id: PropTypes.string,
    jobTitle: PropTypes.string,
    name: PropTypes.string,
    salary: PropTypes.number,
  }),
  onSubmit: PropTypes.func,
  primaryActionLabel: PropTypes.string,
  setFormData: PropTypes.func,
  title: PropTypes.string,
};

Form.defaultProps = {
  description: null,
  formData: null,
  onSubmit: () => {},
  primaryActionLabel: null,
  setFormData: () => {},
  title: null,
};
