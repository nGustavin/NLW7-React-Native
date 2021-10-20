import React from 'react';
import {AntDesign} from '@expo/vector-icons'

import {
  TouchableOpacity,
  Text,
  ColorValue,
  TouchableOpacityProps,
  ActivityIndicator
} from 'react-native';

import { styles } from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
  color: ColorValue;
  backgroundColor: ColorValue;
  icon?: React.ComponentProps<typeof AntDesign>['name']
  isLoading?: boolean
}

export const Button:React.FC<Props> = ({
  backgroundColor, 
  color, 
  title, 
  icon,
  isLoading,
  ...rest
}) => {
  return (
    <TouchableOpacity 
      style={[styles.button, 
      {backgroundColor}]} 
      activeOpacity={0.8}
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? <ActivityIndicator color={color}/> :
      <>
        <AntDesign name={icon} size={24} style={styles.icon}/>
        <Text style={[styles.title, {color}]}>
          {title}
        </Text>
      </>
      }
    </TouchableOpacity>
  );
}