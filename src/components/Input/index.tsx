import React, { Dispatch, SetStateAction } from 'react';
import { TextInput } from 'react-native';
import theme from '../../styles/theme';
import styles from './styles';

type TProps = {
  value: string;
  onChangeText: Dispatch<SetStateAction<string>>;
};

const Input: React.FC<TProps> = ({ value, onChangeText }) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder='Adicione uma nova tarefa'
      placeholderTextColor={theme.base.gray300}
      style={styles.container}
    />
  );
};

export default Input;
