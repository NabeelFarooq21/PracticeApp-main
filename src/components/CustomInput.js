import React, { useState } from 'react';
import { View, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native';

const CustomInput = ({
  value,
  onChangeText,
  placeholder,
  placeholderTextColor,
  secureTextEntry,
  keyboardType,
  multiline,
  maxLength,
  editable,
  marginTop,
  marginBottom,
  height,
  borderRadius,
  borderColor,
  borderwidth,
  focusBorderColor,
  error,
  errorColor,
  backgroundColor,
  color,
  

  // left icon props
  iconImage,
  leftIconStyle,

  // right icon props
  rightIcon,
  rightIconStyle,
  onRightIconPress,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View
      style={[
        styles.mainContainer,
        {
          marginBottom: error ? 5 : marginBottom,
          marginTop,
          borderColor:
            error
              ? errorColor
              : isFocused
              ? focusBorderColor
              : borderColor,
          borderWidth: borderwidth,
          height: height ? height : multiline ? 120 : 56,
          borderRadius,
          backgroundColor,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 12,
        },
      ]}
    >
      {iconImage && (
        <Image
          source={iconImage}
          style={[
            { width: 20, height: 20, marginRight: 8 },
            leftIconStyle,
          ]}
        />
      )}

      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        multiline={multiline}
        maxLength={maxLength}
        editable={editable}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={[
          styles.input,
          {
            color,
            flex: 1,
          },
        ]}
      />

      {rightIcon && (
        <TouchableOpacity onPress={onRightIconPress} activeOpacity={0.7}>
          <Image
            source={rightIcon}
            style={[{ width: 20, height: 20, marginLeft: 8 }, rightIconStyle]}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
  },
  input: {
    fontSize: 14,
  },
});

export default CustomInput;
