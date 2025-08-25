import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import ScreenWrapper from '../../../components/ScreenWrapper';
import TopBar from '../../../components/auth/TopBar';
import CustomHorizontalLine from '../../../components/CustomHorizontalLine';
import ImageFast from '../../../components/ImageFast';
import { images } from '../../../assets/Index';
import CustomText from '../../../components/CustomText';
import CustomButton from '../../../components/CustomButton';
import CustomInput from '../../../components/CustomInput';

const PhoneNum = () => {
  const navigation = useNavigation();
  return (
    <ScreenWrapper
      paddingHorizontal={0}
      backgroundColor={'white'}
      scrollEnabled={true}
      headerUnScrollable={() => (
        <View>
          <TopBar title={'Phone Number'} />
          <CustomHorizontalLine height={1} />
        </View>
      )}
    >
      <ImageFast
        source={images.phicon}
        style={{
          height: 96,
          width: 96,
          alignSelf: 'center',
          resizeMode: 'contain',
          marginTop: 50,
        }}
      />
      <CustomText
        label={'What is Your Phone Number?'}
        fontSize={24}
        fontWeight={600}
        color={'#0E121B'}
        textAlign={'center'}
        marginTop={15}
        lineHeight={32}
      />

      <CustomText
        label={'We’ll send you a 6 digit code to verify your number.'}
        fontSize={16}
        fontWeight={400}
        color={'#525866'}
        textAlign={'center'}
        paddingHorizontal={20}
        lineHeight={24}
        letterSpacing={-0.3}
        marginTop={8}
        width={'340'}
        height={24}
        alignSelf={'center'}
      />
    </ScreenWrapper>
  );
};

export default PhoneNum;

const styles = StyleSheet.create({});
