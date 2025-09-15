import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import ScreenWrapper from '../../../../components/ScreenWrapper';
import TopBar from '../../../../components/auth/TopBar';
import CustomHorizontalLine from '../../../../components/CustomHorizontalLine';
import ImageFast from '../../../../components/ImageFast';
import { images } from '../../../../assets/Index';
import CustomText from '../../../../components/CustomText';
import CustomButton from '../../../../components/CustomButton';

const Avatar = () => {
  return (
    <ScreenWrapper
      paddingHorizontal={0}
      backgroundColor={'#ffffff'}
      scrollEnabled={false}
      headerUnScrollable={() => (
        <View>
          <TopBar title={'Avatar'} />
          <CustomHorizontalLine height={1} />
        </View>
      )}
    >
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <ImageFast
          source={images.imgselect}
          style={{ height: 120, width: 120, resizeMode: 'contain' }}
        />
        <CustomText
          label={'Set Profile Images'}
          fontSize={24}
          fontWeight={600}
          color={'#0E121B'}
          textAlign={'center'}
          marginTop={15}
          lineHeight={32}
        />
        <CustomText
          label={'Min 400x400px, PNG or JPEG'}
          fontSize={14}
          fontWeight={400}
          color={'#4B4D59'}
          textAlign={'center'}
          marginTop={8}
          lineHeight={19}
        />

        <CustomButton
          title={'Choose Avatar'}
          marginTop={25}
          color={'#525866'}
          fontSize={14}
          fontFamily={600}
          borderWidth={1}
          borderColor={'#E1E4EA'}
          width="30%"
          backgroundColor={'#ffffff'}
          height={48}
          padding={6}
        />
        <TouchableOpacity>
        <CustomText
        label={'i will do it later'}
        color={'#0E121B'}
        fontSize={14}
        fontWeight={400}
        textAlign={'center'}
        marginTop={20}
        lineHeight={20}
        textDecorationLine={'underline'}
        />
        </TouchableOpacity>
      </View>
        <CustomHorizontalLine height={1} />
        <View style={{ paddingHorizontal: 20, marginTop: 15, marginBottom: 40 }}>
          <CustomButton
            backgroundColor={'#0E121B'}
            title={'Complete and earn'}
            icon={images.coinicon}
            extraText={'+50 Coins'} // 
            extraTextColor={'#FFD700'} 
            icnWidth={20}
            icnHeight={20}
            borderRadius={12}
            color={'white'} 
            fontSize={16}
            height={56}
            
          />
        </View>
    </ScreenWrapper>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flex: 1,
  },
});
