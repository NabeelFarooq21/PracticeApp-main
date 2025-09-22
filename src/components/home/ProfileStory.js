import { StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import { images } from '../../assets/Index';
import ImageFast from '../ImageFast';
import CustomText from '../CustomText';

const storiesData = [
  { id: '1', name: 'Alex', image: images.stroyimg1 },
  { id: '2', name: 'Sophia', image: images.storyimg2 },
  { id: '3', name: 'John', image: images.storyimg3 },
  { id: '4', name: 'Emma', image: images.storyimg4 },
  { id: '5', name: 'Michael', image: images.storyimg2 },
  { id: '6', name: 'Olivia', image: images.storyimg3 },
  { id: '7', name: 'William', image: images.storyimg4 },
  { id: '8', name: 'Ava', image: images.storyimg2 },
  { id: '9', name: 'James', image: images.storyimg4 },
];

const ProfileStory = () => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.storyContainer}>
      <View style={styles.storyImgWrapper}>
        <ImageFast
          source={item.image}
          style={styles.storyImg}
          resizeMode="cover"
        />
      </View>
      <CustomText
        label={item.name}
        fontFamily={600}
        fontSize={14}
        lineHeight={16}
        marginTop={8}
        color={'black'}
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={storiesData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default ProfileStory;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    height: 120, // ✅ fix height di taake feed disturb na ho
  },
  storyContainer: {
    alignItems: 'center',
    paddingRight: 15,
  },
  storyImgWrapper: {
    width: 80,
    height: 80,
    borderWidth: 2,
    borderColor: '#FF2557',
    borderRadius: 40,
    alignItems: 'center',
    overflow: 'hidden',
  },
  storyImg: {
    width: '100%',
    height: '100%',
    borderRadius: 40,
  },
});
