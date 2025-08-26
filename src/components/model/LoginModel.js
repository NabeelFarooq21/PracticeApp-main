import { View, Text, Modal, TouchableOpacity } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import CustomText from '../CustomText';
// import CustomButton from '../CustomButton';
import ImageFast from '../ImageFast';
import { images } from '../../assets/Index';
import CustomHorizontalLine from '../CustomHorizontalLine';
import FastImage from 'react-native-fast-image';
import CustomButton from '../CustomButton';
import { useNavigation } from '@react-navigation/native';
import CreateAcc from '../../screens/Auth/CreateAcc/Index';


const CreateModel = ({ isVisible, onClose }) => {
  const navigation =useNavigation();
  return (
    <Modal
      visible={isVisible}
      animationType="none"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={modalStyles.overlay}>
        <View style={modalStyles.container}>
          <View style={modalStyles.header}>
            <View style={{ flex: 1, alignItems: 'center', marginLeft: 20 }}>
              <CustomText
                label={'Login'}
                color={'black'}
                backgroundColor={'white'}
                fontSize={18}
              />
            </View>

            <TouchableOpacity onPress={onClose}>
              <ImageFast
                source={images.closeicon}
                style={{
                  width: 24,
                  height: 24,
                }}
              />
            </TouchableOpacity>
          </View>
          <CustomHorizontalLine />

          <FastImage
            backgroundColor={'white'}
            source={images.logomain}
            style={{
              width: 140,
              height: 64,
              alignSelf: 'center',
              marginTop: 30,
            }}
          />
          <CustomText
            label={'Welcome Back!'}
            fontSize={24}
            fontWeight={600}
            color={'black'}
            textAlign={'center'}
            marginTop={20}
          />
          <View style={{ paddingHorizontal: 20 }}>
            <CustomText
              label={
                'Login to continue sharing your local moments.'
              }
              fontSize={16}
              fontWeight={400}
              color={'black'}
              textAlign={'center'}
              paddingHorizontal={20}
              lineHeight={24}
              letterSpacing={-0.3}
              marginTop={8}
            />
          </View>

          <View style={modalStyles.buttons}>
            <CustomButton
              title={'Continue with Apple'}
              icon={images.ilogo}
              icnWidth={24}
              icnHeight={24}
              borderRadius={16}
              color={'black'}
              backgroundColor={'white'}
              borderWidth={1}
              borderColor={'#E1E4EA'}
              fontSize={18}
              fontWeight={600}
              letterSpacing={-0.3}
            />
            <CustomButton
              title={'Continue with Google'}
              icon={images.glogo}
              icnWidth={24}
              icnHeight={24}
              borderRadius={16}
              color={'black'}
              backgroundColor={'white'}
              borderWidth={1}
              borderColor={'#E1E4EA'}
              fontSize={18}
              fontWeight={600}
              letterSpacing={-0.3}
            />
            <CustomButton
              title={'Continue with Phone'}
              icon={images.mobileicon}
              icnWidth={24}
              icnHeight={24}
              borderRadius={16}
              color={'black'}
              backgroundColor={'white'}
              borderWidth={1}
              borderColor={'#E1E4EA'}
              fontSize={18}
              fontWeight={600}
              letterSpacing={-0.3}
            />
            <CustomButton
              title={'Continue with Email'}
              icon={images.mlogo}
              icnWidth={24}
              icnHeight={24}
              borderRadius={16}
              color={'white'}
              backgroundColor={'black'}
              borderWidth={1}
              borderColor={'#E1E4EA'}
              fontSize={18}
              fontWeight={600}
              letterSpacing={-0.3}
               onPress={() => {
                [navigation.navigate('EmailLogin'), onClose()];
              }}
            />
          </View>

          <View style={modalStyles.lineContainer}>
            <View style={modalStyles.line}></View>
           <TouchableOpacity
  onPress={() => {
    navigation.navigate('CreateAcc');
    onClose();
  }}
>
  <CustomText
    label={'Don’t Have an account?'}
    fontSize={14}
    fontWeight={400}
    color={'black'}
    textAlign={'center'}
    letterSpacing={-0.3}
  />
</TouchableOpacity>

            <View style={modalStyles.line2}></View>
          </View>
          <View style={modalStyles.loginbtn}>
          <CustomButton
            title={'Create Account'}
            borderRadius={16}
            color={'black'}
            backgroundColor={'white'}
            borderWidth={1}
            borderColor={'#E1E4EA'}
            fontSize={18}
            fontWeight={600}
            letterSpacing={-0.3}
            onPress={()=>{
              [navigation.navigate('CreateAcc'), onClose()];
            }}
          />
          <CustomText
            label={'By continuing, you agree to our Terms &  Privacy Policy'}
            fontSize={14}
            fontWeight={400}
            color={'black'}
            textAlign={'center'}
            marginTop={18}
            letterSpacing={-0.3}
          />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CreateModel;

export const modalStyles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'flex-end',
  },
  container: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 20,
    height: '85%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    marginBottom: 10,
    marginTop: 20,
  },

  buttons: {
    marginTop: 20,
    paddingHorizontal: 20,
    gap: 11,
  },

  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    marginTop: 25,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#E1E4EA',
    marginLeft: 20,
    marginRight: 5,
  },
  line2: {
    flex: 1,
    height: 1,
    backgroundColor: '#E1E4EA',
    marginRight: 20,
    marginLeft: 5,
  },
  loginbtn:{
    paddingHorizontal: 20,
    marginTop: 10,
  }
});
