import React, { useEffect } from 'react';
import { NativeModules } from 'react-native';
import { Container, Title } from './styles';

import Button from '~/components/Button';

const { Device } = NativeModules;

function Feed({ navigation, route }) {
  useEffect(() => {
    if (route.params?.data) {
      console.log('route', route);
    }
  }, [route]);

  useEffect(() => getDeviceName(), []);

  function getDeviceName() {
    Device.getDeviceName((err, name) =>
      err ? console.error('err: ', err) : console.log('Device name:', name),
    );
  }

  return (
    <Container>
      <Title>Navigation Drawer</Title>
      <Title />

      <Button
        text="Go to feed item"
        onPress={() => navigation.navigate('Detail')}
      />
    </Container>
  );
}

export default Feed;
