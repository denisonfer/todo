import React from 'react';

import Logo from '@assets/images/logo.svg';
import * as S from './styles';

const Header: React.FC = () => {
  return (
    <S.Container>
      <Logo width={104} height={32} />
    </S.Container>
  );
};

export default Header;
