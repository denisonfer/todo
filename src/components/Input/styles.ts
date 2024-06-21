import { StyleSheet } from 'react-native';
import theme from '../../styles/theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.base.gray500,
    borderRadius: 8,
    color: theme.base.gray100,
    fontFamily: theme.fonts.Inter,
    fontSize: theme.fontSize.lg,
    height: 54,
    paddingHorizontal: 16,
    width: '70%',
  },
});
export default styles;
