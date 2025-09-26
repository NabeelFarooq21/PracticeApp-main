import { StyleSheet, View } from 'react-native';
import React from 'react';
import ImageFast from '../ImageFast';
import CustomText from '../CustomText';

const ActionItem = ({
  icon,
  label,
  borderWidth = 0,
  borderColor = 'transparent',
  borderRadius = 0,
  paddingVertical = 2,
  paddingHorizontal = 9,
}) => {
  return (
    <View
      style={[
        styles.actionItem,
        {
          borderWidth: borderWidth,
          borderColor: borderColor,
          borderRadius: borderRadius,

          paddingVertical,
          paddingHorizontal,
        },
      ]}
    >
      <ImageFast source={icon} style={styles.icon} resizeMode="contain" />
      <CustomText
        label={label}
        fontSize={12}
        color={'#525866'}
        marginLeft={4}
      />
    </View>
  );
};

const ActionBar = ({ items = [] }) => {
  return (
    <View style={styles.actionBar}>
      {items.map((item, index) => (
        <ActionItem
          key={index}
          icon={item.icon}
          label={item.label}
          borderWidth={item.borderWidth}
          borderColor={item.borderColor}
          borderRadius={item.borderRadius}
          paddingHorizontal={item.paddingHorizontal}
          paddingVertical={item.paddingVertical}
        />
      ))}
    </View>
  );
};

export default ActionBar;

const styles = StyleSheet.create({
  actionBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  actionItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
  },
});
