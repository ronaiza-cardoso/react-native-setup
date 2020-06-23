import React from 'react';

import { Container, Stringify } from './styles';

import Button from '~/components/Button';

function Detail({ navigation, route }) {
  const contactInfo = route.params.contact;
  return (
    <Container>
      <Stringify>{JSON.stringify(contactInfo, null, 2)}</Stringify>
    </Container>
  );
}

export default Detail;
