import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../../../components/ScreenWrapper'
import { Screen } from 'react-native-screens'
import { images } from '../../../assets/Index'
import ImageFast from '../../../components/ImageFast'
import Header from '../../../components/home/Header'

const FeedIntro = () => {
  return (
    <ScreenWrapper>
      <View>
        <Header/>
      </View>
    </ScreenWrapper>
  )
}

export default FeedIntro

const styles = StyleSheet.create({})