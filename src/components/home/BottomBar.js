import { StyleSheet, View, TouchableOpacity } from 'react-native';
import React from 'react';
import ImageFast from '../ImageFast';
import { images } from '../../assets/Index';

const BottomBar = ({ marginTop = 0, marginBottom = 0, onPress }) => {
  return (
    <View
      style={[
        styles.container,
        { marginTop: marginTop, marginBottom: marginBottom },
      ]}
    >
      <View style={styles.iconContainer}>
        {[
          images.bottombaricon1,
          images.bottombaricon2,
          images.bottombaricon3,
          images.bottombaricon4,
          images.bottombaricon5,
        ].map((icon, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.7}
            onPress={() => onPress?.(index)} // optional callback
          >
            <ImageFast source={icon} style={{ width: 24, height: 24 }} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default BottomBar;

const styles = StyleSheet.create({
  container: {
   
    backgroundColor: '#6f0707ff', 
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderTopWidth: 0.5,
    borderTopColor: '#ccc',
    width: '100%',
    height: 70,
   
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    
  },
});
