import { StyleSheet, View, ImageBackground } from 'react-native';
import React from 'react';
import ScreenWrapper from '../../../../components/ScreenWrapper';
import CustomButton from '../../../../components/CustomButton';
import CustomText from '../../../../components/CustomText';
import { images } from '../../../../assets/Index';
import ImageFast from '../../../../components/ImageFast';

const AllSet = () => {
  return (
    <ScreenWrapper
      scrollEnabled={false}
      backgroundColor={'white'}
    >
        <View style={styles.overlay}>
            <ImageFast
              source={images.allsetgif}
              style={styles.background}
              resizeMode="cover"
            />
            <ImageFast
              source={images.allseticon}
              style={{ width: 96, height: 96, alignSelf: 'center', marginTop: 70 }}
              resizeMode="contain"
            />
          <CustomText
            label={"You're all set!"}
            fontSize={24}
            fontFamily={600}
            color={'#0E121B'}
            alignSelf={'center'}
            textAlign={'center'}
            marginTop={16}
            lineHeight={32}
            paddingHorizontal={20}
          />
          <CustomText
            label={'Explore your city, share moments, and earn Social Score!'}
            fontSize={16}
            fontFamily={400}
            color={'#525866'}
            alignSelf={'center'}
            textAlign={'center'}
            marginTop={8}
            lineHeight={24}
            paddingHorizontal={20}
          />
          <View style={styles.buttonWrapper}>
            <CustomButton
              title="Welcome to Locaided"
              borderRadius={16}
              fontSize={16}
              fontFamily={600}
              paddingHorizontal={20}
              height={56}
            />
          </View>
        </View>
    </ScreenWrapper>
  );
};

export default AllSet;

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 0.6,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonWrapper: {
    width: '100%',
    position: 'absolute',
    bottom: 40,
  },
});
