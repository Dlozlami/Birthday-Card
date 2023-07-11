import React, {useRef} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Animated,
  useWindowDimensions,
} from 'react-native';
import Slider from './components/slider';


export default function App(){


  return (
    <SafeAreaView style={styles.container}>
      <Slider />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});