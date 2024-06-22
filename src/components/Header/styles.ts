import styled from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => `
		align-items: center;
		background-color: ${theme.base.gray700};
		height: 173px;
		justify-content: center;
		width: 100%;
`}
`;
