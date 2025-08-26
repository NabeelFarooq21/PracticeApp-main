import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
  Platform,
  TouchableOpacity,
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
  const backspaceLongPressTimer = useRef(null);
  const isProcessingInput = useRef(false); // To prevent race conditions

  // Check if all OTP fields are filled
  useEffect(() => {
    const complete = otp.every(digit => digit !== '');
    setIsOtpComplete(complete);
  }, [otp]);

  const handleOtpChange = (text, index) => {
    // Prevent race conditions with fast typing
    if (isProcessingInput.current) return;
    isProcessingInput.current = true;
    
    // Allow only numbers
    if (!/^\d*$/.test(text)) {
      isProcessingInput.current = false;
      return;
    }

    const newOtp = [...otp];

    // If user pasted multiple digits or typed quickly with multiple characters
    if (text.length > 1) {
      const chars = text.split('');
      for (let i = 0; i < chars.length && index + i < 6; i++) {
        newOtp[index + i] = chars[i];
      }
      setOtp(newOtp);

      // Focus last filled box with a slight delay for smoothness
      const nextIndex = Math.min(index + text.length, 5);
      setTimeout(() => {
        inputRefs.current[nextIndex]?.focus();
        isProcessingInput.current = false;
      }, 10);
      return;
    }

    // Normal single digit
    newOtp[index] = text;
    setOtp(newOtp);

    // Auto focus to next input with a slight delay for better UX
    if (text !== '' && index < 5) {
      setTimeout(() => {
        inputRefs.current[index + 1]?.focus();
        isProcessingInput.current = false;
      }, 10);
    } else if (text !== '' && index === 5) {
      // Auto dismiss if last filled
      setTimeout(() => {
        Keyboard.dismiss();
        isProcessingInput.current = false;
      }, 10);
    } else {
      isProcessingInput.current = false;
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace') {
      // Start timer for long press
      backspaceLongPressTimer.current = setTimeout(() => {
        clearAllOtpFields();
      }, 500); // 500ms delay for long press
    }
  };

  const handleKeyRelease = (e, index) => {
    if (e.nativeEvent.key === 'Backspace') {
      // Clear the long press timer
      if (backspaceLongPressTimer.current) {
        clearTimeout(backspaceLongPressTimer.current);
        backspaceLongPressTimer.current = null;
      }
      
      // Handle normal backspace
      if (otp[index] !== '') {
        // Just clear current box
        const newOtp = [...otp];
        newOtp[index] = '';
        setOtp(newOtp);
      } else if (index > 0) {
        // Go back and clear previous
        inputRefs.current[index - 1]?.focus();
        const newOtp = [...otp];
        newOtp[index - 1] = '';
        setOtp(newOtp);
      }
    }
  };

  const clearAllOtpFields = () => {
    setOtp(['', '', '', '', '', '']);
    inputRefs.current[0]?.focus();
  };

  const handleVerify = () => {
    const enteredOtp = otp.join('');
    console.log('Entered OTP:', enteredOtp);
  };

  // Set cursor to end for better UX
  const handleFocus = (index) => {
    setTimeout(() => {
      if (inputRefs.current[index]) {
        inputRefs.current[index].setNativeProps({
          selection: { start: otp[index].length, end: otp[index].length }
        });
      }
    }, 50);
  };

  // Handle text input for better cross-platform support
  const handleTextInput = (event, index) => {
    // This helps with fast typing on some Android devices
    const text = event.nativeEvent.text;
    if (text && text.length > 0) {
      handleOtpChange(text, index);
    }
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
                onKeyRelease={e => handleKeyRelease(e, index)}
                onFocus={() => handleFocus(index)}
                onTextInput={e => handleTextInput(e, index)}
                keyboardType="numeric"
                maxLength={6} // Allow pasting multiple digits
                textAlign="center"
                fontSize={20}
                fontWeight="600"
                selectionColor="#0E121B"
                caretHidden={false}
                contextMenuHidden={true} // Disable context menu for better UX
                selectTextOnFocus={Platform.OS === 'ios'} // Better iOS experience
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
            <TouchableOpacity
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
            </TouchableOpacity>

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
              onPress={() => navigation.navigate('ResetPass')}
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
    justifyContent: 'space-between',
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