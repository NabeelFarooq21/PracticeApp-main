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

const CreateAcc = () => {
    const navigation = useNavigation();
  return (
    <ScreenWrapper
      paddingHorizontal={0}
      backgroundColor={'white'}
      scrollEnabled={true}
      headerUnScrollable={() => (
        <View>
          <TopBar title={'Create Account'} />
          <CustomHorizontalLine height={1} />
        </View>
      )}
    >
      <ImageFast
        source={images.create}
        style={{
          height: 96,
          width: 96,
          alignSelf: 'center',
          resizeMode: 'contain',
          marginTop: 50,
        }}
      />

      <CustomText
        label={'Create an Account'}
        fontSize={24}
        fontWeight={600}
        color={'#0E121B'}
        textAlign={'center'}
        marginTop={15}
        lineHeight={32}
      />

      <CustomText
        label={'Join Locaided and start earning for what you see.'}
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
      <View style={{ paddingHorizontal: 30,marginTop:20 }}>
        <CustomText
          fontSize={14}
          fontWeight={400}
          color={'#0E121B'}
          letterSpacing={-0.6}
          // marginTop={20}
          label={'Full Name'}
          marginTop={10}
        />
        <CustomInput
          placeholder={'Enter Your Full Name'}
          iconImage={images.personicon}
          placeholderTextColor={'#525866'}
          borderRadius={12}
          borderColor="#E1E4EA"
          color={'black'}
          borderwidth={1}
          height={48}
          marginTop={5}
          leftIconStyle={{
            width: 20,
            height: 20,
            tintColor: 'black',
            marginRight: 8,
          }}
        />
        <CustomText
          fontSize={14}
          fontWeight={400}
          color={'#0E121B'}
          letterSpacing={-0.6}
          marginTop={12}
          label={'Email Address'}
        />
        <CustomInput
          placeholder={'jhsdf@gmail.com'}
          iconImage={images.email}
          placeholderTextColor={'#525866'}
          borderRadius={12}
          borderColor="#E1E4EA"
          color={'black'}
          borderwidth={1}
          height={48}
          marginTop={5}
          leftIconStyle={{
            width: 20,
            height: 20,
            tintColor: 'black',
            marginRight: 8,
          }}
        />

        <CustomText
          fontSize={14}
          fontWeight={400}
          color={'#0E121B'}
          letterSpacing={-0.6}
          label={'New Password'}
          marginTop={12}
        />
        <CustomInput
          placeholder={'........'}
          iconImage={images.lock}
          placeholderTextColor={'#525866'}
          borderRadius={12}
          color={'black'}
          borderColor="#E1E4EA"
          borderwidth={1}
          height={48}
          marginTop={7}
          leftIconStyle={{
            width: 20,
            height: 20,
            tintColor: 'black',
            marginRight: 8,
          }}
          rightIcon={images.eye}
          secureTextEntry={true}
        />

        <CustomText
          fontSize={14}
          fontWeight={400}
          color={'#0E121B'}
          letterSpacing={-0.6}
          marginTop={12}
          label={'Confirm Password'}
        />
        <CustomInput
          placeholder={'........'}
          iconImage={images.lock}
          placeholderTextColor={'#525866'}
          borderRadius={12}
          color={'black'}
          borderColor="#E1E4EA"
          borderwidth={1}
          height={48}
          marginTop={7}
          leftIconStyle={{
            width: 20,
            height: 20,
            tintColor: 'black',
            marginRight: 8,
          }}
          rightIcon={images.eye}
          secureTextEntry={true}
        />
          <CustomText
              label={'By continuing, you agree to our Terms &  Privacy Policy'}
              fontSize={14}
              fontWeight={400}
              color={'#525866'}
              textAlign={'center'}
              marginTop={10}
              letterSpacing={-0.3}
              letterheight={19}
            />

             <CustomButton
              title={'Continue'}
              borderRadius={16}
              color={'white'}
              backgroundColor={'black'}
              borderWidth={1}
              borderColor={'#E1E4EA'}
              fontSize={18}
              fontWeight={600}
              letterSpacing={-0.3}
              marginTop={50}
              onPress={()=>{
                navigation.navigate('PhoneNum')
              }}
             
            />
      </View>
    </ScreenWrapper>
  );
};

export default CreateAcc;

const styles = StyleSheet.create({});
