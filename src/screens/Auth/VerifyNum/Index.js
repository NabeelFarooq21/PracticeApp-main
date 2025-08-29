import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import ScreenWrapper from '../../../components/ScreenWrapper';
import TopBar from '../../../components/auth/TopBar';
import CustomHorizontalLine from '../../../components/CustomHorizontalLine';
import ImageFast from '../../../components/ImageFast';
import { images } from '../../../assets/Index';
import CustomText from '../../../components/CustomText';
import CustomButton from '../../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const CELL_COUNT = 6;

const VerifyOtp = () => {
  const navigation = useNavigation();
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const isOtpComplete = value.length === CELL_COUNT;

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
          {/* OTP Input Field using react-native-confirmation-code-field */}
          <CodeField
            ref={ref}
            {...props}
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.otpContainer}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({ index, symbol, isFocused }) => (
  <View
    key={index}
    style={[styles.otpInput, isFocused && styles.focusedInput]}
    onLayout={getCellOnLayoutHandler(index)}
  >
    <CustomText
      fontSize={20}
      fontWeight="600"
      color="#0E121B"
      textAlign="center"
    >
      {symbol || (isFocused ? <Cursor /> : '')}
    </CustomText>
  </View>
)}

          />

          <View style={styles.resendContainer}>
            <CustomText
              label={'Experiencing issues receiving the code? '}
              fontSize={16}
              fontWeight={400}
              color={'#525866'}
            />
            <TouchableOpacity onPress={() => {}}>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  focusedInput: {
    borderColor: '#0E121B',
  },
  resendContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
  },
});