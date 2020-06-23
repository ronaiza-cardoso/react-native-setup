import React from 'react';

import { Container } from './styles';

import Button from '~/components/Button';
import Counter from '~/components/Counter';

function ActionsList({ navigation }) {
  return (
    <Container>
      <Counter />
    </Container>
  );
}

export default ActionsList;
