import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ScreenWrapper from '../../../components/ScreenWrapper';
import TopBar from '../../../components/auth/TopBar';
import CustomHorizontalLine from '../../../components/CustomHorizontalLine';
import ImageFast from '../../../components/ImageFast';
import { images } from '../../../assets/Index';
import CustomText from '../../../components/CustomText';
import CustomButton from '../../../components/CustomButton';
import CustomInput from '../../../components/CustomInput';
import { useNavigation } from '@react-navigation/native';

const ResetPass = () => {
  return (
    <ScreenWrapper
      paddingHorizontal={0}
      backgroundColor={'white'}
      scrollEnabled={true}
      headerUnScrollable={() => (
        <View>
          <TopBar title={'Reset Password'} />
          <CustomHorizontalLine height={1} />
        </View>
      )}
    >
     

     <ImageFast
        source={images.reset}
        style={{
          height: 96,
          width: 96,
          alignSelf: 'center',
          resizeMode: 'contain',
          marginTop: 50,
        }}
      />
      <CustomText
        label={'Create a new password'}
        fontSize={24}
        fontWeight={600}
        color={'#0E121B'}
        textAlign={'center'}
        marginTop={15}
        lineHeight={32}
      />

      <CustomText
        label={'Make sure it’s strong and easy to remember.'}
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
      <View style={{ paddingHorizontal: 30, marginTop: 20 }}>
        <CustomText
          fontSize={14}
          fontWeight={400}
          color={'#0E121B'}
          letterSpacing={-0.6}
          label={'New Password'}
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
        <View style={styles.barcontainer}>
          <View style={styles.bar}></View>
          <View style={styles.bar}></View>
          <View style={styles.bar}></View>
        </View>
      </View>
      <View style={styles.content}>
        <CustomText
          fontSize={14}
          fontWeight={400}
          color={'#525866'}
          letterSpacing={-0.6}
          marginBottom={8}
          label={'Must Contain at least;'}/>
          <CustomText
          fontSize={14}
          fontWeight={400}
          color={'#525866'}
          letterSpacing={-0.6}
          iconImage={images.tick}
          iconImageStyle={{
            width: 16,
            height: 16,
            marginRight: 8,
          }}
        //   marginTop={12}
          label={'At least 1 uppercase '}/>
          <CustomText
          fontSize={14}
          fontWeight={400}
          color={'#525866'}
          letterSpacing={-0.6}
          iconImage={images.tick}
          iconImageStyle={{
            width: 16,
            height: 16,
            marginRight: 8,
          }}
          label={'At least 1 Number'}/>
          <CustomText
          fontSize={14}
          fontWeight={400}
          color={'#525866'}
          letterSpacing={-0.6}
          iconImage={images.tick}
          iconImageStyle={{
            width: 16,
            height: 16,
            marginRight: 8,
          }}
          label={'At least 8 characters'}/>
         
      </View>
    </ScreenWrapper>
  );
};

export default ResetPass;

const styles = StyleSheet.create({
  barcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 25,
  },
  bar: {
    width: 100,
    height: 4,
    backgroundColor: '#E1E4EA',
    borderRadius: 1.2,
    color: '#E1E4EA',
  },
  content: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 6,
    marginTop: 20,
    paddingHorizontal: 30,
  },
});
