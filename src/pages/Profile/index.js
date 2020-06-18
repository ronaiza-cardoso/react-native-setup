import React from 'react';

import { Container } from './styles';

import Button from '~/components/Button';

function Profile({ navigation }) {
  return (
    <Container>
      <Button text="PROFILE" onPress={() => console.log('red')} />
      <Button text="Go back" onPress={() => navigation.goBack()} />
    </Container>
  );
}

export default Profile;
