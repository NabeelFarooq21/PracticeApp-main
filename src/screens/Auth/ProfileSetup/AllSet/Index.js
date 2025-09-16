import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ScreenWrapper from '../../../../components/ScreenWrapper';
import CustomButton from '../../../../components/CustomButton';
import CustomText from '../../../../components/CustomText';
import ImageFast from '../../../../components/ImageFast';
import { images } from '../../../../assets/Index';

const AllSet = () => {
  return (
    <ScreenWrapper
      paddingHorizontal={0}
      scrollEnabled={false}
      backgroundColor={'white'}
    >
      <View style={styles.container}>
        <ImageFast
          source={images.allseticon}
          style={{ width: 96, height: 96, alignSelf: 'center' }}
          resizeMode="cover"
        />
        <CustomText
          label={'Your`e all set!'}
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
        <View
          style={{
            width: '100%',
            position: 'absolute',
            bottom: 50,
            paddingHorizontal: 20,
          }}
        >
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
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 10,
  },
});
