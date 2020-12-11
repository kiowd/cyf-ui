import React, { useState } from "react";
import { Table, TableHead, TableRow, RowData, Uli, Div } from "./index";

export default {
  title: "Components/RowDetails",
  component: Table,
};

const applicant = {
  id: 1,
  check: "true",
  call: "true",
  emoji: "happy",
  name: "Serkan Cavus",
  progress: "tick",
  date: "date",
};

const ItemDetails = () => {
  return (
    <Uli>
      <li>City</li>
      <li>Age</li>
      <li>Number</li>
      <li>Email</li>
      <li>Started</li>
      <li>Refugee</li>
    </Uli>
  );
};

export const Details = () => {
  const [viewDetail, setViewDetail] = useState(false);
  const toggle = () => setViewDetail(!viewDetail);
  return (
    <Table>
      <TableRow>
        <TableHead>No</TableHead>
        <TableHead>check</TableHead>
        <TableHead>call</TableHead>
        <TableHead>emoji</TableHead>
        <TableHead>name</TableHead>
        <TableHead>progress</TableHead>
        <TableHead>date</TableHead>
      </TableRow>
      <TableRow onClick={toggle}>
        <RowData>{applicant.id}</RowData>
        <RowData>{applicant.check}</RowData>
        <RowData>{applicant.call}</RowData>
        <RowData>{applicant.emoji}</RowData>
        <RowData>{applicant.name}</RowData>
        <RowData>{applicant.progress}</RowData>
        <RowData>{applicant.date}</RowData>
      </TableRow>
      <Div>{viewDetail ? <ItemDetails /> : null}</Div>
    </Table>
  );
};
