import React from 'react';

import { Container, Title } from './styles';

import Button from '~/components/Button';

function Tab1({ navigation }) {
  return (
    <Container>
      <Title>Tab1</Title>

      <Button
        text="Go to Tab1 item"
        onPress={() => navigation.navigate('Profile')}
      />
    </Container>
  );
}

export default Tab1;
