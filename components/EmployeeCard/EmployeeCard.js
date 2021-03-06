import React from "react";
import PropTypes from "prop-types";

import ButtonLink from "../ButtonLink";

import formatDate from "../../utils/format-date";
import formatNumber from "../../utils/format-number";

import {
  Row,
  Cell,
  Name,
  BirthDate,
  SalaryAmount,
  SalaryInterval,
} from "./EmployeeCard.styles";

export default function EmployeeCard({
  birthDate,
  country,
  id,
  jobTitle,
  name,
  salary,
}) {
  return (
    <Row role="row">
      <Cell role="cell">
        <Name>{name}</Name>
        <BirthDate>{formatDate(birthDate)}</BirthDate>
      </Cell>
      <Cell role="cell">{jobTitle}</Cell>
      <Cell role="cell">{country}</Cell>
      <Cell role="cell">
        <SalaryAmount>{formatNumber(salary)}</SalaryAmount>{" "}
        <SalaryInterval>per year</SalaryInterval>
      </Cell>
      <Cell role="cell">
        <ButtonLink href={`/edit/${id}`} isSecondary>
          Edit
        </ButtonLink>
      </Cell>
    </Row>
  );
}

EmployeeCard.propTypes = {
  birthDate: PropTypes.string,
  country: PropTypes.string,
  id: PropTypes.string,
  jobTitle: PropTypes.string,
  name: PropTypes.string,
  salary: PropTypes.string,
};

EmployeeCard.defaultProps = {
  birthDate: null,
  country: null,
  id: null,
  jobTitle: null,
  name: null,
  salary: null,
};
