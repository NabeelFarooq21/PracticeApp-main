import { StyleSheet, TouchableOpacity, View, Alert } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import ScreenWrapper from '../../../../components/ScreenWrapper';
import TopBar from '../../../../components/auth/TopBar';
import CustomHorizontalLine from '../../../../components/CustomHorizontalLine';
import ImageFast from '../../../../components/ImageFast';
import { images } from '../../../../assets/Index';
import CustomText from '../../../../components/CustomText';
import CustomButton from '../../../../components/CustomButton';
import { launchImageLibrary } from 'react-native-image-picker';
import { storeData, StorageKeys } from '../../../../utils/storage'; // Add this import

const Avatar = () => {
  const navigation = useNavigation();
  const [selectedImage, setSelectedImage] = useState(null);

  const selectImage = () => {
    const options = {
      mediaType: 'photo',
      quality: 0.8,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        Alert.alert('Error', 'Could not select image');
      } else if (response.assets && response.assets.length > 0) {
        const source = { uri: response.assets[0].uri };
        setSelectedImage(source);
      }
    });
  };

  const handleSkip = () => {
    navigation.navigate('ReadyAcc');
  };

  const handleComplete = async () => { // Make this async
    if (selectedImage) {
      try {
        // Save that avatar selection is complete
        await storeData(StorageKeys.AVATAR_COMPLETE, true);
        
        // You can also save the image URI if you want to use it later
        // await storeData(StorageKeys.AVATAR_IMAGE, selectedImage.uri);
        
        navigation.navigate('ReadyAcc');
      } catch (error) {
        Alert.alert('Error', 'Failed to save avatar selection');
      }
    } else {
      Alert.alert('Select Avatar', 'Please choose an avatar or skip for later');
    }
  };

  return (
    <ScreenWrapper
      paddingHorizontal={0}
      backgroundColor={'#ffffff'}
      scrollEnabled={false}
      headerUnScrollable={() => (
        <View>
          <TopBar title={'Avatar'} />
          <CustomHorizontalLine height={1} />
        </View>
      )}
    >
      <View style={styles.mainContent}>
        <View style={styles.imageContainer}>
          <ImageFast
            source={selectedImage || images.imgselect}
            style={styles.avatarImage}
          />
        </View>

        <CustomText
          label={'Set Profile Images'}
          fontSize={24}
          fontWeight={600}
          color={'#0E121B'}
          textAlign={'center'}
          marginTop={15}
        />

        <CustomText
          label={'Min 400x400px, PNG or JPEG'}
          fontSize={14}
          fontWeight={400}
          color={'#4B4D59'}
          textAlign={'center'}
          marginTop={8}
        />

        <CustomButton
          title={'Choose Avatar'}
          marginTop={25}
          color={'#525866'}
          fontSize={14}
          fontWeight={600}
          borderWidth={1}
          borderColor={'#E1E4EA'}
          width={120}
          backgroundColor={'#ffffff'}
          height={48}
          onPress={selectImage}
        />

        <TouchableOpacity onPress={handleSkip} style={styles.skipButton}>
          <CustomText
            label={'I will do it later'}
            color={'#0E121B'}
            fontSize={14}
            fontWeight={400}
            textAlign={'center'}
            marginTop={20}
            textDecorationLine={'underline'}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <CustomHorizontalLine height={1} />
        <View style={styles.buttonContainer}>
          <CustomButton
            backgroundColor={'#0E121B'}
            title={'Complete and earn'}
            icon={images.coinicon}
            extraText={'+25 Coins'}
            extraTextColor={'#FFD700'}
            icnWidth={20}
            icnHeight={20}
            borderRadius={12}
            color={'white'}
            fontSize={16}
            height={56}
            onPress={handleComplete}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  imageContainer: {
    width: 120,
    height: 120,
    borderRadius: 75,
    borderWidth: 1,
    borderColor: '#E1E4EA',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  avatarImage: {
    height: 120,
    width: 120,
    resizeMode: 'cover',
  },
  skipButton: {
    marginTop: 20,
  },
  footer: {
    paddingBottom: 40,
  },
  buttonContainer: {
    paddingHorizontal: 20,
    marginTop: 15,
  },
});