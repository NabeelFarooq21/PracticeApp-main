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
// import ActionBar from '../../../components/home/ActionBar';
import Post from '../../../components/home/Post';
import BottomBar from '../../../components/home/BottomBar';
const FeedIntro = () => {
  const postData = [
    {
      id: '1',
      userName: 'Locaided',
      profileImage: images.locaidedblackicon,
      postImage: images.media1,
      description:
        'Discover the world around you like never before.\n\nImagine your social media feed displaying only posts from local users within an adjustable 1 - 50km radius, without being connected to anyone. Wherever you go, your feed updates in real time with posts from your current area.',
      time: '23:59',
      badge: 'gold',
      imageHeight: 500,
      actionBarItems: [
        { icon: images.posticon1, label: '120' },
        { icon: images.posticon2, label: '10' },
        { icon: images.posticon3, label: '45' },
        { icon: images.posticon4, label: '32' },
        { icon: images.posticon5, label: '320' },
      ],
    },
    {
      id: '2',
      type: 'special',
      userName: 'Max Schmidt',
      profileImage: images.tigeravatar,
      description: '',
      time: '',
      socialScore: '126.4 K',
      customContent: (
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
      ),
    },
    {
      id: '3',
      userName: 'John Doe',
      profileImage: images.userimg1,
      postImage: images.mediaimg1,
      description:
        "Stuck on the M6 again 🙄 crazy traffic jam! If you're heading this way, maybe grab a coffee first ☕",
      time: '23:59',
      badge: 'blue',
      imageHeight: 229,
      actionBarItems: [
        { icon: images.posticon1, label: '12k' },
        { icon: images.posticon2, label: '102' },
        { icon: images.posticon3, label: '45' },
        { icon: images.posticon4, label: '302' },
        { icon: images.posticon5, label: '20' },
      ],
    },
    {
      id: '4',
      userName: 'TravelerX',
      profileImage: images.userimg2,
      postImage: images.mediaimg2,
      description:
        "Just reached downtown 🎉 can't wait to explore the food street! 🍔🍕",
      time: '10:45',
      postType: 'Event',
      scoreChange: 0.59,
      imageHeight: 210,
      actionBarItems: [
        { icon: images.posticon1, label: '2k' },
        { icon: images.greenlike, label: '8' },
        { icon: images.posticon3, label: '102' },
        { icon: images.posticon4, label: '10' },
        { icon: images.posticon5, label: '90' },
      ],
    },
    {
      id: '5',
      userName: 'Smith X',
      profileImage: images.userimg3,
      postImage: images.mediaimg3,
      description:
        "Ugh! \n\nJust got to the station and the trains are cancelled! Looks like it's going to be one of those days. 🙄  \n\nDon't say I didn't warn ya. 🚄❌",
      time: '10:45',
      postType: 'News',
      scoreChange: -0.59,
      imageHeight: 210,
      actionBarItems: [
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
      ],
    },
    {
      id: '6',
      userName: 'Smith X',
      profileImage: images.userimg4,
      postImage: images.mediaimg4,
      description:
        "Our beloved family cat, Whiskers, has been missing since this morning.\n\nShe's a grey tabby and very friendly. If you spot her around town, please drop me a message ASAP! \n\nDon't forget to hit that repost button to help increase the search radius. 🙏",
      time: '10:45',
      postType: 'Missing',
      imageHeight: 210,
      actionBarItems: [
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
      ],
    },
    {
      id: '7',
      userName: 'Oscar Heinrich',
      profileImage: images.userimg5,
      postImage: images.mediaimg5,
      description:
        'Just discovered this hidden gem of a restaurant on Elmo Street.\n\nTheir outside terrace is a sunny haven and the food is to die for!',
      time: '10:45',
      postType: 'Alert',
      customHeaderButton: {
        text: 'Alert',
        backgroundColor: '#FF2557',
        textColor: 'white',
        borderColor: '#FF2557',
      },
      imageHeight: 210,
      actionBarItems: [
        { icon: images.posticon1, label: '2k' },
        { icon: images.posticon2, label: '8' },
        { icon: images.posticon3, label: '102' },
        { icon: images.posticon4, label: '10' },
        { icon: images.posticon5, label: '90' },
      ],
    },
    {
      id: '8',
      userName: 'Oscar Heinrich',
      profileImage: images.userimg4,
      postImage: images.mediaimg6,
      description:
        "Looks like it's time to break out those umbrellas and rain boots! 🌧️\n\nRainstorm incoming. Stay safe, neighbors!",
      time: '10:45',
      postType: 'Hot spot',
      imageHeight: 210,
      actionBarItems: [
        { icon: images.posticon1, label: '2k' },
        { icon: images.posticon2, label: '8' },
        { icon: images.posticon3, label: '102' },
        { icon: images.posticon4, label: '10' },
        { icon: images.posticon5, label: '90' },
      ],
    },
    {
      id: '9',
      userName: 'Oscar Heinrich',
      profileImage: images.userimg7,
      postImage: images.mediaimg7,
      description:
        'Hey fellow Locaiders! \n\nMy coffee shop buddy and I are in need of some extra hands. Looking for passionate baristas to join our quirky coffee corner ☕️🍩! \n\nFlexible hours, great pay, and of course, unlimited caffeine! 💪🏽 ',
      time: '10:45',
      postType: 'Hot spot',
      imageHeight: 210,
      actionBarItems: [
        { icon: images.posticon1, label: '2k' },
        { icon: images.posticon2, label: '8' },
        { icon: images.posticon3, label: '102' },
        { icon: images.posticon4, label: '10' },
        { icon: images.posticon5, label: '90' },
      ],
    },
    {
      id: '10',
      userName: 'Bill Smith',
      profileImage: images.userimg8,
      postImage: images.mediaimg8,
      description:
        "Car troubles in the middle of nowhere, no gas and my spare can is empty too! I'm stuck about 20 miles outside of town on the old county road, no other cars in sight.\n\nReception isn't great out here, but I'm hoping this message gets through on. \n\nIf anyone's nearby and could bring a can of gas, a tow, or even just a ride back to town, I'd be forever grateful!",
      time: '10:45',
      postType: 'Hot spot',
      imageHeight: 210,
      actionBarItems: [
        { icon: images.posticon1, label: '2k' },
        { icon: images.posticon2, label: '8' },
        { icon: images.posticon3, label: '102' },
        { icon: images.posticon4, label: '10' },
        { icon: images.posticon5, label: '90' },
      ],
    },
    {
      id: '11',
      userName: 'Bill Smith',
      profileImage: images.locaidedblackicon,
      postImage: images.mediaimg9,
      description:
        'We promote a safe, respectful environment. No tolerance for adult content, abuse, or violence. \nAll Posts with excess dislikes are removed.',
      time: '10:45',
      badge: 'gold',
      postType: 'Hot spot',
      imageHeight: 210,

      actionBarItems: [
        { icon: images.posticon1, label: '2k' },
        { icon: images.posticon2, label: '8' },
        { icon: images.posticon3, label: '102' },
        { icon: images.posticon4, label: '10' },
        { icon: images.posticon5, label: '90' },
      ],
    },
  ];
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
        <CustomHorizontalLine marginBottom={10} />
        {/*  */}
        {postData.map(post => (
          <View key={post.id}>
            <Post post={post} />
            <CustomHorizontalLine marginBottom={10} />
          </View>
        ))}
        <BottomBar marginTop={90} />
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
});
