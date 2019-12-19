import React from 'react';
import { StyledTable } from './styled';
import Row from './Row';

export default ({ dataArray }) => {
  return (
    <StyledTable>
      {dataArray.map((row, i) => (
        <Row key={i} index={i} />
      ))}
    </StyledTable>
  );
};
