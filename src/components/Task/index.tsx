import IconFeather from '@expo/vector-icons/Feather';
import Checkbox from 'expo-checkbox';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { TTask } from '../../shared/interfaces/TTask';
import theme from '../../styles/theme';
import styles from './styles';

type TProps = {
  task: TTask;
  onToggleTaskDone: (id: string) => void;
  onRemoveTask: (id: string) => void;
};
const Task: React.FC<TProps> = ({ task, onToggleTaskDone, onRemoveTask }) => {
  return (
    <View style={styles.container}>
      <Checkbox
        value={task.done}
        style={styles.checkBox}
        color={theme.product.blue}
        onValueChange={() => onToggleTaskDone(task.id)}
      />
      <Text
        style={[
          styles.title,
          {
            textDecorationLine: task.done ? 'line-through' : 'none',
            color: task.done ? theme.base.gray300 : theme.base.gray100,
          },
        ]}
      >
        {task.title}
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => onRemoveTask(task.id)}
      >
        <IconFeather name='trash-2' size={18} color={theme.base.gray300} />
      </TouchableOpacity>
    </View>
  );
};

export default Task;
