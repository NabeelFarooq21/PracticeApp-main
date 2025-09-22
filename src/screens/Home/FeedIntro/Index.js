import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import ScreenWrapper from '../../../components/ScreenWrapper';
import { images } from '../../../assets/Index';
import ImageFast from '../../../components/ImageFast';
import Header from '../../../components/home/Header';
import ProfileStory from '../../../components/home/ProfileStory';
import DummyProfileStory from '../../../components/home/DummyProfileStory';
import CustomText from '../../../components/CustomText';
import CustomVerticalline from '../../../components/home/CustomVerticalline';

const FeedIntro = () => {
  return (
    <ScreenWrapper
      paddingHorizontal={0}
      backgroundColor={'white'}
      scrollEnabled={true}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <DummyProfileStory />

        <View style={styles.text}>
          <CustomText
            label={'How it works'}
            fontFamily={600}
            fontSize={28}
            lineHeight={32}
            color={'#0E121B'}
            marginTop={24}
            paddingHorizontal={20}
          />

          <CustomText
            label={'Scroll down to explore features.'}
            fontFamily={400}
            fontSize={20}
            lineHeight={24}
            color={'#666666'}
            marginTop={8}
            paddingHorizontal={20}
          />

          <ImageFast
            source={images.downdoublearrow}
            style={{ width: 24, height: 24, marginTop: 16 }}
            resizeMode="contain"
          />

          <CustomText
            label={'Local Real Time Stories'}
            fontFamily={400}
            fontSize={20}
            lineHeight={24}
            color={'#0E121B'}
            marginTop={8}
          />

          <CustomVerticalline marginTop={14} marginBottom={14} height={50} />

          {/* horizontal stories */}
          <ProfileStory />

          <CustomVerticalline marginTop={14} marginBottom={14} height={50} />

          <CustomText
            label={'Local Real Time Stories'}
            fontFamily={400}
            fontSize={20}
            lineHeight={24}
            color={'#0E121B'}
            marginTop={8}
          />
          <CustomVerticalline marginTop={14} marginBottom={14} height={50} />
        </View>
        <View>
          
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default FeedIntro;

const styles = StyleSheet.create({
  text: {
    marginTop: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
