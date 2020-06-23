import React from 'react';

import { Container, Title } from './styles';

import Button from '~/components/Button';

function Settings({ navigation }) {
  return (
    <Container>
      <Title>Settings</Title>
      <Button text="Toggle Drawer" onPress={() => navigation.toggleDrawer()} />
    </Container>
  );
}

export default Settings;
