import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Slider from '../components/slider';
import Head from "expo-router/head";

export default function App(){
  return (<>

    <SafeAreaView>
      <Slider />
    </SafeAreaView>
  </>);
};

const styles = StyleSheet.create({});
