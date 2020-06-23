/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';

import Animated, { Easing } from 'react-native-reanimated';
import { TapGestureHandler, State } from 'react-native-gesture-handler';

const {
  Value,
  event,
  block,
  cond,
  eq,
  set,
  Clock,
  startClock,
  stopClock,
  debug,
  timing,
  clockRunning,
  interpolate,
  Extrapolate,
} = Animated;

import {
  Container,
  ImageContainer,
  Image,
  LoginContainer,
  ButtonContainer,
  Button,
} from './styles';

const { width, height } = Dimensions.get('window');

function runTiming(clock, value, dest) {
  const state = {
    finished: new Value(0),
    position: new Value(0),
    time: new Value(0),
    frameTime: new Value(0),
  };

  const config = {
    duration: 1000,
    toValue: new Value(0),
    easing: Easing.inOut(Easing.ease),
  };

  return block([
    cond(clockRunning(clock), 0, [
      set(state.finished, 0),
      set(state.time, 0),
      set(state.position, value),
      set(state.frameTime, 0),
      set(config.toValue, dest),
      startClock(clock),
    ]),
    timing(clock, state, config),
    cond(state.finished, debug('stop clock', stopClock(clock))),
    state.position,
  ]);
}

function SignIn({ navigation }) {
  const buttonOpacity = new Value(1);

  const onStateChange = event([
    {
      nativeEvent: ({ state }) =>
        block([
          cond(
            eq(state, State.END),
            set(buttonOpacity, runTiming(new Clock(), 1, 0)),
          ),
        ]),
    },
  ]);

  const buttonY = interpolate(buttonOpacity, {
    inputRange: [0, 1],
    outputRange: [100, 0],
    extrapolate: Extrapolate.CLAMP,
  });

  const bgY = interpolate(buttonOpacity, {
    inputRange: [0, 1],
    outputRange: [-height / 3, 0],
    extrapolate: Extrapolate.CLAMP,
  });

  return (
    <Container>
      <ImageContainer
        as={Animated.View}
        style={{
          ...StyleSheet.absoluteFill,
          transform: [{ translateY: bgY }],
        }}>
        <Image
          source={require('../../assets/waves.jpg')}
          style={{ flex: 1, height: null, width: null }}
        />
      </ImageContainer>

      <LoginContainer style={{ height: height / 3 }}>
        <TapGestureHandler onHandlerStateChange={onStateChange}>
          <ButtonContainer
            as={Animated.View}
            styles={{
              opacity: buttonOpacity,
              transform: [{ translateY: buttonY }],
            }}>
            <Button
              as={Animated.Text}
              style={{ color: '#333', opacity: buttonOpacity }}>
              SIGN IN
            </Button>
          </ButtonContainer>
        </TapGestureHandler>
        <ButtonContainer
          as={Animated.View}
          style={{
            backgroundColor: '#2E71DC',
            opacity: buttonOpacity,
            transform: [{ translateY: buttonY }],
          }}>
          <Button style={{ color: 'white' }}>SIGN IN WITH FACEBOOK</Button>
        </ButtonContainer>
      </LoginContainer>
    </Container>
  );
}

export default SignIn;
