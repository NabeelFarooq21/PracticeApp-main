import React from 'react';
import { View, StyleSheet } from 'react-native';

const CustomHorizontalLine = ({ height = 1, color = '#E5E7EB', marginTop,marginBottom, style }) => {
  return (
    <View
      style={[
        styles.line,
        { height, marginBottom, backgroundColor: color, marginTop:marginTop || 0 },
        style,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  line: {
    marginTop:3,
    width: '100%',
  },
});

export default CustomHorizontalLine;
