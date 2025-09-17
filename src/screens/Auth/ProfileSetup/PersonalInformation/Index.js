import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Modal,
  Alert
} from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import ScreenWrapper from '../../../../components/ScreenWrapper';
import ImageFast from '../../../../components/ImageFast';
import { images } from '../../../../assets/Index';
import CustomText from '../../../../components/CustomText';
import CustomButton from '../../../../components/CustomButton';
import TopBar from '../../../../components/auth/TopBar';
import CustomHorizontalLine from '../../../../components/CustomHorizontalLine';
import CustomInput from '../../../../components/CustomInput';
import { storeData, StorageKeys } from '../../../../utils/storage'; // Add this import

const PersonalInformation = () => {
  const [gender, setGender] = useState('Male'); // default Male
  const [showGenderOptions, setShowGenderOptions] = useState(false);
  const [fullName, setFullName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [dob, setDob] = useState('');
  const navigation = useNavigation();
  
  const genderOptions = ['Male', 'Female', 'Other'];

  const handleComplete = async () => {
    // Validate inputs
    if (!fullName || !lastName || !username || !dob) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    // Save personal info
    const personalInfo = {
      fullName,
      lastName,
      username,
      dob,
      gender
    };

    try {
      await storeData(StorageKeys.PERSONAL_INFO, personalInfo);
      await storeData(StorageKeys.PROFILE_COMPLETE, true);
      
      // Navigate back to ReadyAcc
      navigation.navigate('ReadyAcc');
    } catch (error) {
      Alert.alert('Error', 'Failed to save information');
    }
  };

  return (
    <ScreenWrapper
      paddingHorizontal={0}
      backgroundColor={'#ffffff'}
      scrollEnabled={true}
      headerUnScrollable={() => (
        <View>
          <TopBar title={'Personal Information'} />
          <CustomHorizontalLine height={1} />
        </View>
      )}
    >
    
        <View>
          <ImageFast
            source={images.create}
            style={{
              height: 96,
              width: 96,
              alignSelf: 'center',
              resizeMode: 'contain',
              marginTop: 30,
            }}
          />

          <CustomText
            label={'Personal Information'}
            fontSize={24}
            fontWeight={600}
            color={'#0E121B'}
            textAlign={'center'}
            marginTop={15}
            lineHeight={32}
          />

          <CustomText
            label={'Let others recognize and connect with you.'}
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
        </View>

        <View style={{ paddingHorizontal: 20, marginTop: 8 }}>
          <CustomText
            fontSize={14}
            fontWeight={400}
            color={'#0E121B'}
            letterSpacing={-0.6}
            label={'Full Name'}
            marginTop={10}
          />
          <CustomInput
            placeholder={'Jhon'}
            iconImage={images.personicon}
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
            value={fullName}
            onChangeText={setFullName}
          />
          <CustomText
            fontSize={14}
            fontWeight={400}
            color={'#0E121B'}
            letterSpacing={-0.6}
            label={'Last Name '}
            marginTop={10}
          />
          <CustomInput
            placeholder={'Doe'}
            iconImage={images.personicon}
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
            value={lastName}
            onChangeText={setLastName}
          />

          <CustomText
            fontSize={14}
            fontWeight={400}
            color={'#0E121B'}
            letterSpacing={-0.6}
            label={'Username'}
            marginTop={10}
          />
          <CustomInput
            placeholder={'jhondoe_01'}
            iconImage={images.usernameiicon}
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
            value={username}
            onChangeText={setUsername}
          />
          <View style={{ marginTop: 10, flexDirection: 'row' }}>
            <ImageFast
              source={images.infofilled}
              style={{
                width: 16,
                height: 16,
                tintColor: '#3772FF',
                marginTop: 3,
                marginRight: 6,
              }}
            />
            <CustomText
              fontSize={14}
              fontWeight={400}
              color={'#525866'}
              letterSpacing={-0.6}
              lineHeight={20}
              label={'Your public handle, like @coolname123'}
              textAlign={'center'}
            />
          </View>
          <CustomText
            fontSize={14}
            fontWeight={400}
            color={'#0E121B'}
            letterSpacing={-0.6}
            label={'Date of Birth'}
            marginTop={10}
          />
          <CustomInput
            placeholder={'Dec 12, 2004'}
            iconImage={images.dobicon}
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
            value={dob}
            onChangeText={setDob}
          />
          <CustomText
            fontSize={14}
            fontWeight={400}
            color={'#0E121B'}
            letterSpacing={-0.6}
            label={'Gender'}
            marginTop={10}
          />
          <CustomInput
            placeholder={gender}
            rightIcon={images.downicon}
            placeholderTextColor={'#525866'}
            borderRadius={12}
            borderColor="#E1E4EA"
            color={'black'}
            borderwidth={1}
            height={48}
            marginTop={5}
            rightIconStyle={{
              width: 20,
              height: 20,
              tintColor: 'black',
              marginRight: 8,
            }}
            onRightIconPress={() => setShowGenderOptions(true)}
          />
        
      </View>
      <CustomHorizontalLine height={1} marginTop={15} />
      <View style={{ paddingHorizontal: 20, marginTop: 15 , marginBottom: 30,justifyContent:'flex-end'}}>
          <CustomButton
            backgroundColor={'#0E121B'}
            title={'Complete and earn'}
            icon={images.coinicon}
            extraText={'+50 Coins'} 
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
      <Modal
  visible={showGenderOptions}
  transparent
  animationType="fade"
  onRequestClose={() => setShowGenderOptions(false)}
>
  <TouchableOpacity
    activeOpacity={1}
    onPressOut={() => setShowGenderOptions(false)} 
    style={{
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'rgba(0,0,0,0.3)',
    }}
  >
    <TouchableOpacity
      activeOpacity={1}
      style={{
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 15,
      }}
      onPress={() => {}}
    >
      <FlatList
        data={genderOptions}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{ padding: 12 }}
            onPress={() => {
              setGender(item);
              setShowGenderOptions(false);
            }}
          >
            <Text style={{ fontSize: 16, color: 'black' }}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </TouchableOpacity>
  </TouchableOpacity>
</Modal>

    </ScreenWrapper>
  );
};

export default PersonalInformation;