import Checkbox from 'expo-checkbox';
import styled from 'styled-components/native';

type TTitleProps = {
  done: boolean;
};

export const Container = styled.View`
  ${({ theme }) => `
  flex-direction: row;
  align-items: center;
  border-radius: 8px;
  height: 64px;
  padding: 12px 16px;
  margin-bottom: 8px;
  background-color: ${theme.base.gray500};
  justify-content: space-between;
`}
`;

export const Check = styled(Checkbox)`
  border-radius: 999px;
`;

export const Title = styled.Text<TTitleProps>`
  ${({ theme, done }) => `
		flex: 1;
		font-family: ${theme.fonts.Inter};
		font-size: ${theme.fontSize.md}px;
		margin: 0 8px;
		text-decoration-line: ${done ? 'line-through' : 'none'};
		color: ${done ? theme.base.gray300 : theme.base.gray100};
	`}
`;

export const Button = styled.TouchableOpacity`
  align-items: center;
  height: 52px;
  justify-content: center;
  width: 52px;
`;
