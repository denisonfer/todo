import styled from 'styled-components/native';

export const Input = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.base.gray300,
}))`
  ${({ theme }) => `
		background-color: ${theme.base.gray500};
		border-radius: 8px;
		color: ${theme.base.gray100};
		font-family: ${theme.fonts.Inter};
		font-size: ${theme.fontSize.lg}px;
		height: 54px;
		padding: 0 16px;
		width: 70%;
		
`}
`;
