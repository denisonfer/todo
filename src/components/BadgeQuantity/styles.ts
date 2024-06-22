import styled from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => `
		background-color: ${theme.base.gray400};
		border-radius: 999px;
		color: ${theme.base.gray200};
		font-family: ${theme.fonts.InterBold};
		font-size: ${theme.fontSize.sm}px;
		padding: 2px 8px;
		margin-left: 8px;
`}
`;

export const Text = styled.Text`
  ${({ theme }) => `
		color: ${theme.base.gray200};
		font-family: ${theme.fonts.InterBold};
		font-size: ${theme.fontSize.sm}px;
`}
`;
