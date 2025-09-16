import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import ScreenWrapper from '../../../../components/ScreenWrapper';
import ImageFast from '../../../../components/ImageFast';
import { images } from '../../../../assets/Index';
import CustomText from '../../../../components/CustomText';
import CustomButton from '../../../../components/CustomButton';

const ReadyAcc = () => {
  const navigation = useNavigation();
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
        <View style={styles.box1}>
          <View>
            <ImageFast
              source={images.ricon}
              style={{ width: 44, height: 44 }}
              resizeMode="cover"
            />
          </View>
          <View style={{ flexDirection: 'column' }}>
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
                fontSize={16}
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
          <View>
            <ImageFast
              source={images.checkicon}
              style={{ width: 24, height: 24 }}
              resizeMode="cover"
            />
          </View>
        </View>
        <View
          style={{ height: 18, width: 1, backgroundColor: '#E1E4EA' }}
        ></View>

        <View style={styles.box2}>
          <View style={{ flexDirection: 'row', gap: 13 }}>
            <View>
              <ImageFast
                source={images.ricon2}
                style={{ width: 44, height: 44 }}
                resizeMode="cover"
              />
            </View>
            <View style={{ flexDirection: 'column' }}>
              <CustomText
                label={'Complete Profile'}
                fontFamily={600}
                fontSize={16}
                color={'#0E121B'}
              />
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
          <View style={{ flexDirection: 'row', gap: 6 }}>
            <TouchableOpacity
              style={{
                width: '310',
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
        </View>
        <View
          style={{ height: 18, width: 1, backgroundColor: '#E1E4EA' }}
        ></View>
        <View style={styles.box2}>
          <View style={{ flexDirection: 'row', gap: 13 }}>
            <View>
              <ImageFast
                source={images.ricon3}
                style={{ width: 44, height: 44 }}
                resizeMode="cover"
              />
            </View>
            <View style={{ flexDirection: 'column' }}>
              <CustomText
                label={'Choose an Avatar'}
                fontFamily={600}
                fontSize={16}
                color={'#0E121B'}
              />
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
          <View style={{ flexDirection: 'row', gap: 6 }}>
            <TouchableOpacity
              style={{
                width: '310',
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
        </View>
        <View
          style={{ height: 18, width: 1, backgroundColor: '#E1E4EA' }}
        ></View>
        <View style={styles.box2}>
          <View style={{ flexDirection: 'row', gap: 13 }}>
            <View>
              <ImageFast
                source={images.rcicon3}
                style={{ width: 44, height: 44 }}
                resizeMode="cover"
              />
            </View>
            <View style={{ flexDirection: 'column' }}>
              <CustomText
                label={'Phone Verification'}
                fontFamily={600}
                fontSize={16}
                color={'#0E121B'}
              />
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
          <View style={{ flexDirection: 'row', gap: 6 }}>
            <TouchableOpacity
              style={{
                width: '310',
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
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default ReadyAcc;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    // justifyContent: 'center',
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
