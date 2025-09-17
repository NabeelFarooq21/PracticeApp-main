import AsyncStorage from '@react-native-async-storage/async-storage';

export const StorageKeys = {
  PERSONAL_INFO: 'personal_info',
  PROFILE_COMPLETE: 'profile_complete',
  AVATAR_COMPLETE: 'avatar_complete', 
  PHONE_VERIFIED: 'phone_verified', 
  PHONE_NUMBER: 'phone_number', 
};

export const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.error('Error storing data:', e);
  }
};

export const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error('Error retrieving data:', e);
    return null;
  }
};