import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme';

export const styles = StyleSheet.create({
  avatar: {
    borderWidth: 4,
    borderColor: COLORS.BLACK_SECONDARY,
    width: 48,
    height: 48
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});