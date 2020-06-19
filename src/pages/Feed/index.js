import React from 'react';

import { Container, Title } from './styles';

import Button from '~/components/Button';

function Feed({ navigation }) {
  return (
    <Container>
      <Title>Navigation Drawer</Title>

      <Button
        text="Go to feed item"
        onPress={() => navigation.navigate('Detail')}
      />
    </Container>
  );
}

export default Feed;
