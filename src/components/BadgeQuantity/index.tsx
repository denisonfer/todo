import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

type TProps = {
  quantity: number;
};
const BadgeQuantity: React.FC<TProps> = ({ quantity }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{quantity}</Text>
    </View>
  );
};

export default BadgeQuantity;
