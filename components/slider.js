import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Slides from '../data/data'
import SlideItems from './slideItems';

export default function Slider(){
  return (
    <View>
      <FlatList data={Slides} renderItem={({item})=><SlideItems item={item}/>}/>
    </View>
  );
}



const styles = StyleSheet.create({});