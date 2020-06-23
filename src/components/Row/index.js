import React from 'react';

import {
  Container,
  ImageContainer,
  Image,
  Content,
  Title,
  SubTitle,
  AlignRight,
} from './styles';

function Row({ image, title, subtitle, onPress }) {
  return (
    <Container onPress={onPress}>
      <ImageContainer>
        <Image source={image} />
      </ImageContainer>
      <Content>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
      </Content>
      <AlignRight>
        <Title>></Title>
      </AlignRight>
    </Container>
  );
}

export default Row;
