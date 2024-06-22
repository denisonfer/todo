import styled from 'styled-components/native';

type TTextProps = {
  purple?: boolean;
};

export const RowAction = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: -32px;
  margin-bottom: 32px;
`;

export const ButtonAddTask = styled.TouchableOpacity`
  ${({ theme, disabled }) => `
    align-items: center;
    background-color: ${disabled ? theme.base.gray300 : theme.product.blueDark};
    height: 52px;
    justify-content: center;
    margin-left: 4px;
    border-radius: 8px;
    width: 52px;
  `}
`;

export const RowInfo = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 0 24px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TextInfo = styled.Text<TTextProps>`
  ${({ theme, purple }) => `
    font-family: ${theme.fonts.InterBold};
    font-size: ${theme.fontSize.md}px;
    color: ${purple ? theme.product.purple : theme.product.blue};
  `}
`;

export const Scroll = styled.ScrollView`
  flex-grow: 1;
  padding: 0 24px;
`;
