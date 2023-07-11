import { Image,StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function SlideItems({item}){
  return (<>
    <View>
      <Image source={item.imgUrl} resizeMode="contain"/>
    </View>
    <View>
        <Text>Hello</Text>
    </View>
  </>)
}



const styles = StyleSheet.create({})