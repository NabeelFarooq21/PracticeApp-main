import { StyleSheet, View, FlatList, Dimensions } from 'react-native';
import React, { useState, useRef } from 'react';
import CustomText from '../../../components/CustomText';
import { images } from '../../../assets/Index';
import ScreenWrapper from '../../../components/ScreenWrapper';
import ImageFast from '../../../components/ImageFast';
import CustomButton from '../../../components/CustomButton';
import CreateModel from '../../../components/model/CreateModel';
import LoginModel from '../../../components/model/LoginModel';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const Onboarding = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  // 🔹 model states
  const [isCreateVisible, setCreateVisible] = useState(false);
  const [isLoginVisible, setLoginVisible] = useState(false);

  const navigation = useNavigation();

  const data = [
    {
      id: '1',
      title: 'Welcome to Locaided',
      description:
        'Your local lens into real-time stories, chats, and updates — right from where you are.',
      image: images.phone1,
    },
    {
      id: '2',
      title: 'Discover What4s Trending',
      description:
        'Get instant access to live updates and buzz around you — from events to alerts.',
      image: images.phone2,
    },
    {
      id: '3',
      title: 'Chat with Your Community',
      description:
        'Jump into open or private chats based on your area — stay connected wherever you are.',
      image: images.phone3,
    },
    {
      id: '4',
      title: 'Keep It Private',
      description:
        'Start 1-on-1 chats with anyone — stay local, safe, and personal.',
      image: images.phone4,
    },
    {
      id: '5',
      title: 'Experience Stories with EYS',
      description:
        'Watch raw, on-the-ground moments posted by real locals — right from your neighborhood.',
      image: images.phone5,
    },
  ];

  const handleSwipe = event => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.round(contentOffsetX / width);
    if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex);
    }
  };

  return (
    <ScreenWrapper paddingHorizontal={0} backgroundColor={'white'}>
      <FlatList
        ref={flatListRef}
        data={data}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleSwipe}
        renderItem={({ item }) => (
          <View style={{ width }}>
            <ImageFast
              source={item.image}
              style={styles.mainImage}
              resizeMode="contain"
            />

            <ImageFast
              source={images.overlay}
              style={styles.overlay}
              resizeMode="contain"
            />

            <View style={styles.container}>
              <CustomText
                label={item.title}
                fontSize={height > 800 ? 24 : 20}
                fontWeight={600}
                color={'black'}
                textAlign={'center'}
              />
              <CustomText
                label={item.description}
                fontSize={height > 800 ? 16 : 14}
                fontWeight={400}
                color={'black'}
                textAlign={'center'}
                lineHeight={height > 800 ? 24 : 20}
                marginTop={5}
              />
            </View>
          </View>
        )}
        keyExtractor={item => item.id}
      />
      <View style={styles.indexBarContainer}>
        {data.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indexBar,
              {
                backgroundColor: index === currentIndex ? '#FF0000' : '#CCCCCC',
              },
            ]}
          />
        ))}
      </View>
      <View style={styles.btns}>
        <CustomButton
          title={'Create Account'}
          marginTop={25}
          borderRadius={16}
          onPress={() => setCreateVisible(true)} // 🔹 create modal open
        />

        <CustomButton
          title={'Login'}
          marginTop={10}
          borderRadius={16}
          color={'black'}
          backgroundColor={'white'}
          borderWidth={1}
          borderColor={'#E1E4EA'}
          onPress={() => setLoginVisible(true)} // 🔹 login modal open
        />
      </View>

      {/* 🔹 Models */}
      <CreateModel
        isVisible={isCreateVisible}
        onClose={() => setCreateVisible(false)}
      />
      <LoginModel
        isVisible={isLoginVisible}
        onClose={() => setLoginVisible(false)}
      />
    </ScreenWrapper>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  mainImage: {
    width: width * 0.81, // Use percentage of screen width
    height: height * 0.78, // Use percentage of screen height
    marginTop: height * 0.1, // Use percentage of screen height
    alignSelf: 'center',
    justifyContent: 'center',
  },
  overlay: {
    width: '100%',
    height: height * 0.62, 
    position: 'absolute',
    top: height * 0.42, // Position based on screen height
  },
  container: {
    position: 'absolute',
    top: height * 0.65, // Position based on screen height
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 20,
  },
  indexBar: {
    width: width * 0.08, // Use percentage of screen width
    height: 6,
    marginHorizontal: 3,
    borderRadius: 16,
  },
  indexBarContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: height * 0.02, // Add some margin based on screen height
  },
  btns: {
    paddingHorizontal: 20,
    marginBottom: height > 800 ? 45 : 25, // Adjust based on screen height
  },
});