import React from 'react';

import { Container, Title } from './styles';

import Button from '~/components/Button';

function Detail({ navigation }) {
  return (
    <Container>
      <Title>Detail Screen</Title>

      <Button
        text="View Bottom Tabs"
        onPress={() => navigation.navigate('BottomTabs')}
      />

      <Button
        text="View Top Tabs"
        onPress={() => navigation.navigate('TopTabs')}
      />

      <Button
        text="Pass Data Back"
        onPress={() =>
          navigation.navigate('Feed', { data: 'Hello from detail' })
        }
      />
    </Container>
  );
}

export default Detail;
