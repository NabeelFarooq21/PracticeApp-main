import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
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
import ActionBar from '../../../components/home/ActionBar';

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
            <ActionBar
              items={[
                { icon: images.posticon1, label: '120' },
                { icon: images.posticon2, label: '10' },
                { icon: images.posticon3, label: '45' },
                { icon: images.posticon4, label: '32' },
                { icon: images.posticon5, label: '320' },
              ]}
            />{' '}
          </View>
        </View>
        <CustomHorizontalLine marginBottom={20} />
        <View style={styles.post2}>
          <ImageFast
            style={{ width: 96, height: 96, resizeMode: 'cover' }}
            source={images.tigeravatar}
          />
          <CustomText
            label={'Max Schmidt'}
            fontFamily={600}
            fontSize={18}
            lineHeight={19}
            color={'#0E121B'}
            letterSpacing={-0.6}
          />
          <View style={styles.socailscore}>
            <CustomText
              label={'Social Score:'}
              fontFamily={400}
              fontSize={16}
              lineHeight={24}
              color={'#525866'}
            />
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: '#E1E4EA',
                paddingHorizontal: 6,
                paddingVertical: 1,
                borderRadius: 4,
              }}
            >
              <Text>126.4 K</Text>
            </TouchableOpacity>
            <ImageFast
              source={images.leftarrow}
              style={{ width: 24, height: 24, resizeMode: 'contain' }}
              resizeMode="contain"
            />
          </View>
          <View style={styles.postbox}>
            <CustomText
              label={'Amplify your influence with Social Score!'}
              fontFamily={600}
              fontSize={19}
              lineHeight={24}
              color={'#0E121B'}
              letterSpacing={-0.6}
            />
            <CustomText
              label={
                'Engage more and earn more points through posts, likes, and comments. Turn your activity into a trust score that opens new doors in your community.'
              }
              fontFamily={400}
              fontSize={14}
              lineHeight={24}
              color={'#525866'}
              marginTop={4}
              textAlign={'center'}
            />
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
  },

  actionItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  icon: {
    width: 20,
    height: 20,
  },
  post2: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    paddingHorizontal: 20,
    flexDirection: 'column',

    paddingBottom: 20,
  },
  socailscore: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
    marginTop: 6,
  },
  postbox: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#E1E4EA',
    borderRadius: 16,
    paddingVertical: 16,
    width: '100%',
    backgroundColor: '#F5F7FA',
    marginBottom: 20,
  },
});
