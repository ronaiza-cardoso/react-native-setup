import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  padding: 10px;
  align-items: center;
  background: #fff;
`;

export const ImageContainer = styled.View``;

export const Image = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-right: 10px;
`;

export const Content = styled.View`
  /* justify-items: flex-start; */
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: #3a3a3a;
`;

export const SubTitle = styled.Text`
  font-size: 16px;
  color: #666;
  margin-top: 2px;
`;

export const AlignRight = styled.View`
  align-items: flex-end;
  flex: 1;
`;
