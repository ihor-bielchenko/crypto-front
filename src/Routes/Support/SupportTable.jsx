import React from 'react';

export default () => {
  return (
    <Table>
      {DataTable.map((row) => (
        <Row>
          {row.map(data) => (
            <Cell>{data}</Cell>;
          )}
        </Row>  
      ))}
    </Table>
  );
};
