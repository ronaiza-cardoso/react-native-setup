import React from 'react';

import { Container, Text } from './styles';

function Modal({ text, onPress }) {
  return (
    <Container onPress={onPress}>
      <Text>Hello, I'm a full modal</Text>
    </Container>
  );
}

export default Modal;
