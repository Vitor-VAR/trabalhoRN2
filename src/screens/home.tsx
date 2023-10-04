import React from 'react';
import {SafeAreaView} from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: #ededed;
`;

const Home = () => {
  return (
    <Container>
      <SafeAreaView />
    </Container>
  );
};

export default Home;
