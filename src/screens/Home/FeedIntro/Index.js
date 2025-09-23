import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import ScreenWrapper from '../../../components/ScreenWrapper';
import { images } from '../../../assets/Index';
import ImageFast from '../../../components/ImageFast';
import Header from '../../../components/home/Header';
import ProfileStory from '../../../components/home/ProfileStory';
import DummyProfileStory from '../../../components/home/DummyProfileStory';
import CustomText from '../../../components/CustomText';
import CustomVerticalline from '../../../components/home/CustomVerticalline';
import CustomHorizontalLine from '../../../components/CustomHorizontalLine';

const FeedIntro = () => {
  return (
    <ScreenWrapper
      paddingHorizontal={0}
      backgroundColor={'white'}
      scrollEnabled={true}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <View style={{ paddingHorizontal: 20 }}>
          <DummyProfileStory />
        </View>

        <View style={styles.text}>
          {/* <CustomText
            label={'How it works'}
            fontFamily={600}
            fontSize={25}
            lineHeight={32}
            color={'#0E121B'}
            marginTop={24}
            paddingHorizontal={20}
          /> */}
          <Text style={styles.text1}>HOW IT WORKS</Text>

          <CustomText
            label={'Scroll down to explore features.'}
            fontFamily={400}
            fontSize={18}
            lineHeight={24}
            color={'#666666'}
            paddingHorizontal={20}
            marginTop={4}
          />

          <ImageFast
            source={images.downdoublearrow}
            style={{ width: 24, height: 24, marginVertical: 12 }}
            resizeMode="contain"
          />

          <Text style={styles.text2}>Local Real Time Stories</Text>

          <CustomVerticalline marginTop={14} marginBottom={0} height={40} />

          <ProfileStory />

          <CustomVerticalline marginTop={5} marginBottom={14} height={40} />

          <Text style={styles.text2}>Local Real Time Post</Text>
          <CustomVerticalline marginTop={14} marginBottom={14} height={40} />
        </View>
        <CustomHorizontalLine />
        <View style={styles.post1}>
          <ImageFast
            source={images.locaidedblackicon}
            style={{ width: 40, height: 40, marginTop: 4 }}
            resizeMode="contain"
          />

          <View style={{ flex: 1, marginLeft: 12 }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                flexWrap: 'wrap',
              }}
            >
              <CustomText
                label={'Locaided'}
                fontFamily={600}
                fontSize={16}
                lineHeight={24}
                color={'#0E121B'}
              />
              <ImageFast
                source={images.goldpoint}
                style={{ width: 24, height: 24, marginLeft: 6 }}
                resizeMode="contain"
              />
              <CustomText
                label={'23:59'}
                fontFamily={600}
                fontSize={16}
                lineHeight={24}
                color={'#0E121B'}
                marginLeft={3}
              />
            </View>

            <Text>
              <Text style={{ fontWeight: 'normal', lineHeight: 19 }}>
                Discover the world around you like never before.
              </Text>
              <Text style={{ fontWeight: 'normal', lineHeight: 19 }}>
                {'\n\n'}Imagine your social media feed displaying only posts
                from local users within an adjustable 1 - 50km radius, without
                being connected to anyone. Wherever you go, your feed updates in
                real time with posts from your current area.
              </Text>
            </Text>
            {/* Media image */}
            <ImageFast
              source={images.media1}
              style={{
                width: '100%',
                height: 500,
                marginTop: 10,
                borderRadius: 8,
              }}
              resizeMode="cover"
            />
            <View style={styles.actionBar}>
              {/* Like */}
              <View style={styles.actionItem}>
                <ImageFast
                  source={images.posticon1}
                  style={styles.icon}
                  resizeMode="contain"
                />
                <CustomText
                  label={'120'}
                  fontSize={12}
                  color={'#525866'}
                  marginLeft={4}
                />
              </View>

              {/* Dislike */}
              <View style={styles.actionItem}>
                <ImageFast
                  source={images.posticon2}
                  style={styles.icon}
                  resizeMode="contain"
                />
                <CustomText
                  label={'10'}
                  fontSize={12}
                  color={'#525866'}
                  marginLeft={4}
                />
              </View>

              {/* Comment */}
              <View style={styles.actionItem}>
                <ImageFast
                  source={images.posticon3}
                  style={styles.icon}
                  resizeMode="contain"
                />
                <CustomText
                  label={'45'}
                  fontSize={12}
                  color={'#525866'}
                  marginLeft={4}
                />
              </View>

              {/* Share */}
              <View style={styles.actionItem}>
                <ImageFast
                  source={images.posticon4}
                  style={styles.icon}
                  resizeMode="contain"
                />
                <CustomText
                  label={'32'}
                  fontSize={12}
                  color={'#525866'}
                  marginLeft={4}
                />
              </View>
              <View style={styles.actionItem}>
                <ImageFast
                  source={images.posticon5}
                  style={styles.icon}
                  resizeMode="contain"
                />
                <CustomText
                  label={'320'}
                  fontSize={12}
                  color={'#525866'}
                  marginLeft={4}
                />
              </View>
            </View>
            
          </View>
          
        </View>
        <CustomHorizontalLine marginBottom={20} />
      </ScrollView>
    </ScreenWrapper>
  );
};

export default FeedIntro;

const styles = StyleSheet.create({
  text: {
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  post1: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingRight: 20,
    paddingLeft: 15,
    marginTop: 12,
  },
  text1: {
    fontWeight: '600',
    fontSize: 24,
    lineHeight: 32,
    color: '#0E121B',
    marginTop: 24,
  },
  text2: {
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 24,
    color: '#0E121B',
    letterSpacing: 0.4,
  },
  actionBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    // paddingHorizontal: 5,
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
