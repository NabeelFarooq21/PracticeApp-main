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

const { width } = Dimensions.get('window');

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
                fontSize={24}
                fontWeight={600}
                color={'black'}
                textAlign={'center'}
              />
              <CustomText
                label={item.description}
                fontSize={16}
                fontWeight={400}
                color={'black'}
                textAlign={'center'}
                lineHeight={24}
                marginTop={5}
              />
              <View style={styles.indexBarContainer}>
                {data.map((_, index) => (
                  <View
                    key={index}
                    style={[
                      styles.indexBar,
                      {
                        backgroundColor:
                          index === currentIndex ? '#FF0000' : '#CCCCCC',
                      },
                    ]}
                  />
                ))}
              </View>
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
          </View>
        )}
        keyExtractor={item => item.id}
      />

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
    width: 300,
    height: 600,
    marginTop: 96,
    alignSelf: 'center',
  },
  overlay: {
    width: '100%',
    height: 458,
    position: 'absolute',
    top: 385,
  },
  container: {
    position: 'absolute',
    top: 550,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 20,
  },
  indexBar: {
    width: 35,
    height: 6,
    marginHorizontal: 3,
    borderRadius: 16,
  },
  indexBarContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
});
