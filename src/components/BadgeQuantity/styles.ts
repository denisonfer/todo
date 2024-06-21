import { StyleSheet } from 'react-native';
import theme from '../../styles/theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.base.gray400,
    borderRadius: 999,
    color: theme.base.gray200,
    fontFamily: theme.fonts.InterBold,
    fontSize: theme.fontSize.sm,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginLeft: 8,
  },
  text: {
    color: theme.base.gray200,
    fontFamily: theme.fonts.InterBold,
    fontSize: theme.fontSize.sm,
  },
});

export default styles;
