import {
  StyleSheet,
  Text,
  View,
  Modal,
  FlatList,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import ScreenWrapper from '../../../components/ScreenWrapper';
import ImageFast from '../../../components/ImageFast';
import { images } from '../../../assets/Index';
import CustomText from '../../../components/CustomText';
import CustomButton from '../../../components/CustomButton';

const LocationAccess = () => {
  const navigation = useNavigation();
  return (
    <ScreenWrapper paddingHorizontal={0} backgroundColor={'#ffffffff'}>
      <ImageFast
        source={images.locatiomimg}
        style={{ width: 293, height: 650, alignSelf: 'center', marginTop: 95 }}
        resizeMode="cover"
      />
      <ImageFast
        source={images.overlay}
        style={{ width: '100%', height: 458, position: 'absolute', top: 460 }}
        resizeMode="cover"
      />
      <ImageFast
        source={images.locationicon}
        style={{
          width: 96,
          height: 96,
          position: 'absolute',
          top: 340,
          alignSelf: 'center',
        }}
        resizeMode="contain"
      />
      <View style={styles.container}>
        <CustomText
          alignSelf="center"
          label={'We Need Your Location'}
          fontFamily={600}
          fontSize={24}
          textAlign="center"
          color={'#0E121B'}
        />
        <CustomText
          alignSelf="center"
          label={
            'Locaided uses your location to help you discover and share real-time moments around you.'
          }
          fontFamily={400}
          fontSize={16}
          textAlign="center"
          color={'#525866'}
          marginTop={8}
          lineHeight={24}
        />
        <CustomButton
          title={'Grant Access to Location'}
          marginTop={30}
          borderRadius={16}
          color={'white'}
          borderWidth={1}
          borderColor={'#E1E4EA'}
        />
      </View>
    </ScreenWrapper>
  );
};

export default LocationAccess;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 620,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 20,
  },
});
