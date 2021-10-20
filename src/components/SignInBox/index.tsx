import React from 'react';


import {
  View
} from 'react-native';
import { COLORS } from '../../theme';
import { Button } from '../Button';

import { styles } from './styles';

export const SignInBox:React.FC = () => {
  return (
    <View style={styles.container}> 
      <Button 
        title="Entrar com github" 
        icon="github" 
        color={COLORS.BLACK_PRIMARY} 
        backgroundColor={COLORS.YELLOW}
      />
    </View>
  );
}