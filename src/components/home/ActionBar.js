import { StyleSheet, View } from "react-native";
import React from "react";
import ImageFast from "../ImageFast";   // tumhara component
import CustomText from "../CustomText"; // tumhara component

// reusable ActionItem
const ActionItem = ({ icon, label }) => {
  return (
    <View style={styles.actionItem}>
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

// main ActionBar (ab props lega)
const ActionBar = ({ items = [] }) => {
  return (
    <View style={styles.actionBar}>
      {items.map((item, index) => (
        <ActionItem key={index} icon={item.icon} label={item.label} />
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
