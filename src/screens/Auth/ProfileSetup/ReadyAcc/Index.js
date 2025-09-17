import { StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import ScreenWrapper from '../../../../components/ScreenWrapper';
import ImageFast from '../../../../components/ImageFast';
import { images } from '../../../../assets/Index';
import CustomText from '../../../../components/CustomText';
import CustomButton from '../../../../components/CustomButton';
import { getData, StorageKeys } from '../../../../utils/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ReadyAcc = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [profileComplete, setProfileComplete] = useState(false);
  const [avatarComplete, setAvatarComplete] = useState(false);
  const [phoneVerified, setPhoneVerified] = useState(false);

  useEffect(() => {
    if (isFocused) {
      checkProfileCompletion();
      checkAvatarCompletion();
      checkPhoneVerification();
    }
  }, [isFocused]);

  // Add this useEffect to handle the 5-second delay navigation
  useEffect(() => {
    let timer;
    
    // Check if all tasks are completed
    if (profileComplete && avatarComplete && phoneVerified) {
      timer = setTimeout(() => {
        navigation.navigate('AllSet');
      }, 5000); // 5 seconds delay
    }
    
    // Clean up the timer when component unmounts or dependencies change
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [profileComplete, avatarComplete, phoneVerified, navigation]);

  const checkProfileCompletion = async () => {
    try {
      const isComplete = await getData(StorageKeys.PROFILE_COMPLETE);
      setProfileComplete(!!isComplete);
    } catch (error) {
      console.error('Error checking profile completion:', error);
    }
  };

  const checkAvatarCompletion = async () => {
    try {
      const isComplete = await getData(StorageKeys.AVATAR_COMPLETE);
      setAvatarComplete(!!isComplete);
    } catch (error) {
      console.error('Error checking avatar completion:', error);
    }
  };

  const checkPhoneVerification = async () => {
    try {
      const isVerified = await getData(StorageKeys.PHONE_VERIFIED);
      setPhoneVerified(!!isVerified);
    } catch (error) {
      console.error('Error checking phone verification:', error);
    }
  };

  // Function to reset all data
  const resetAllData = async () => {
    try {
      // Remove all saved data
      await AsyncStorage.multiRemove([
        StorageKeys.PROFILE_COMPLETE,
        StorageKeys.PERSONAL_INFO,
        StorageKeys.AVATAR_COMPLETE,
        StorageKeys.PHONE_VERIFIED,
      ]);

      // Update all states to false
      setProfileComplete(false);
      setAvatarComplete(false);
      setPhoneVerified(false);

      Alert.alert(
        'Success',
        'All data has been reset! You can now enter new information.',
      );
    } catch (error) {
      Alert.alert('Error', 'Failed to reset data');
      console.error('Error resetting data:', error);
    }
  };

  // Function to confirm reset
  const confirmReset = () => {
    Alert.alert(
      'Reset Data',
      'Are you sure you want to delete all saved information? This will reset your profile, avatar, and phone verification.',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', onPress: resetAllData, style: 'destructive' },
      ],
    );
  };

  return (
    <ScreenWrapper
      paddingHorizontal={0}
      backgroundColor={'white'}
      scrollEnabled={true}
    >
      <View style={styles.container}>
        <ImageFast
          source={images.readyacc}
          style={{ width: 96, height: 96, alignSelf: 'center', marginTop: 70 }}
          resizeMode="cover"
        />
        <CustomText
          alignSelf="center"
          label={'Your Account is Ready'}
          fontFamily={600}
          fontSize={24}
          textAlign="center"
          color={'#0E121B'}
        />
        <CustomText
          alignSelf="center"
          label={
            'Let’s complete your profile to unlock all features and start earning Social Score.'
          }
          fontFamily={400}
          fontSize={16}
          textAlign="center"
          color={'#525866'}
          marginTop={8}
          lineHeight={24}
        />

        {/* First Box - Always completed - Make checkicon pressable */}
        <View style={[styles.box1, profileComplete && styles.box1]}>
          <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
            <View>
              <ImageFast
                source={images.ricon}
                style={{ width: 44, height: 44 }}
                resizeMode="cover"
              />
            </View>
            <View style={{ flexDirection: 'column', marginLeft: 13, flex: 1 }}>
              <View
                style={{ flexDirection: 'row', gap: 6, alignItems: 'center' }}
              >
                <CustomText
                  label={'Locaided Account'}
                  fontFamily={600}
                  fontSize={16}
                  color={'#0E121B'}
                />
                <ImageFast
                  source={images.coinicon}
                  style={{ width: 16, height: 16 }}
                  resizeMode="cover"
                />
                <CustomText
                  label={'+25 Points'}
                  fontFamily={600}
                  fontSize={15}
                  color={'#FF2557'}
                />
              </View>
              <View>
                <CustomText
                  label={'You’ve successfully signed up.'}
                  fontFamily={400}
                  fontSize={14}
                  color={'#525866'}
                  marginTop={4}
                />
              </View>
            </View>
          </View>
          <TouchableOpacity onPress={confirmReset}>
            <ImageFast
              source={images.checkicon}
              style={{ width: 24, height: 24 }}
              resizeMode="cover"
            />
          </TouchableOpacity>
        </View>
        <View
          style={{ height: 18, width: 1, backgroundColor: '#E1E4EA' }}
        ></View>

        {/* Second Box - Profile Completion */}
        <View style={[styles.box2, profileComplete && styles.boxcompleted]}>
          <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
            <View>
              <ImageFast
                source={images.ricon2}
                style={{ width: 44, height: 44 }}
                resizeMode="cover"
              />
            </View>
            <View style={{ flexDirection: 'column', marginLeft: 13, flex: 1 }}>
              <View
                style={{ flexDirection: 'row', gap: 6, alignItems: 'center' }}
              >
                <CustomText
                  label={'Personal Information'}
                  fontFamily={600}
                  fontSize={16}
                  color={'#0E121B'}
                />
                {profileComplete && (
                  <>
                    <ImageFast
                      source={images.coinicon}
                      style={{ width: 16, height: 16 }}
                      resizeMode="cover"
                    />
                    <CustomText
                      label={'+50 Points'}
                      fontFamily={600}
                      fontSize={15}
                      color={'#FF2557'}
                    />
                  </>
                )}
              </View>
              <View>
                <CustomText
                  label={'Let others recognize connect with you.'}
                  fontFamily={400}
                  fontSize={14}
                  color={'#525866'}
                  marginTop={4}
                />
              </View>
            </View>
          </View>
          {!profileComplete ? (
            <View style={{ flexDirection: 'row', gap: 6 }}>
              <TouchableOpacity
                style={{
                  width: '100%',
                  height: 33,
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 8,
                  borderWidth: 1,
                  padding: 6,
                  borderColor: '#E1E4EA',
                  flexDirection: 'row',
                  gap: 6,
                }}
                onPress={() => navigation.navigate('PersonalInformation')}
              >
                <CustomText
                  label={'Continue'}
                  fontFamily={600}
                  fontSize={14}
                  color={'#525866'}
                />
                <ImageFast
                  source={images.coinicon}
                  style={{ width: 16, height: 16 }}
                  resizeMode="cover"
                />
                <CustomText
                  label={'+50 Points'}
                  fontFamily={600}
                  fontSize={14}
                  color={'#FF2557'}
                />
              </TouchableOpacity>
            </View>
          ) : (
            <View>
              <ImageFast
                source={images.checkicon}
                style={{ width: 24, height: 24 }}
                resizeMode="cover"
              />
            </View>
          )}
        </View>

        <View
          style={{ height: 18, width: 1, backgroundColor: '#E1E4EA' }}
        ></View>
        
        {/* Third Box - Avatar Selection */}
        <View style={[styles.box2, avatarComplete && styles.boxcompleted]}>
          <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
            <View>
              <ImageFast
                source={images.ricon3}
                style={{ width: 44, height: 44 }}
                resizeMode="cover"
              />
            </View>
            <View style={{ flexDirection: 'column', marginLeft: 13, flex: 1 }}>
              <View
                style={{ flexDirection: 'row', gap: 6, alignItems: 'center' }}
              >
                <CustomText
                  label={'Choose an Avatar'}
                  fontFamily={600}
                  fontSize={16}
                  color={'#0E121B'}
                />
                {avatarComplete && (
                  <>
                    <ImageFast
                      source={images.coinicon}
                      style={{ width: 16, height: 16 }}
                      resizeMode="cover"
                    />
                    <CustomText
                      label={'+25 Points'}
                      fontFamily={600}
                      fontSize={15}
                      color={'#FF2557'}
                    />
                  </>
                )}
              </View>
              <View>
                <CustomText
                  label={'Pick a character that represents you.'}
                  fontFamily={400}
                  fontSize={14}
                  color={'#525866'}
                  marginTop={4}
                />
              </View>
            </View>
          </View>
          {!avatarComplete ? (
            <View style={{ flexDirection: 'row', gap: 6 }}>
              <TouchableOpacity
                style={{
                  width: '100%',
                  height: 33,
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 8,
                  borderWidth: 1,
                  padding: 6,
                  borderColor: '#E1E4EA',
                  flexDirection: 'row',
                  gap: 6,
                }}
                onPress={() => navigation.navigate('Avatar')}
              >
                <CustomText
                  label={'Continue'}
                  fontFamily={600}
                  fontSize={14}
                  color={'#525866'}
                />
                <ImageFast
                  source={images.coinicon}
                  style={{ width: 16, height: 16 }}
                  resizeMode="cover"
                />
                <CustomText
                  label={'+25 Points'}
                  fontFamily={600}
                  fontSize={14}
                  color={'#FF2557'}
                />
              </TouchableOpacity>
            </View>
          ) : (
            <View>
              <ImageFast
                source={images.checkicon}
                style={{ width: 24, height: 24 }}
                resizeMode="cover"
              />
            </View>
          )}
        </View>
        <View
          style={{ height: 18, width: 1, backgroundColor: '#E1E4EA' }}
        ></View>
        
        {/* Fourth Box - Phone Verification */}
        <View style={[styles.box2, phoneVerified && styles.boxcompleted]}>
          <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
            <View>
              <ImageFast
                source={images.rcicon3}
                style={{ width: 44, height: 44 }}
                resizeMode="cover"
              />
            </View>
            <View style={{ flexDirection: 'column', marginLeft: 13, flex: 1 }}>
              <View
                style={{ flexDirection: 'row', gap: 6, alignItems: 'center' }}
              >
                <CustomText
                  label={'Phone Verification'}
                  fontFamily={600}
                  fontSize={16}
                  color={'#0E121B'}
                />
                {phoneVerified && (
                  <>
                    <ImageFast
                      source={images.coinicon}
                      style={{ width: 16, height: 16 }}
                      resizeMode="cover"
                    />
                    <CustomText
                      label={'+25 Points'}
                      fontFamily={600}
                      fontSize={15}
                      color={'#FF2557'}
                    />
                  </>
                )}
              </View>
              <View>
                <CustomText
                  label={'Build trust and unlock more features.'}
                  fontFamily={400}
                  fontSize={14}
                  color={'#525866'}
                  marginTop={4}
                />
              </View>
            </View>
          </View>
          {!phoneVerified ? (
            <View style={{ flexDirection: 'row', gap: 6 }}>
              <TouchableOpacity
                style={{
                  width: '100%',
                  height: 33,
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 8,
                  borderWidth: 1,
                  padding: 6,
                  borderColor: '#E1E4EA',
                  flexDirection: 'row',
                  gap: 6,
                }}
                onPress={() => navigation.navigate('PhoneVerification')}
              >
                <CustomText
                  label={'Continue'}
                  fontFamily={600}
                  fontSize={14}
                  color={'#525866'}
                />
                <ImageFast
                  source={images.coinicon}
                  style={{ width: 16, height: 16 }}
                  resizeMode="cover"
                />
                <CustomText
                  label={'+25 Points'}
                  fontFamily={600}
                  fontSize={14}
                  color={'#FF2557'}
                />
              </TouchableOpacity>
            </View>
          ) : (
            <View>
              <ImageFast
                source={images.checkicon}
                style={{ width: 24, height: 24 }}
                resizeMode="cover"
              />
            </View>
          )}
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default ReadyAcc;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    flex: 1,
  },
 
  box1: {
    marginTop: 25,
    alignItems: 'center',
    flexDirection: 'row',
    gap: 13,
    width: '100%',
    paddingHorizontal: 20,
    borderColor: '#FF2557',
    borderWidth: 1,
    borderRadius: 16,
    paddingVertical: 16,
  },
  boxcompleted: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 13,
    width: '100%',
    paddingHorizontal: 20,
    borderColor: '#FF2557',
    borderWidth: 1,
    borderRadius: 16,
    paddingVertical: 22,
  },
  box2: {
    alignItems: 'center',
    gap: 13,
    width: '100%',
    paddingHorizontal: 20,
    borderColor: '#E1E4EA',
    borderWidth: 1,
    borderRadius: 16,
    paddingVertical: 18,
  },
});