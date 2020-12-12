import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export const Table = styled.table`
  position: relative;
  background: #ffffff;
  width: ${({ width }) => width || "auto"};
  border-collapse: collapse;
`;

export const TableHead = styled.th`
  border-collapse: collapse;
  padding: 5px;
  max-width: 100%;
  white-space: nowrap;
  height: 30px;
  text-align: left;
`;

export const TableColumn = styled.td`
  border-collapse: collapse;
  padding-left: 5px;
`;

export const TableRow = styled.tr`
  cursor: pointer;
  height: 40px;

  &:hover {
    background-color: #f3f3f3;
  }
`;

export const TableRowWithDetails = ({ itemDetails, children }) => {
  const [viewDetail, setViewDetail] = React.useState(false);
  const toggle = () => setViewDetail(!viewDetail);

  return (
    <>
      <TableRow onClick={toggle}>{children}</TableRow>

      {viewDetail ? (
        <TableRow>
          <div>{itemDetails}</div>
        </TableRow>
      ) : null}
    </>
  );
};

TableRowWithDetails.propTypes = {
  children: PropTypes.any.isRequired,
  itemDetails: PropTypes.any.isRequired,
};
