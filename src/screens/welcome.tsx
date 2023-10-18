import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Alert, SafeAreaView, ScrollView} from 'react-native';
import styled from 'styled-components/native';
import WelcomeImage from '../../assets/images/logo.png';
import Button from '../components/button';

type TextProps = {
  color: string;
};

const ImageContainer = styled.View`
  background-color: #f9faff;
  flex: 2;
  padding: 16px;
`;

const Logo = styled.Image`
  width: 100%;
  height: 100%;
`;

const ContentWrapper = styled.View`
  background-color: #242238;
  flex: 0.3;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  padding: 16px;
`;

const Row = styled.View`
  flex-direction: row;
  justify-content: center;
`;

const Title = styled.Text<TextProps>`
  font-size: 32px;
  color: ${param => param.color};
  text-align: center;
  font-weight: bold;
  margin: 24px 0 0 0;
`;

const Subtitle = styled.Text`
  font-size: 22px;
  color: #fff;
  margin: 8px 0 32px 0;
  text-align: center;
  opacity: 0.7;
`;

const Welcome = () => {
  const {navigate} = useNavigation();
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <SafeAreaView />
      <ImageContainer>
        <Logo source={WelcomeImage} resizeMode="contain" />
      </ImageContainer>
      <ContentWrapper>
        <Row>
          <Title color="#FFF">PromoTable </Title>
        </Row>
        <Subtitle color="#000000">Promoção na palma da sua mão!</Subtitle>
        <Button
          activeOpacity={0.7}
          buttonColor="#ab0505"
          labelColor="#000000"
          title="APROVEITAR"
          onPress={() => navigate('Login')}
        />
      </ContentWrapper>
    </ScrollView>
  );
};

export default Welcome;
