/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';

import Animated, { Easing } from 'react-native-reanimated';
import { TapGestureHandler, State } from 'react-native-gesture-handler';
import Svg, { Image, Circle, ClipPath } from 'react-native-svg';

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
  LoginContainer,
  ButtonContainer,
  Button,
  InputContainer,
  TextInput,
  CloseContainer,
  CloseButton,
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

  const onCloseState = event([
    {
      nativeEvent: ({ state }) =>
        block([
          cond(
            eq(state, State.END),
            set(buttonOpacity, runTiming(new Clock(), 0, 1)),
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
    outputRange: [-height / 3 - 20, 0],
    extrapolate: Extrapolate.CLAMP,
  });

  // input container
  const textInputZIndex = interpolate(buttonOpacity, {
    inputRange: [0, 1],
    outputRange: [1, -1],
    extrapolate: Extrapolate.CLAMP,
  });

  const textInputOpacity = interpolate(buttonOpacity, {
    inputRange: [0, 1],
    outputRange: [1, 0],
    extrapolate: Extrapolate.CLAMP,
  });

  const textInputY = interpolate(buttonOpacity, {
    inputRange: [0, 1],
    outputRange: [0, 100],
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
        <Svg {...{ height: height + 20, width }}>
          <ClipPath id="clip">
            <Circle r={height + 20} cx={width / 2} />
          </ClipPath>
          <Image
            href={require('../../assets/waves.jpg')}
            preserveAspectRatio="xMidyMid slice"
            clipPath="url(#clip)"
            {...{ height: height + 20, width }}
          />
        </Svg>
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

      <InputContainer
        as={Animated.View}
        style={{
          height: height / 3,
          ...StyleSheet.absoluteFill,
          top: null,
          zIndex: textInputZIndex,
          opacity: textInputOpacity,
          transform: [{ translateY: textInputY }],
        }}>
        <TapGestureHandler onHandlerStateChange={onCloseState}>
          <CloseContainer as={Animated.View}>
            <CloseButton>X</CloseButton>
          </CloseContainer>
        </TapGestureHandler>

        <TextInput placeholder="EMAIL" />
        <TextInput placeholder="PASSWORD" />

        <ButtonContainer as={Animated.View}>
          <Button style={{ color: '#333' }}>SIGN IN</Button>
        </ButtonContainer>
      </InputContainer>
    </Container>
  );
}

export default SignIn;
