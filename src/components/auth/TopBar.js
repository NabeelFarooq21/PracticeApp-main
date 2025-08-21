import { StyleSheet, View, TouchableOpacity } from 'react-native';
import React from 'react';
import ImageFast from '../ImageFast';
import { images } from '../../assets/Index';
import CustomText from '../CustomText';
import { useNavigation } from '@react-navigation/native';

const TopBar = ({ title }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.leftIcon}>
        <ImageFast
          source={images.backicon}
          style={{ width: 24, height: 24 }}
          resizeMode="contain"
          onPress={() => navigation.goBack()}
        />
      </View>

      <CustomText
        label={title}
        fontFamily={400}
        fontSize={18}
        lineHeight={24}
        letterSpacing={-0.3}
        color={'black'}
      />
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  container: {
    height: 46,
    width: '100%',
    marginTop: 34,
    backgroundColor: 'white',

    justifyContent: 'center',
    alignItems: 'center',
  },
  leftIcon: {
    position: 'absolute',
    left: 20,
  },
});
