import React from 'react';


import {
  TouchableOpacity,
  Text,
  ColorValue,
  TouchableOpacityProps
} from 'react-native';

import { styles } from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
  color: ColorValue
  backgroundColor: ColorValue
}

export const Button:React.FC<Props> = ({backgroundColor, color, title, ...rest}) => {
  return (
    <TouchableOpacity style={[styles.button, {backgroundColor}]} {...rest}>
      <Text style={[styles.title, {color}]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}