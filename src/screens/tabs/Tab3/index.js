import React from 'react';

import { Container, Title } from './styles';

import Button from '~/components/Button';

function Tab3({ navigation }) {
  return (
    <Container>
      <Title>Tab3</Title>

      <Button
        text="Go to Tab3 item"
        onPress={() => navigation.navigate('Profile')}
      />
    </Container>
  );
}

export default Tab3;
