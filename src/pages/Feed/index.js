import React, { useEffect } from 'react';

import { Container, Title } from './styles';

import Button from '~/components/Button';

function Feed({ navigation, route }) {
  useEffect(() => {
    if (route.params?.data) {
      console.log('route', route);
    }
  }, [route]);

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
