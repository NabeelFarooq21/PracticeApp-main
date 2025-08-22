import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import TopBar from '../../../components/auth/TopBar';
import CustomHorizontalLine from '../../../components/CustomHorizontalLine';
import ImageFast from '../../../components/ImageFast';
import { images } from '../../../assets/Index';
import FastImage from 'react-native-fast-image';
import CustomButton from '../../../components/CustomButton';
import CustomText from '../../../components/CustomText';
import CustomInput from '../../../components/CustomInput';
// import CustomInput from '../../../components/CustomInput';
import ScreenWrapper from '../../../components/ScreenWrapper';

const EmailLogin = () => {
  const navigation = useNavigation();
  return (
    <ScreenWrapper
      backgroundColor={'white'}
      scrollEnabled={true}
      paddingHorizontal={0}
      headerUnScrollable={() => (
        <View>
          <TopBar title={'Email Login'} />

          <CustomHorizontalLine height={1} />
        </View>
      )}
    >
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
        label={'Login to Your Account'}
        fontSize={24}
        fontWeight={600}
        color={'#0E121B'}
        textAlign={'center'}
        marginTop={15}
        lineHeight={32}
      />

      <CustomText
        label={'Login to continue sharing your local moments.'}
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
      <View
        style={{
          marginTop: 20,
          paddingHorizontal: 30,
        }}
      >
        <CustomText
          fontSize={14}
          fontWeight={400}
          color={'#0E121B'}
          letterSpacing={-0.6}
          // marginTop={20}
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
        <View
          style={{
            marginTop: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <CustomText
            fontSize={14}
            fontWeight={400}
            color={'#0E121B'}
            letterSpacing={-0.6}
            // marginTop={20}
            label={'Password'}
          />

          <CustomButton
            title={'Forgot Password?'}
            backgroundColor={'white'}
            color={'#525866'}
            width="110"
            height={17}
            fontSize={14}
            fontWeight={400}
            letterSpacing={-0.6}
            onPress={() => navigation.navigate('ForgetPass')}
          />
        </View>
        <CustomInput
          placeholder={'Password'}
          iconImage={images.lock}
          placeholderTextColor={'#525866'}
          borderRadius={12}
          color={'black'}
          borderColor="#E1E4EA"
          borderwidth={1}
          height={48}
          marginTop={5}
          leftIconStyle={{
            width: 20,
            height: 20,
            tintColor: 'black',
            marginRight: 8,
          }}
          rightIcon={images.eye} // 👈 yeh add kia
          secureTextEntry={true} // 👈 default password hide
        />

        <CustomButton
          title={'Login'}
          borderRadius={16}
          color={'white'}
          backgroundColor={'black'}
          borderWidth={1}
          borderColor={'#E1E4EA'}
          fontSize={18}
          fontWeight={600}
          marginTop={12}
          letterSpacing={-0.3}
        />
        <View style={styles.lineContainer}>
          <View style={styles.line}></View>
          <CustomText
            label={'Or'}
            fontSize={14}
            fontWeight={400}
            color={'black'}
            textAlign={'center'}
            letterSpacing={-0.3}
          />
          <View style={styles.line2}></View>
        </View>
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
          marginTop={16}
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
          marginTop={16}
        />

        <View style={styles.lineContainer}>
          <View style={styles.line}></View>
          <CustomText
            label={'Don’t have an account?'}
            fontSize={14}
            fontWeight={400}
            color={'black'}
            textAlign={'center'}
            letterSpacing={-0.3}
          />
          <View style={styles.line2}></View>
        </View>

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
          marginTop={16}
        />
      </View>
    </ScreenWrapper>
  );
};

export default EmailLogin;

const styles = StyleSheet.create({
  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginBottom: 10,
    marginTop: 18,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#E1E4EA',
    marginLeft: 0,
    marginRight: 8,
  },
  line2: {
    flex: 1,
    height: 1,
    backgroundColor: '#E1E4EA',
    // marginRight: 20,
    marginLeft: 8,
  },
});
