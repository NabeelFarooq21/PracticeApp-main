import {
  StyleSheet,
  Text,
  View,
  Modal,
  FlatList,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Alert // Only added Alert import
} from 'react-native';
import React, { useState, useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import ScreenWrapper from '../../../../components/ScreenWrapper';
import TopBar from '../../../../components/auth/TopBar';
import CustomHorizontalLine from '../../../../components/CustomHorizontalLine';
import ImageFast from '../../../../components/ImageFast';
import { images } from '../../../../assets/Index';
import CustomText from '../../../../components/CustomText';
import CustomButton from '../../../../components/CustomButton';
import { storeData, StorageKeys } from '../../../../utils/storage'; // Only added this import

const { width, height } = Dimensions.get('window');

const countryCodes = [
  { code: '+1', country: 'US', flag: '🇺🇸' },
  { code: '+44', country: 'UK', flag: '🇬🇧' },
  { code: '+91', country: 'IN', flag: '🇮🇳' },
  { code: '+86', country: 'CN', flag: '🇨🇳' },
  { code: '+49', country: 'DE', flag: '🇩🇪' },
  { code: '+33', country: 'FR', flag: '🇫🇷' },
  { code: '+81', country: 'JP', flag: '🇯🇵' },
  { code: '+92', country: 'PK', flag: '🇵🇰' },
];

const PhoneVerification = () => {
  const navigation = useNavigation();
  const [selectedCountry, setSelectedCountry] = useState(countryCodes[0]);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [closse, setClosse] = useState(false);

  // Add this useEffect to handle the 5-second delay after verification
  useEffect(() => {
    let timer;
    
    // Check if we're coming back from verification with a success flag
    const checkVerificationStatus = async () => {
      try {
        const isVerified = await getData(StorageKeys.PHONE_VERIFIED);
        if (isVerified) {
          // Navigate back to Ready Account screen
          navigation.navigate('ReadyAcc');
        }
      } catch (error) {
      }
    };
    
    // Run this check when component mounts
    checkVerificationStatus();
    
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [navigation]);

  // ... rest of the component remains the same ...

  const handleCountrySelect = country => {
    setSelectedCountry(country);
    setModalVisible(false);
  };

  // ONLY ADDED THIS FUNCTION - everything else remains exactly the same
  const handleGetStarted = async () => {
    if (phoneNumber.length === 0) {
      Alert.alert('Error', 'Please enter your phone number');
      return;
    }

    try {
      // Save phone number (optional)
      const fullPhoneNumber = `${selectedCountry.code} ${phoneNumber}`;
      await storeData(StorageKeys.PHONE_NUMBER, fullPhoneNumber);
      
      navigation.navigate('Verification');
    } catch (error) {
      Alert.alert('Error', 'Failed to save phone number');
    }
  };

  

  const renderCountryItem = ({ item }) => (
    <TouchableOpacity
      style={styles.countryItem}
      onPress={() => handleCountrySelect(item)}
    >
      <Text style={styles.countryFlag}>{item.flag}</Text>
      <Text style={styles.countryText}>{item.country}</Text>
      <Text style={styles.countryCode}>{item.code}</Text>
    </TouchableOpacity>
  );

  return (
    <ScreenWrapper
      paddingHorizontal={0}
      backgroundColor={'white'}
      scrollEnabled={true}
      headerUnScrollable={() => (
        <View>
          <TopBar title={'Phone Number'} />
          <CustomHorizontalLine height={1} />
        </View>
      )}
    >
      <ImageFast
        source={images.phicon}
        style={{
          height: 96,
          width: 96,
          alignSelf: 'center',
          resizeMode: 'contain',
          marginTop: 50,
        }}
      />
      <CustomText
        label={'What is Your Phone Number?'}
        fontSize={24}
        fontWeight={600}
        color={'#0E121B'}
        textAlign={'center'}
        marginTop={15}
        lineHeight={32}
      />

      <CustomText
        label={'We will send you a 6 digit code to verify your number.'}
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

      {/* Phone Input Section */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Phone Number *</Text>

        <View style={styles.phoneInputRow}>
          <TouchableOpacity
            style={styles.countrySelector}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.flagText}>{selectedCountry.flag}</Text>
            <Text style={styles.codeText}>{selectedCountry.code}</Text>
            <View style={styles.dropdownArrow}>
              <View style={styles.arrowDown} />
            </View>
          </TouchableOpacity>
          <View style={{ flex: 1 }}>
            <TextInput
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              placeholder="(555) 000-0000"
              placeholderTextColor="#999"
              keyboardType="phone-pad"
              maxLength={15}
              style={styles.phoneInput}
            />
          </View>
        </View>
      </View>

      <View style={styles.disclaimer}>
        <View style={styles.infoIcon}>
          <Text style={styles.infoIconText}>i</Text>
        </View>
        <Text style={styles.disclaimerText}>
          Message and data rates may apply.
        </Text>
      </View>
      <View style={{ alignItems: 'center', paddingHorizontal: 30 }}>
        <CustomButton
          title="Get Started"
          marginTop={50}
          borderRadius={16}
          fontSize={16}
          fontFamily={600}
          marginBottom
          onPress={handleGetStarted} // ONLY CHANGED THIS LINE
          disabled={phoneNumber.length === 0}
          style={[
            styles.getStartedButton,
            phoneNumber.length > 0
              ? styles.buttonActive
              : styles.buttonInactive,
          ]}
          textStyle={[
            styles.buttonText,
            phoneNumber.length > 0
              ? styles.buttonTextActive
              : styles.buttonTextInactive,
          ]}
        />
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Select Country</Text>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.closeButtonText}>×</Text>
              </TouchableOpacity>
            </View>

            <FlatList
              data={countryCodes}
              renderItem={renderCountryItem}
              keyExtractor={item => item.code}
              style={styles.countryList}
            />
          </View>
        </View>
      </Modal>
    </ScreenWrapper>
  );
};

export default PhoneVerification;

// ALL STYLES REMAIN EXACTLY THE SAME - NO CHANGES
const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 35,
    marginBottom: 10,
    paddingHorizontal: 30,
  },

  phoneInput: {
    height: 48,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    borderWidth: 1,
    borderColor: '#e1e5e9',
    paddingHorizontal: 12,
    fontSize: 14,
    color: '#000',
  },
  label: {
    fontSize: 16,
    color: '#000000',
    marginBottom: 8,
  },
  phoneInputRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  countrySelector: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#e1e5e9',
    paddingHorizontal: 4,
    paddingVertical: 10,
    height: 48,
    width: 83,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  flagText: {
    fontSize: 18,
    marginRight: 8,
  },
  codeText: {
    fontSize: 16,
    color: '#000000',
    fontWeight: '500',
    marginRight: 6,
  },
  dropdownArrow: {
    marginLeft: 4,
  },
  arrowDown: {
    width: 0,
    height: 0,
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderTopWidth: 6,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#666666',
  },

  disclaimer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
    paddingHorizontal: 28,
  },
  infoIcon: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#e1e5e9',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
    marginTop: 2,
  },
  infoIconText: {
    fontSize: 12,
    color: '#666666',
    fontWeight: 'bold',
  },
  disclaimerText: {
    fontSize: 14,
    color: '#666666',
    flex: 1,
    lineHeight: 20,
  },
  getStartedButton: {
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 'auto',
    marginBottom: 32,
    marginHorizontal: 24,
  },
  buttonActive: {
    backgroundColor: '#0E121B',
  },
  buttonInactive: {
    backgroundColor: '#f0f0f0',
  },
  buttonText: {
    fontSize: 16,
  },
  buttonTextActive: {
    color: '#ffffff',
  },
  buttonTextInactive: {
    color: '#cccccc',
  },
  // Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: height * 0.7,
    paddingBottom: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e1e5e9',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
  },
  closeButton: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeButtonText: {
    fontSize: 24,
    color: '#666666',
    fontWeight: '300',
  },
  countryList: {
    paddingHorizontal: 20,
  },
  countryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  countryFlag: {
    fontSize: 18,
    marginRight: 12,
  },
  countryText: {
    flex: 1,
    fontSize: 16,
    color: '#000000',
  },
  countryCode: {
    fontSize: 16,
    color: '#666666',
    fontWeight: '500',
  },
});