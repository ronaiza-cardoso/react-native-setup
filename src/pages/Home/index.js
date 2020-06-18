import React from 'react';

import { Container } from './styles';

import Button from '~/components/Button';

function Home({ navigation }) {
  return (
    <Container>
      <Button
        text="GO TO PROFILE PAGE"
        onPress={() => navigation.navigate('Profile')}
      />
      <Button
        text="OPEN MODAL"
        onPress={() => navigation.navigate('MyModal')}
      />
    </Container>
  );
}

export default Home;
