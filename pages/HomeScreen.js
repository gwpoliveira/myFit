import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import { Box } from "native-base";

export default function HomeScreen({ navigation }) {
  // console.log('HomeScreen rendered');  // Adicione este log

  // const handleLogin = () => {
  //   navigation.navigate('Login');
  // };

  return (
    <Box flex={1} justifyContent="center" alignItems="center" bg={'blueGray.900'}>
      <View style={styles.container}>
        <Text style={styles.title}>Home</Text>
        {/*<Button title="Login" onPress={handleLogin} />*/}
      </View>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  title: {
    color: 'white',
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    color: 'white',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 16,
  },
});
