import React from 'react';
import { View } from 'react-native';

import Logo from '../../assets/images/logo.svg';
import styles from './styles';

const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <Logo width={104} height={32} />
    </View>
  );
};

export default Header;
