import React, { Dispatch, SetStateAction } from 'react';
import * as S from './styles';

type TProps = {
  value: string;
  onChangeText: Dispatch<SetStateAction<string>>;
};

const Input: React.FC<TProps> = ({ value, onChangeText }) => {
  return (
    <S.Input
      value={value}
      onChangeText={onChangeText}
      placeholder='Adicione uma nova tarefa'
    />
  );
};

export default Input;
