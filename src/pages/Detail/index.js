import React from 'react';

import { Container, Title } from './styles';

import Button from '~/components/Button';

function Detail({ navigation }) {
  return (
    <Container>
      <Title>Detail Screen</Title>

      <Button
        text="View Bottom Tabs"
        onPress={() => navigation.navigate('Profile')}
      />

      <Button
        text="View Top Tabs"
        onPress={() => navigation.navigate('Profile')}
      />
    </Container>
  );
}

export default Detail;
