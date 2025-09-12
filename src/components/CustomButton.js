import { TouchableOpacity, ActivityIndicator, Animated, Image } from "react-native";
import React, { useState } from "react";
import CustomText from "./CustomText";

const CustomButton = ({
  onPress,
  title,
  disabled,
  loading,
  customStyle,
  customText,
  marginBottom,
  marginTop,
  backgroundColor,
  color,
  width = "100%",
  height = 54,
  borderRadius = 8,
  justifyContent = "center",
  alignItems = "center",
  flexDirection = "row",
  alignSelf = "center",
  fontSize,
  indicatorColor,
  marginRight,
  borderWidth,
  borderColor,
  fontFamily,
  loadingSize,
  mainStyle,
  icon,
  icnWidth,
  icnHeight,
  extraText,          // 👈 optional 2nd text
  extraTextColor,     // 👈 alag color
  extraFontSize,      // 👈 alag size
  extraFontFamily,    // 👈 alag font
}) => {
  const [animation] = useState(new Animated.Value(1));

  const handlePressIn = () => {
    Animated.spring(animation, {
      toValue: 0.9,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(animation, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View
      style={[
        mainStyle,
        { transform: [{ scale: animation }], width, alignSelf },
      ]}
    >
      <TouchableOpacity
        disabled={loading || disabled}
        activeOpacity={0.6}
        style={[
          {
            backgroundColor: disabled
              ? "#cccccc"
              : backgroundColor || "#000000",
            marginTop,
            marginBottom,
            width: "100%",
            height,
            borderRadius,
            flexDirection,
            alignItems,
            justifyContent,
            marginRight,
            borderWidth,
            borderColor,
          },
          customStyle,
        ]}
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
      >
        {/* Loader */}
        {loading && (
          <ActivityIndicator
            size={loadingSize || 25}
            color={indicatorColor || "#ffffff"}
          />
        )}

        {/* Content */}
        {!loading && (
          <>
            {/* First Text */}
            {title && (
              <CustomText
                textStyle={customText}
                label={title}
                color={color || "#ffffff"}
                fontFamily={fontFamily || "System"}
                fontSize={fontSize || 15}
                lineHeight={22}
                marginTop={-2}
              />
            )}

            {/* Icon */}
            {icon && (
              <Image
                source={icon}
                style={{
                  width: icnWidth || 20,
                  height: icnHeight || 20,
                  resizeMode: "contain",
                  marginHorizontal: 6,
                }}
              />
            )}

            {/* Extra Text */}
            {extraText && (
              <CustomText
                textStyle={customText}
                label={extraText}
                color={extraTextColor || color || "#ffffff"}
                fontFamily={extraFontFamily || fontFamily || "System"}
                fontSize={extraFontSize || fontSize || 15}
                lineHeight={22}
                marginTop={-2}
              />
            )}
          </>
        )}
      </TouchableOpacity>
    </Animated.View>
  );
};

export default CustomButton;
