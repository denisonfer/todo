import IconFeather from '@expo/vector-icons/Feather';
import React from 'react';

import { TTask } from '@shared/interfaces/TTask';
import theme from '@styles/theme';
import * as S from './styles';

type TProps = {
  task: TTask;
  onToggleTaskDone: (id: string) => void;
  onRemoveTask: (id: string) => void;
};
const Task: React.FC<TProps> = ({ task, onToggleTaskDone, onRemoveTask }) => {
  return (
    <S.Container>
      <S.Check
        value={task.done}
        color={theme.product.blue}
        onValueChange={() => onToggleTaskDone(task.id)}
      />
      <S.Title done={task.done}>{task.title}</S.Title>
      <S.Button onPress={() => onRemoveTask(task.id)}>
        <IconFeather name="trash-2" size={18} color={theme.base.gray300} />
      </S.Button>
    </S.Container>
  );
};

export default Task;
