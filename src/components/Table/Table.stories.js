import React from "react";
import { Table, TableRow, RowData } from "./index";

export default {
  title: "Components/Table",
  component: Table,
};

const applicants = [
  {
    id: 1,
    check: "true",
    call: "true",
    emoji: "happy",
    name: "Serkan Cavus",
    progress: "tick",
    date: "date",
  },
  {
    id: 2,
    check: "true",
    call: "true",
    emoji: "happy",
    name: "Someone else",
    progress: "tick",
    date: "date",
  },
];

export const ProggressTable = () => {
  return (
    <Table>
      {applicants.map((applicant) => (
        <TableRow key={applicant.id}>
          <RowData>{applicant.id}</RowData>
          <RowData>{applicant.check}</RowData>
          <RowData>{applicant.call}</RowData>
          <RowData>{applicant.emoji}</RowData>
          <RowData>{applicant.name}</RowData>
          <RowData>{applicant.progress}</RowData>
          <RowData>{applicant.date}</RowData>
        </TableRow>
      ))}
    </Table>
  );
};
