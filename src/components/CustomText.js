import { Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";

const CustomText = ({
  textStyle,
  fontSize,
  marginTop,
  marginBottom,
  marginRight,
  marginLeft,
  alignSelf,
  fontFamily,
  fontStyle,
  textTransform,
  textAlign,
  label,
  color,
  fontWeight,
  bottom,
  width,
  borderColor,
  borderBottomWidth,
  onPress,
  marginVertical,
  paddingBottom,
  activeOpacity,
  textDecorationLine,
  lineHeight,
  containerStyle,
  right,
  left,
  numberOfLines,
  children,
  removeTranslation,
  disabled,
  letterSpacing,

  // ✅ icon props
  iconImage,
  iconImageStyle,
}) => {
  return (
    <TouchableOpacity
      style={[containerStyle, { alignSelf }]}
      onPress={onPress}
      disabled={!onPress || disabled}
      activeOpacity={activeOpacity || 0.6}
    >
      {iconImage ? (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={iconImage}
            style={[
              { width: 16, height: 16, resizeMode: "contain", marginRight: 6 },
              iconImageStyle,
            ]}
          />
          <Text
            numberOfLines={numberOfLines}
            style={[
              {
                fontSize: fontSize || 14,
                color: color || "white",
                marginTop: marginTop || 0,
                marginBottom: marginBottom || 0,
                marginLeft: marginLeft || 0,
                marginRight: marginRight || 0,
                fontStyle: fontStyle,
                lineHeight: lineHeight,
                textAlign: textAlign,
                textTransform: textTransform,
                fontWeight: fontWeight,
                bottom: bottom,
                borderBottomWidth: borderBottomWidth,
                borderColor: borderColor,
                width: width,
                marginVertical: marginVertical,
                paddingBottom: paddingBottom,
                right: right,
                left: left,
                letterSpacing,
                textDecorationLine: textDecorationLine || "none",
              },
              textStyle,
            ]}
          >
            {label}
            {children}
          </Text>
        </View>
      ) : (
        <Text
          numberOfLines={numberOfLines}
          style={[
            {
              fontSize: fontSize || 14,
              color: color || "white",
              marginTop: marginTop || 0,
              marginBottom: marginBottom || 0,
              marginLeft: marginLeft || 0,
              marginRight: marginRight || 0,
              fontStyle: fontStyle,
              lineHeight: lineHeight,
              textAlign: textAlign,
              textTransform: textTransform,
              fontWeight: fontWeight,
              bottom: bottom,
              borderBottomWidth: borderBottomWidth,
              borderColor: borderColor,
              width: width,
              marginVertical: marginVertical,
              paddingBottom: paddingBottom,
              right: right,
              left: left,
              letterSpacing,
              textDecorationLine: textDecorationLine || "none",
            },
            textStyle,
          ]}
        >
          {label}
          {children}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomText;
