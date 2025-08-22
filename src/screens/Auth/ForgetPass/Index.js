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

const ForgetPass = () => {
  const navigation = useNavigation();
  
  return (
    <ScreenWrapper
      backgroundColor={'white'}
      paddingHorizontal={0}
            scrollEnabled={true}

      headerUnScrollable={() => (
        <View>
          <TopBar title={'Forget Password'} />

          <CustomHorizontalLine height={1} />
        </View>
      )}
    >
      <ImageFast
        source={images.forgot}
        style={{
          height: 96,
          width: 96,
          alignSelf: 'center',
          resizeMode: 'contain',
          marginTop: 50,
        }}
      />

      <CustomText
        label={'Forgot your password?'}
        fontSize={24}
        fontWeight={600}
        color={'#0E121B'}
        textAlign={'center'}
        marginTop={15}
        lineHeight={32}
      />

      <CustomText
        label={'No worries! We’ll help you reset it in a few steps.'}
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
<View style={{paddingHorizontal:30,
            marginTop: 25,

}}>
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
        <CustomButton
          title={'Send Code'}
          borderRadius={16}
          color={'white'}
          backgroundColor={'black'}
          borderWidth={1}
          borderColor={'#E1E4EA'}
          fontSize={18}
          fontWeight={600}
          marginTop={16}
          letterSpacing={-0.3}
          onPress={()=>navigation.navigate('VerifyOtp')}
        />
<View style={{paddingTop:220}}>
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
        </View>

        
    </ScreenWrapper>
  );
};

export default ForgetPass;

const styles = StyleSheet.create({
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
   lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginBottom: 10,
    marginTop: 18,
    
  },
});
