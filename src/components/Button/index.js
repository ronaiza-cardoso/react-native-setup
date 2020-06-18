import React from 'react';

import { Container, Text } from './styles';

function Button({ text, onPress }) {
  return (
    <Container onPress={onPress}>
      <Text>{text}</Text>
    </Container>
  );
}

export default Button;
