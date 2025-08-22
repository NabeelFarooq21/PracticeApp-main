import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
} from 'react-native';
import React, { useState, useRef, useEffect } from 'react';
import ScreenWrapper from '../../../components/ScreenWrapper';
import TopBar from '../../../components/auth/TopBar';
import CustomHorizontalLine from '../../../components/CustomHorizontalLine';
import ImageFast from '../../../components/ImageFast';
import { images } from '../../../assets/Index';
import CustomText from '../../../components/CustomText';
import CustomButton from '../../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const VerifyOtp = () => {
  const navigation = useNavigation();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [isOtpComplete, setIsOtpComplete] = useState(false);
  const inputRefs = useRef([]);

  // Check if all OTP fields are filled
  useEffect(() => {
    const complete = otp.every(digit => digit !== '');
    setIsOtpComplete(complete);
  }, [otp]);

  const handleOtpChange = (text, index) => {
    // Allow only numbers
    if (!/^\d*$/.test(text)) return;

    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Auto focus to next input
    if (text !== '' && index < 5) {
      inputRefs.current[index + 1].focus();
    }

    // Auto submit if all fields are filled
    if (text !== '' && index === 5) {
      Keyboard.dismiss();
    }
  };

  const handleKeyPress = (e, index) => {
    // Handle backspace
    if (e.nativeEvent.key === 'Backspace' && otp[index] === '' && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleVerify = () => {
    const enteredOtp = otp.join('');
    // Handle OTP verification logic here
    console.log('Entered OTP:', enteredOtp);
  };

  // Function to set cursor to end when input is focused
  const handleFocus = (index) => {
    // Set timeout to ensure the cursor moves to the end after the component renders
    setTimeout(() => {
      if (inputRefs.current[index]) {
        inputRefs.current[index].setNativeProps({
          selection: { start: otp[index].length, end: otp[index].length }
        });
      }
    }, 50);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScreenWrapper
        paddingHorizontal={0}
        backgroundColor={'white'}
        scrollEnabled={true}
        headerUnScrollable={() => (
          <View>
            <TopBar title={'Verification Code'} />
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
          label={'Enter Your Verification Code'}
          fontSize={24}
          fontWeight={600}
          color={'#0E121B'}
          textAlign={'center'}
          marginTop={15}
          lineHeight={32}
        />

        <CustomText
          label={'We sent a code to +1 555-123-4567. '}
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
        <View style={{ paddingHorizontal: 25 }}>
          {/* OTP Input Fields */}
          <View style={styles.otpContainer}>
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                ref={ref => (inputRefs.current[index] = ref)}
                style={styles.otpInput}
                value={digit}
                onChangeText={text => handleOtpChange(text, index)}
                onKeyPress={e => handleKeyPress(e, index)}
                onFocus={() => handleFocus(index)}
                keyboardType="numeric"
                maxLength={1}
                textAlign="center"
                fontSize={20}
                fontWeight="600"
                selectionColor="#0E121B" // Custom cursor color
              />
            ))}
          </View>


          <View style={styles.resendContainer}>
            <CustomText
              label={'Experiencing issues receiving the code? '}
              fontSize={16}
              fontWeight={400}
              color={'#525866'}
            />
            <TouchableWithoutFeedback
              onPress={() => console.log('Resend code')}
            >
              <View>
                <CustomText
                  label={'Resend Code'}
                  fontSize={14}
                  lineHeight={20}
                  fontWeight={600}
                  color={'#0E121B'}
                  marginTop={1}
                  letterSpacing={-0.3}
                  textDecorationLine={'underline'}
                />
              </View>
            </TouchableWithoutFeedback>
            
          <CustomButton
            title={'Verify'}
            borderRadius={16}
            color={isOtpComplete ? 'white' : '#525866'}
            backgroundColor={isOtpComplete ? 'black' : '#F5F7FA'}
            borderWidth={1}
            borderColor={isOtpComplete ? '#E1E4EA' : '#E1E4EA'}
            fontSize={18}
            fontWeight={600}
            marginTop={16}
            letterSpacing={-0.3}
            onPress={()=>navigation.navigate('ResetPass')}
            disabled={!isOtpComplete}
          />
          </View>
        </View>
      </ScreenWrapper>
    </TouchableWithoutFeedback>
  );
};

export default VerifyOtp;

const styles = StyleSheet.create({
  otpContainer: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 40,
  },
  otpInput: {
    width: 48,
    height: 56,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E1E4EA',
    backgroundColor: 'white',
    color: '#0E121B',
    fontSize: 24,
    fontWeight: '600',
  },
  resendContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
  },
});