import { StyleSheet } from 'react-native';
import theme from '../../styles/theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    height: 64,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 8,
    backgroundColor: theme.base.gray500,
    justifyContent: 'space-between',
  },
  checkBox: {
    borderRadius: 999,
  },
  title: {
    flex: 1,
    fontFamily: theme.fonts.Inter,
    fontSize: theme.fontSize.md,
    marginHorizontal: 8,
  },
  button: {
    alignItems: 'center',
    height: 52,
    justifyContent: 'center',
    width: 52,
  },
});

export default styles;
