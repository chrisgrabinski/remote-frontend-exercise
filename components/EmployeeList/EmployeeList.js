import React from "react";
import PropTypes from "prop-types";

import { Table, RowGroup, Row, Cell, Body } from "./EmployeeList.styles";

export default function PeopleList({ children }) {
  return (
    <Table role="table">
      <RowGroup role="rowgroup">
        <Row role="row">
          <Cell role="columnheader">Employee</Cell>
          <Cell role="columnheader">Job title</Cell>
          <Cell role="columnheader">Country</Cell>
          <Cell role="columnheader">Salary</Cell>
          <Cell />
        </Row>
      </RowGroup>
      <Body role="rowgroup">{children}</Body>
    </Table>
  );
}

PeopleList.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

PeopleList.defaultProps = {
  children: null,
};
