// components/home/Post.js
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import ImageFast from '../ImageFast';
import CustomText from '../CustomText';
import ActionBar from './ActionBar';
import { images } from '../../assets/Index';

const Post = ({ post, style,}) => {
  const renderBadge = () => {
    if (post.badge === 'gold') {
      return (
        <ImageFast
          source={images.goldpoint}
          style={{ width: 24, height: 24, marginLeft: 4 }}
          resizeMode="contain"
        />
      );
    }
    if (post.badge === 'blue') {
      return (
        <ImageFast
          source={images.bluetick}
          style={{ width: 24, height: 24, marginLeft: 4 }}
          resizeMode="contain"
        />
      );
    }
    return null;
  };

  const renderScoreChange = () => {
    if (!post.scoreChange) return null;

    const isPositive = post.scoreChange > 0;
    return (
      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderRadius: 5,
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
          width: 47,
          borderColor: isPositive ? '#C2F5DA' : '#FFC0C5',
          marginLeft: 5,
        }}
      >
        <Text
          style={{
            fontSize: 13,
            fontWeight: '600',
            color: isPositive ? '#C2F5DA' : '#FFC0C5',
          }}
        >
          {isPositive ? '+' : ''}
          {post.scoreChange}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderHeaderButton = () => {
    if (!post.postType) return null;

    if (post.customHeaderButton) {
      return (
        <TouchableOpacity style={styles.headerButton5}>
          <Text style={styles.headerButtonText5}>{post.postType}</Text>
        </TouchableOpacity>
      );
    }

    return (
      <TouchableOpacity style={styles.headerButton}>
        <Text style={styles.headerButtonText}>{post.postType}</Text>
      </TouchableOpacity>
    );
  };
  if (post.type === 'special') {
    return (
      <View style={styles.post2}>
        <ImageFast
          style={{ width: 96, height: 96, resizeMode: 'cover' }}
          source={post.profileImage}
        />
        <CustomText
          label={post.userName}
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
            <Text>{post.socialScore}</Text>
          </TouchableOpacity>
          <ImageFast
            source={images.leftarrow}
            style={{ width: 24, height: 24, resizeMode: 'contain' }}
            resizeMode="contain"
          />
        </View>
        {post.customContent}
      </View>
    );
  }

  return (
    <View style={[styles.postContainer, style]}>
      <ImageFast
        source={post.profileImage}
        style={styles.profileIcon}
        resizeMode="contain"
      />

      <View style={styles.postContent}>
        {/* Header Row */}
        <View style={styles.headerRow}>
          <View style={styles.nameRow}>
            <CustomText
              label={post.userName}
              fontWeight={600}
              fontSize={14}
              lineHeight={24}
              color={'#0E121B'}
            />
            {post.badge && !post.scoreChange && (
              <>
                {renderBadge()}
                <CustomText
                  label={post.time}
                  fontWeight={400}
                  fontSize={14}
                  lineHeight={21}
                  color={'#525866'}
                  marginLeft={4}
                />
              </>
            )}
            {post.scoreChange && (
              <>
                <CustomText
                  label={post.time}
                  fontWeight={400}
                  fontSize={14}
                  lineHeight={21}
                  color={'#525866'}
                  marginLeft={4}
                />
                {renderScoreChange()}
                <ImageFast
                  source={images.leftarrow}
                  style={{ width: 24, height: 24 }}
                  resizeMode="contain"
                />
              </>
            )}

            {!post.badge && !post.scoreChange && (
              <CustomText
                label={post.time}
                fontWeight={400}
                fontSize={14}
                lineHeight={21}
                color={'#525866'}
                marginLeft={4}
              />
            )}
          </View>
          {renderHeaderButton()}
        </View>
        <Text style={styles.postDescription}>{post.description}</Text>        
        {post.postImage && (
          <ImageFast
            source={post.postImage}
            style={[styles.mediaImage, { height: post.imageHeight || 210 }]}
            resizeMode="cover"
          />
        )}
        <ActionBar items={post.actionBarItems} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    marginBottom: 10,
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
    marginBottom: 4,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  postDescription: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 19,
    color: '#0E121B',
    letterSpacing: -0.6,
  },
  mediaImage: {
    width: '100%',
    marginTop: 10,
    borderRadius: 8,
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
});

export default Post;
