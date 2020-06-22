import React, { useEffect, useState } from 'react';
import { NativeModules } from 'react-native';

import Button from '~/components/Button';
import { Container, Title, SubTitle } from './styles';

const { Device } = NativeModules;

function Feed({ navigation, route }) {
  const [deviceName, setDeviceName] = useState();
  useEffect(() => {
    if (route.params?.data) {
      console.log('route', route);
    }
  }, [route]);

  useEffect(() => getDeviceName(), []);

  function getDeviceName() {
    Device.getDeviceName((err, name) =>
      err ? console.error('err: ', err) : setDeviceName(name),
    );
  }

  console.log('euuu');

  return (
    <Container>
      <Title>Navigation Drawer</Title>
      <SubTitle>{deviceName}</SubTitle>

      <Button
        text="Go to feed item"
        onPress={() => navigation.navigate('Detail')}
      />
    </Container>
  );
}

export default Feed;
