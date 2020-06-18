import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '~/store/ducks/counter';

import { Container, Text } from './styles';

import Button from '~/components/Button';

function Counter({ onIncrement, onDecrement, value }) {
  return (
    <Container>
      <Button text="INCREMENT" onPress={onIncrement} />
      <Button text="DECREMENT" onPress={onDecrement} />

      <Text>{value}</Text>
    </Container>
  );
}

const mapStateToProps = ({ counter }) => ({ value: counter });

const mapDispatch = { onIncrement: increment, onDecrement: decrement };

export default connect(mapStateToProps, mapDispatch)(Counter);
