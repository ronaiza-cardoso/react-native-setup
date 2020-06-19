import React from 'react';

import { Container, Title } from './styles';

import Button from '~/components/Button';

function Tab2({ navigation }) {
  return (
    <Container>
      <Title>Tab2</Title>

      <Button
        text="Go to Tab2 item"
        onPress={() => navigation.navigate('Profile')}
      />
    </Container>
  );
}

export default Tab2;
