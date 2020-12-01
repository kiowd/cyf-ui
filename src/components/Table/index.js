import styled from "styled-components";

export const Table = styled.table`
  border: none;
  position: relative;
  width: 90%;
  background: #ffffff;
`;

export const TableRow = styled.tr`
  height: 22px;
  top: 58px;
  background: #ffffff;
  cursor: pointer;
  &:hover {
    background-color: #f3f3f3;
  }
`;
export const RowData = styled.td`
  padding-left: 5px
  max-width: 100%;
  white-space: nowrap;
  height: 20px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: 0.01em;
  color: #000000;
`;

// export const ApplicantRow = (applicant) => {
//   return (
//     <TableRow>
//       <RowData>{applicant.id}</RowData>
//       <RowData>{applicant.check}</RowData>
//       <RowData>{applicant.call}</RowData>
//       <RowData>{applicant.emoji}</RowData>
//       <RowData>{applicant.name}</RowData>
//       <RowData>{applicant.progress}</RowData>
//       <RowData>{applicant.date}</RowData>
//     </TableRow>
//   );
// };
