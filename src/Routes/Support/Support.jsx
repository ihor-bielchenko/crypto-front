import React from 'react';

export default () => {
  return (
    <BlockGrid>
      <TypographyHeader>Support</TypographyHeader>
      <ButtonLink to='/support/create-ticket'>Create Ticket</ButtonLink>

      <SupportTable />
    </BlockGrid>
  );
};
