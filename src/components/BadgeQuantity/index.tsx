import React from 'react';

import * as S from './styles';

type TProps = {
  quantity: number;
};
const BadgeQuantity: React.FC<TProps> = ({ quantity }) => {
  return (
    <S.Container>
      <S.Text>{quantity}</S.Text>
    </S.Container>
  );
};

export default BadgeQuantity;
