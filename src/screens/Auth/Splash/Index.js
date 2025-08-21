import { StyleSheet, Text, View, Animated, Easing } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { images } from '../../../assets/Index';
import FastImage from 'react-native-fast-image';
import CustomText from '../../../components/CustomText';

const Splash = ({ navigation }) => {
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();

    const timer = setTimeout(() => {
      navigation.replace('Onboarding');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <FastImage
        source={images.logosplash}
        style={{ height: 120, width: 120, marginTop: 318 }}
      />
      <CustomText
        fontSize={16}
        marginTop={16}
        color="#fff"
        fontWeight="600"
        lineHeight="24"
        label={"People. Places. Proof"}
      />


      <Animated.View style={{ transform: [{ rotate: spin }], marginTop: 230 }}>
        <FastImage source={images.splash} style={{ height: 40, width: 40 }} />
      </Animated.View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(9, 11, 18, 1)',
  },
  text: {
    color: '#fff',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
    marginTop: 36,
  },
});
