import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Platform,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { images } from '../../assets/Index';
import ImageFast from '../../components/ImageFast';
const { width, height } = Dimensions.get('window');
const responsiveSize = size => {
  const scale = width / 375;
  return Math.round(size * scale);
};

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <ImageFast
          source={images.headerlogo}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <ImageFast
            source={images.headerchat}
            style={styles.icon}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <ImageFast
            source={images.headerheart}
            style={styles.icon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: responsiveSize(5),
marginTop: Platform.OS === 'ios' ? 40 : (StatusBar.currentHeight || 40),

    width: '100%',
    paddingHorizontal: responsiveSize(20),
    
  },
  logoContainer: {
    flex: 1,
  },
  logo: {
    width: responsiveSize(102),
    height: responsiveSize(20),
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: responsiveSize(10),
  },

  icon: {
    width: responsiveSize(24),
    height: responsiveSize(24),
  },
});
