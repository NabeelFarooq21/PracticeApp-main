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
      headerUnScrollable={() => (
        <View>
          <Header />
        </View>
      )}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ paddingHorizontal: 20 }}>
          <DummyProfileStory />
        </View>
        <View style={styles.text}>
          <Text style={styles.text1}>HOW IT WORKS</Text>
          <CustomText
            label={'Scroll down to explore features.'}
            fontWeight={400}
            fontSize={16}
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
                fontWeight={600}
                fontSize={14}
                lineHeight={24}
                color={'#0E121B'}
              />
              <ImageFast
                source={images.goldpoint}
                style={{ width: 24, height: 24 }}
                resizeMode="contain"
              />
              <CustomText
                label={'23:59'}
                fontWeight={400}
                fontSize={14}
                lineHeight={24}
                color={'#525866'}
                marginLeft={3}
              />
            </View>
            <Text style={styles.postDescription}>
              Discover the world around you like never before.
            </Text>
            <Text style={[styles.postDescription, { marginTop: 10 }]}>
              Imagine your social media feed displaying only posts from local
              users within an adjustable 1 - 50km radius, without being
              connected to anyone. Wherever you go, your feed updates in real
              time with posts from your current area.
            </Text>
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
            />
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
            fontWeight={600}
            fontSize={18}
            lineHeight={19}
            color={'#0E121B'}
            letterSpacing={-0.6}
            marginTop={10}
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
              fontSize={19}
              lineHeight={24}
              color={'#0E121B'}
              letterSpacing={-0.6}
              fontWeight={600}
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
              letterSpacing={-0.6}
              textAlign={'center'}
            />
          </View>
        </View>
        <CustomHorizontalLine marginBottom={10} />
        <View style={styles.postContainer}>
          <ImageFast
            source={images.userimg1}
            style={styles.profileIcon}
            resizeMode="contain"
          />
          <View style={styles.postContent}>
            <View style={styles.headerRow}>
              <View style={styles.nameRow}>
                <CustomText
                  label={'John Doe'}
                  fontWeight={600}
                  fontSize={14}
                  lineHeight={24}
                  color={'#0E121B'}
                />
                <ImageFast
                  source={images.bluetick}
                  style={styles.goldIcon}
                  resizeMode="contain"
                />
                <CustomText
                  label={'23:59'}
                  fontWeight={400}
                  fontSize={14}
                  lineHeight={21}
                  color={'#525866'}
                />
              </View>
              <TouchableOpacity style={styles.headerButton}>
                <Text style={styles.headerButtonText}>Traffic</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.postDescription}>
              Stuck on the M6 again 🙄 crazy traffic jam! If you’re heading this
              way, maybe grab a coffee first ☕
            </Text>
            <ImageFast
              source={images.mediaimg1}
              style={styles.mediaImage}
              resizeMode="cover"
            />
            <ActionBar
              items={[
                { icon: images.posticon1, label: '12k' },
                { icon: images.posticon2, label: '102' },
                { icon: images.posticon3, label: '45' },
                { icon: images.posticon4, label: '302' },
                { icon: images.posticon5, label: '20' },
              ]}
            />
          </View>
        </View>
        {/* Post 3 */}
        <CustomHorizontalLine marginBottom={10} />
        <View style={styles.postContainer2}>
          <ImageFast
            source={images.userimg2}
            style={styles.profileIcon2}
            resizeMode="contain"
          />
          <View style={styles.postContent2}>
            <View style={styles.headerRow2}>
              <View style={styles.nameRow2}>
                <CustomText
                  label={'TravelerX'}
                  fontWeight={600}
                  fontSize={14}
                  lineHeight={21}
                  color={'#1A1A1A'}
                />
                <CustomText
                  label={'10:45'}
                  fontSize={14}
                  fontWeight={400}
                  lineHeight={21}
                  color={'#525866'}
                  marginLeft={4}
                />
                <TouchableOpacity style={styles.plusButton}>
                  <Text style={styles.plusButtonText}>+ 0.59</Text>
                </TouchableOpacity>
                <ImageFast
                  source={images.leftarrow}
                  style={{ width: 24, height: 24, resizeMode: 'contain' }}
                  resizeMode="contain"
                />
              </View>
              <TouchableOpacity style={styles.headerButton}>
                <Text style={styles.headerButtonText}>Event</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.postDescription}>
              Just reached downtown 🎉 can’t wait to explore the food street!
              🍔🍕
            </Text>
            <ImageFast
              source={images.mediaimg2}
              style={styles.mediaImage2}
              resizeMode="cover"
            />
            <ActionBar
              items={[
                { icon: images.posticon1, label: '2k' },
                { icon: images.greenlike, label: '8' },
                { icon: images.posticon3, label: '102' },
                { icon: images.posticon4, label: '10' },
                { icon: images.posticon5, label: '90' },
              ]}
            />
          </View>
        </View>
        <CustomHorizontalLine marginBottom={10} />
        <View style={styles.postContainer3}>
          <ImageFast
            source={images.userimg3}
            style={styles.profileIcon3}
            resizeMode="contain"
          />
          <View style={styles.postContent3}>
            <View style={styles.headerRow3}>
              <View style={styles.nameRow3}>
                <CustomText
                  label={'Smith X'}
                  fontWeight={600}
                  fontSize={14}
                  lineHeight={21}
                  color={'#1A1A1A'}
                />
                <CustomText
                  label={'10:45'}
                  fontSize={14}
                  fontWeight={400}
                  lineHeight={21}
                  color={'#525866'}
                  marginLeft={4}
                />
                <TouchableOpacity style={styles.plusButton3}>
                  <Text style={styles.plusButtonText3}>- 0.59</Text>
                </TouchableOpacity>
                <ImageFast
                  source={images.leftarrow}
                  style={{ width: 24, height: 24, resizeMode: 'contain' }}
                  resizeMode="contain"
                />
              </View>
              <TouchableOpacity style={styles.headerButton}>
                <Text style={styles.headerButtonText}>News</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.postDescription}>
              Ugh! {'\n\n'}Just got to the station and the trains are cancelled!
              Looks like it's going to be one of those days. 🙄  {'\n\n'}Don't
              say I didn't warn ya. 🚄❌
            </Text>
            <ImageFast
              source={images.mediaimg3}
              style={styles.mediaImage3}
              resizeMode="cover"
            />
            <ActionBar
              items={[
                { icon: images.posticon1, label: '2k' },
                { icon: images.posticon2, label: '8' },
                { icon: images.posticon3, label: '102' },
                {
                  icon: images.reddislike,
                  label: '10',
                  borderColor: '#E1E4EA',
                  borderWidth: 1,
                  borderRadius: 4,
                },
                { icon: images.posticon5, label: '90' },
              ]}
            />
          </View>
        </View>
        <CustomHorizontalLine marginBottom={10} />
        <View style={styles.postContainer4}>
          <ImageFast
            source={images.userimg4}
            style={styles.profileIcon3}
            resizeMode="contain"
          />
          <View style={styles.postContent4}>
            <View style={styles.headerRow4}>
              <View style={styles.nameRow4}>
                <CustomText
                  label={'Smith X'}
                  fontWeight={600}
                  fontSize={14}
                  lineHeight={21}
                  color={'#1A1A1A'}
                />
                <CustomText
                  label={'10:45'}
                  fontSize={14}
                  fontWeight={400}
                  lineHeight={21}
                  color={'#525866'}
                  marginLeft={4}
                />
              </View>

              <TouchableOpacity style={styles.headerButton}>
                <Text style={styles.headerButtonText}>Missing</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.postDescription}>
              Our beloved family cat, Whiskers, has been missing since this
              morning.{'\n\n'}
              She's a grey tabby and very friendly. If you spot her around town,
              please drop me a message ASAP! {'\n\n'}
              Don't forget to hit that{'  '}
              <Text style={{ color: '#C0EAFF', paddingHorizontal: 4 }}>
                repost
              </Text>
              {'  '}button to help increase the search radius. 🙏
            </Text>
            <ImageFast
              source={images.mediaimg4}
              style={styles.mediaImage4}
              resizeMode="cover"
            />
            <ActionBar
              items={[
                { icon: images.posticon1, label: '2k' },
                { icon: images.posticon2, label: '8' },
                {
                  icon: images.repostblue,
                  label: '102',
                  borderColor: '#E1E4EA',
                  borderWidth: 1,
                  borderRadius: 4,
                },
                { icon: images.posticon4, label: '10' },
                { icon: images.posticon5, label: '90' },
              ]}
            />
          </View>
        </View>
        <CustomHorizontalLine marginBottom={10} />
        <View style={styles.postContainer4}>
          <ImageFast
            source={images.userimg5}
            style={styles.profileIcon3}
            resizeMode="contain"
          />
          <View style={styles.postContent4}>
            <View style={styles.headerRow4}>
              <View style={styles.nameRow4}>
                <CustomText
                  label={'Oscar Heinrich'}
                  fontWeight={600}
                  fontSize={14}
                  lineHeight={21}
                  color={'#1A1A1A'}
                />
                <CustomText
                  label={'10:45'}
                  fontSize={14}
                  fontWeight={400}
                  lineHeight={21}
                  color={'#525866'}
                  marginLeft={4}
                />
              </View>

              <TouchableOpacity style={styles.headerButton5}>
                <Text style={styles.headerButtonText5}>Alert</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.postDescription}>
              Just discovered this hidden gem of a restaurant on Elmo Street.
              {'\n\n'}
              Their outside terrace is a sunny haven and the food is to die for!{' '}
            </Text>
            <ImageFast
              source={images.mediaimg5}
              style={styles.mediaImage4}
              resizeMode="cover"
            />
            <ActionBar
              items={[
                { icon: images.posticon1, label: '2k' },
                { icon: images.posticon2, label: '8' },
                {
                  icon: images.posticon3,
                  label: '102',
                },
                { icon: images.posticon4, label: '10' },
                { icon: images.posticon5, label: '90' },
              ]}
            />
          </View>
        </View>
        <CustomHorizontalLine marginBottom={10} />
        <View style={styles.postContainer4}>
          <ImageFast
            source={images.userimg4}
            style={styles.profileIcon3}
            resizeMode="contain"
          />
          <View style={styles.postContent4}>
            <View style={styles.headerRow4}>
              <View style={styles.nameRow4}>
                <CustomText
                  label={'Oscar Heinrich'}
                  fontWeight={600}
                  fontSize={14}
                  lineHeight={21}
                  color={'#1A1A1A'}
                />
                <CustomText
                  label={'10:45'}
                  fontSize={14}
                  fontWeight={400}
                  lineHeight={21}
                  color={'#525866'}
                  marginLeft={4}
                />
              </View>

              <TouchableOpacity style={styles.headerButton}>
                <Text style={styles.headerButtonText}>Hot spot</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.postDescription}>
              Looks like it's time to break out those umbrellas and rain boots!
              🌧️
              {'\n\n'}
              Rainstorm incoming. Stay safe, neighbors!{' '}
            </Text>
            <ImageFast
              source={images.mediaimg6}
              style={styles.mediaImage4}
              resizeMode="cover"
            />
            <ActionBar
              items={[
                { icon: images.posticon1, label: '2k' },
                { icon: images.posticon2, label: '8' },
                {
                  icon: images.posticon3,
                  label: '102',
                },
                { icon: images.posticon4, label: '10' },
                { icon: images.posticon5, label: '90' },
              ]}
            />
          </View>
        </View>
        <CustomHorizontalLine marginBottom={10} />
        <View style={styles.postContainer4}>
          <ImageFast
            source={images.userimg7}
            style={styles.profileIcon3}
            resizeMode="contain"
          />
          <View style={styles.postContent4}>
            <View style={styles.headerRow4}>
              <View style={styles.nameRow4}>
                <CustomText
                  label={'Oscar Heinrich'}
                  fontWeight={600}
                  fontSize={14}
                  lineHeight={21}
                  color={'#1A1A1A'}
                />
                <CustomText
                  label={'10:45'}
                  fontSize={14}
                  fontWeight={400}
                  lineHeight={21}
                  color={'#525866'}
                  marginLeft={4}
                />
              </View>

              <TouchableOpacity style={styles.headerButton}>
                <Text style={styles.headerButtonText}>Hot spot</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.postDescription}>
              Hey fellow Locaiders! 
              {'\n\n'}
              My coffee shop buddy and I are in need of some extra hands.
              Looking for passionate baristas to join our quirky coffee corner
              ☕️🍩! 
              {'\n\n'}
              Flexible hours, great pay, and of course, unlimited caffeine! 💪🏽 
            </Text>
            <ImageFast
              source={images.mediaimg7}
              style={styles.mediaImage4}
              resizeMode="cover"
            />
            <ActionBar
              items={[
                { icon: images.posticon1, label: '2k' },
                { icon: images.posticon2, label: '8' },
                {
                  icon: images.posticon3,
                  label: '102',
                },
                { icon: images.posticon4, label: '10' },
                { icon: images.posticon5, label: '90' },
              ]}
            />
          </View>
        </View>
        <CustomHorizontalLine marginBottom={10} />
        <View style={styles.postContainer4}>
          <ImageFast
            source={images.userimg8}
            style={styles.profileIcon3}
            resizeMode="contain"
          />
          <View style={styles.postContent4}>
            <View style={styles.headerRow4}>
              <View style={styles.nameRow4}>
                <CustomText
                  label={'Bill Smith'}
                  fontWeight={600}
                  fontSize={14}
                  lineHeight={21}
                  color={'#1A1A1A'}
                />
                <CustomText
                  label={'10:45'}
                  fontSize={14}
                  fontWeight={400}
                  lineHeight={21}
                  color={'#525866'}
                  marginLeft={4}
                />
              </View>

              <TouchableOpacity style={styles.headerButton}>
                <Text style={styles.headerButtonText}>Hot spot</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.postDescription}>
              Car troubles in the middle of nowhere, no gas and my spare can is
              empty too! I'm stuck about 20 miles outside of town on the old
              county road, no other cars in sight.{'\n\n'}
              Reception isn't great out here, but I'm hoping this message gets
              through on. {'\n\n'}
              If anyone's nearby and could bring a can of gas, a tow, or even
              just a ride back to town, I'd be forever grateful!
            </Text>
            <ImageFast
              source={images.mediaimg8}
              style={styles.mediaImage4}
              resizeMode="cover"
            />
            <ActionBar
              items={[
                { icon: images.posticon1, label: '2k' },
                { icon: images.posticon2, label: '8' },
                {
                  icon: images.posticon3,
                  label: '102',
                },
                { icon: images.posticon4, label: '10' },
                { icon: images.posticon5, label: '90' },
              ]}
            />
          </View>
        </View>
         <CustomHorizontalLine marginBottom={10} />
        <View style={styles.postContainer9}>
          <ImageFast
            source={images.locaidedblackicon}
            style={styles.profileIcon3}
            resizeMode="contain"
          />
          <View style={styles.postContent4}>
            <View style={styles.headerRow4}>
              <View style={styles.nameRow4}>
                <CustomText
                  label={'Bill Smith'}
                  fontWeight={600}
                  fontSize={14}
                  lineHeight={21}
                  color={'#1A1A1A'}
                />
                <ImageFast
                source={images.goldpoint}
                style={{ width: 24, height: 24 }}
                resizeMode="contain"
              />
                <CustomText
                  label={'10:45'}
                  fontSize={14}
                  fontWeight={400}
                  lineHeight={21}
                  color={'#525866'}
                  marginLeft={4}
                />
              </View>

              <TouchableOpacity style={styles.headerButton}>
                <Text style={styles.headerButtonText}>Hot spot</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.postDescription}>
              We promote a safe, respectful environment. No tolerance for adult content, abuse, or violence. Posts with excess dislikes are removed.
            </Text>
            <ImageFast
              source={images.mediaimg9}
              style={styles.mediaImage4}
              resizeMode="cover"
            />
            <ActionBar
              items={[
                { icon: images.posticon1, label: '2k' },
                { icon: images.posticon2, label: '8' },
                {
                  icon: images.posticon3,
                  label: '102',
                },
                { icon: images.posticon4, label: '10' },
                { icon: images.posticon5, label: '90' },
              ]}
            />
          </View>
        </View>
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
    marginBottom: 10,
  },

  //
  postContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
  },

  profileIcon: {
    width: 40,
    height: 40,
    marginTop: 4,
  },

  postContent: {
    flex: 1,
    marginLeft: 12,
  },

  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },

  nameText: {
    color: '#0E121B',
  },

  goldIcon: {
    width: 24,
    height: 24,
  },

  headerButton: {
    paddingHorizontal: 4,
    paddingVertical: 5,
  },

  headerButtonText: {
    fontSize: 12,
    color: '#717784',
    borderWidth: 1,
    fontWeight: '600',
    borderColor: '#E1E4EA',
    borderRadius: 50,
    backgroundColor: '#F2F5F8',
    padding: 2,
    width: 54,
    textAlign: 'center',
  },
  headerButton5: {
    paddingHorizontal: 4,
    paddingVertical: 5,
  },

  headerButtonText5: {
    fontSize: 12,
    color: 'white',
    borderWidth: 1,
    fontWeight: '600',
    borderColor: '#FF2557',
    borderRadius: 50,
    backgroundColor: '#FF2557',
    padding: 2,
    width: 54,
    textAlign: 'center',
  },
  postText: {
    fontWeight: '400',
    lineHeight: 19,
    color: '#0E121B',
    fontSize: 14,
  },

  mediaImage: {
    width: '100%',
    height: 229,
    marginTop: 10,
    borderRadius: 8,
    resizeMode: 'contain',
  },

  // post 3
  postContainer2: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 20,
    marginTop: 0,
  },
postContainer9: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 170,
    marginTop: 0,
  },
  profileIcon2: {
    width: 42,
    height: 42,
    marginTop: 6,
    borderRadius: 21,
  },

  postContent2: {
    flex: 1,
    marginLeft: 14,
  },

  headerRow2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  nameRow2: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },

  badgeIcon2: {
    width: 20,
    height: 20,
    marginLeft: 5,
  },

  postText2: {
    fontWeight: '400',
    lineHeight: 20,
    color: '#444',
  },

  mediaImage2: {
    width: '100%',
    height: 210,
    marginTop: 10,
    borderRadius: 10,
  },
  plusButton: {
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    width: 47,
    borderColor: '#C2F5DA',
    marginLeft: 5,
  },

  plusButtonText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#C2F5DA',
  },
  postDescription: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 19,
    color: '#0E121B',
    letterSpacing: -0.6,
  },

  postContainer3: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 20,
    marginTop: 0,
  },
  profileIcon3: {
    width: 42,
    height: 42,
    marginTop: 6,
    borderRadius: 21,
  },
  postContent3: {
    flex: 1,
    marginLeft: 14,
  },

  headerRow3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  nameRow3: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },

  badgeIcon3: {
    width: 20,
    height: 20,
    marginLeft: 5,
  },

  postText3: {
    fontWeight: '400',
    lineHeight: 20,
    color: '#444',
  },

  mediaImage3: {
    width: '100%',
    height: 210,
    marginTop: 10,
    borderRadius: 10,
  },

  plusButton3: {
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    width: 47,
    borderColor: '#FFC0C5',
    marginLeft: 5,
  },

  plusButtonText3: {
    fontSize: 13,
    fontWeight: '600',
    color: '#FFC0C5',
  },
  postDescription3: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 19,
    color: '#0E121B',
    letterSpacing: -0.6,
  },

  postContainer4: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 20,
    marginTop: 0,
  },
  profileIcon4: {
    width: 42,
    height: 42,
    marginTop: 6,
    borderRadius: 21,
  },
  postContent4: {
    flex: 1,
    marginLeft: 14,
  },

  headerRow4: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  nameRow4: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },

  badgeIcon4: {
    width: 20,
    height: 20,
    marginLeft: 5,
  },

  postText4: {
    fontWeight: '400',
    lineHeight: 20,
    color: '#444',
  },

  mediaImage4: {
    width: '100%',
    height: 210,
    marginTop: 10,
    borderRadius: 10,
  },

  plusButton4: {
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    width: 47,
    borderColor: '#FFC0C5',
    marginLeft: 5,
  },

  plusButtonText4: {
    fontSize: 13,
    fontWeight: '600',
    color: '#FFC0C5',
  },
  postDescription4: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 19,
    color: '#0E121B',
    letterSpacing: -0.6,
  },
});
