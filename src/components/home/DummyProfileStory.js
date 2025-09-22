import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import ImageFast from '../ImageFast';
import CustomText from '../CustomText';
import { images } from '../../assets/Index';

// stories data
const dummyStoriesData = [
  { id: '1', name: 'Alex', image: images.stroyimg1, isProfile: true }, 
  { id: '2', image: images.dummyimg },
  { id: '3', image: images.dummyimg },
  { id: '4', image: images.dummyimg },
  { id: '5', image: images.dummyimg },
  { id: '6', image: images.dummyimg },
];

const DummyProfileStory = (paddingHorizontal) => {

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.storyContainer}>
      <View
        style={[
          styles.storyImgWrapper,
          item.isProfile && { borderColor: '#FF2557' }, 
        ]}>
        <ImageFast
          source={item.image}
          style={styles.storyImg}
          resizeMode="cover"
        />
      </View>

      
      {item.isProfile ? (
        <CustomText
          label={item.name}
          fontFamily={600}
          fontSize={14}
          lineHeight={16}
          marginTop={8}
          color={'black'}
        />
      ) : (
        <Image
          source={images.textframe} 
          style={styles.textFrameImg}
          resizeMode="contain"
        />
      )}
    </TouchableOpacity>
  );

  return (

    <View style={[styles.container, { paddingHorizontal }]}>
      <FlatList
        data={dummyStoriesData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default DummyProfileStory;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingLeft: 15,
  },
  storyContainer: {
    alignItems: 'center',
    marginRight: 15,
  },
  storyImgWrapper: {
    width: 80,
    height: 80,
    borderWidth: 2,
    borderColor: '#ccc', 
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  storyImg: {
    width: '100%',
    height: '100%',
    borderRadius: 40,
  },
  textFrameImg: {
    width: 61,
    height: 18,
    marginTop: 8,
   
    
    
  },
});
