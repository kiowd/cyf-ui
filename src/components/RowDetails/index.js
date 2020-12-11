import styled from "styled-components";

export const Table = styled.table`
  border: 1px solid black;
  border-collapse: collapse;
  position: relative;
  width: 90%;
  background: #ffffff;
`;

export const TableRow = styled.tr`
  position: relative
  height: 22px;
  top: 58px;
  background: #ffffff;
  cursor: pointer;
  &:hover {
    background-color: #f3f3f3;
  }
`;

export const TableHead = styled.th`
  border: 1px solid black;
  border-collapse: collapse;
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

export const RowData = styled.td`
  border: 1px solid black;
  border-collapse: collapse;
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

export const Div = styled.div`
  position: absolute;
  width: 100%;
  background: #f3f3f3;
`;

export const Uli = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;
