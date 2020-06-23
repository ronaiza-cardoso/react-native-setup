import styled from 'styled-components/native';
import { Dimensions, StyleSheet } from 'react-native';
const { width, height } = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  background: #fff;
`;

export const ImageContainer = styled.View``;

export const Image = styled.Image``;

export const LoginContainer = styled.View`
  justify-content: center;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const ButtonContainer = styled.TouchableOpacity`
  background: #fff;
  height: 70px;
  margin: 5px 70px;
  border-radius: 35px;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const InputContainer = styled.View`
  justify-content: center;
`;

export const TextInput = styled.TextInput`
  height: 50px;
  border-radius: 25px;
  border-width: 0.5px;
  margin: 5px 25px;
  padding-left: 16px;
  border-color: #eee;
`;

export const CloseContainer = styled.View`
  height: 40px;
  width: 40px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -20px;
  left: ${`${width / 2 - 20}px`};
  background: #fff;
`;

export const CloseButton = styled.Text`
  font-size: 15px;
`;
