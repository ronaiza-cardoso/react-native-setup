import React from 'react';

import { Container } from './styles';

import Button from '~/components/Button';

function ActionDetails({ navigation }) {
  return (
    <Container>
      <Button text="ActionDetails" onPress={() => console.log('red')} />
      <Button text="Go back" onPress={() => navigation.goBack()} />
    </Container>
  );
}

export default ActionDetails;
