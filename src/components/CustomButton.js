import { TouchableOpacity, ActivityIndicator, Animated,Image} from "react-native";
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
              ? "#cccccc" // Disabled ka default grey
              : backgroundColor
              ? backgroundColor
              : "#000000", // default black if not provided
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
        {loading && (
          <ActivityIndicator
            size={loadingSize || 25}
            color={indicatorColor ? indicatorColor : "#ffffff"} // default white indicator
          />
        )}

        {icon && (
          <Image
            source={icon}
            style={{
              width: icnWidth || 20,
              height: icnHeight || 20,
              resizeMode: 'contain',
              marginRight: 8,
            }}
          />
        )}
        {!loading && (
          <CustomText
            textStyle={customText}
            label={title}
            color={color ? color : "#ffffff"} // Agar prop color di to wahi, warna white
            fontFamily={fontFamily || "System"}
            fontSize={fontSize || 15}
            lineHeight={22}
            marginTop={-2}
          />
        )}
      </TouchableOpacity>
    </Animated.View>
  );
};

export default CustomButton;
