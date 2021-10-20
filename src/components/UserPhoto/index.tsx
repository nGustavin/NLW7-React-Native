import React from 'react';

import {
  Image
} from 'react-native';

import { styles } from './styles';
import DefaultAvatar from '../../assets/avatar.png'
import {LinearGradient} from 'expo-linear-gradient'
import { COLORS } from '../../theme';

const SIZES = {
  small: {
    containerSize: 32,
    avatarSize: 28
  },
  normal: {
    containerSize: 48,
    avatarSize: 42
  }
}

type UserPhotosProps = {
  sizes?: 'small' | 'normal';
  imageUri: string | undefined;
}

const AvatarDefault = Image.resolveAssetSource(DefaultAvatar).uri

export const UserPhoto: React.FC<UserPhotosProps> = ({imageUri, sizes = 'normal'}) => {
  const { avatarSize, containerSize } = SIZES[sizes]

  return (
    <LinearGradient
      colors={[
        COLORS.PINK,
        COLORS.YELLOW
      ]}
      start={{x: 0, y: 0.8}}
      end={{x: 0.9, y: 1}}
      style={[
        styles.container,
        {
          width: containerSize,
          height: containerSize,
          borderRadius: containerSize/2
        }
      ]}
    >    
      <Image 
        source={{uri: imageUri ?? AvatarDefault}}
        style={[
          styles.avatar,
          {
            width: avatarSize,
            height: avatarSize,
            borderRadius: avatarSize/2
          }
        ]}
      />
    </LinearGradient>

  );
}