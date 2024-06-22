import 'styled-components/native';
import theme from '../styles/theme';

declare module 'styled-components/native' {
  type TThemeType = typeof theme;
  export interface DefaultTheme extends TThemeType {}
}
