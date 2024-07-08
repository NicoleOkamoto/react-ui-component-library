import React from 'react';
import styled, { css } from 'styled-components';
import { TableProps } from './Table.types';

const StyledTable = styled.table<{ disabled?: boolean }>`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  font-size: 18px;
  text-align: left;
  border-radius: 6px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  ${(props) =>
    props.disabled &&
    css`
      background-color: #e0e0e0;
      cursor: not-allowed;
      th,
      td {
        color: #a0a0a0;
        border-color: #a0a0a0;
      }
    `}
`;

const StyledCaption = styled.caption`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 5px;
  text-align: left;
`;

const StyledTh = styled.th`
  background-color: #f4f4f4;
  border: 1px solid #ddd;
  padding: 12px;
  &:first-child {
    border-top-left-radius: 8px;
  }
  &:last-child {
    border-top-right-radius: 8px;
  }
`;

const StyledTd = styled.td`
  border: 1px solid #ddd;
  padding: 12px;
`;

const StyledTr = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
  &:last-child td:first-child {
    border-bottom-left-radius: 8px;
  }
  &:last-child td:last-child {
    border-bottom-right-radius: 8px;
  }
`;

const Table: React.FC<TableProps> = ({
  headers,
  data,
  caption,
  disabled = false,
}) => {
  return (
    <StyledTable disabled={disabled}>
      {caption && <StyledCaption>{caption}</StyledCaption>}
      <thead>
        <tr>
          {headers.map((header, index) => (
            <StyledTh key={index}>{header}</StyledTh>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <StyledTr key={rowIndex}>
            {headers.map((header, colIndex) => (
              <StyledTd key={colIndex}>{row[header]}</StyledTd>
            ))}
          </StyledTr>
        ))}
      </tbody>
    </StyledTable>
  );
};

export default Table;
