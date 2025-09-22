import { StyleSheet, View } from 'react-native';
import React from 'react';

const CustomVerticalLine = ({
  marginTop = 0,
  marginBottom = 0,
  height = 40,
  width = 1,
  borderColor = '#E1E4EA',
  borderWidth = 1,
  style,
}) => {
  return (
    <View
      style={[
        {
          marginTop,
          marginBottom,
          width,
          height,
          borderColor,
          borderWidth,
        },
        style, // extra style agar pass karna ho
      ]}
    />
  );
};

export default CustomVerticalLine;
