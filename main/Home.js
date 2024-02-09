import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import ExStyle from "../style/style"
import Login from '../component/aurth/Login';
const Home = () => {
  return (
    <View style={ExStyle.container}>
      <Login/>
    </View>
  );
};
export default Home;
