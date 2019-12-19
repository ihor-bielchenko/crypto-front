import React from 'react';

export default () => {
  return (
    <Table>
      {DataTable.map((row) => (
        <Row />
      ))}
    </Table>
  );
};
