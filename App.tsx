import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const App = () => {
return (
<View style={styles.container}>
  <Text style={styles.text}>PRIMEIRA TELA</Text>
</View>

);
};

const styles = StyleSheet.create({
container:{
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
},
text: {
  fontSize: 18,
  fontWeight: 'bold',
},

});

export default App;