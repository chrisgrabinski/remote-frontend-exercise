import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

import ButtonLink from "../ButtonLink";

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
        <BirthDate>{birthDate}</BirthDate>
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
  country: PropTypes.string,
  id: PropTypes.string,
  jobTitle: PropTypes.string,
  name: PropTypes.string,
  salary: PropTypes.string,
};

EmployeeCard.defaultProps = {
  ountry: null,
  id: null,
  jobTitle: null,
  name: null,
  salary: null,
};
