import IconFeather from '@expo/vector-icons/Feather';
import React, { useCallback } from 'react';
import { Alert } from 'react-native';

import * as Crypto from 'expo-crypto';
import BadgeQuantity from './components/BadgeQuantity';
import Header from './components/Header';
import Input from './components/Input';
import Task from './components/Task';
import { TTask } from './shared/interfaces/TTask';
import * as S from './styles';
import theme from './styles/theme';

const MyApp: React.FC = () => {
  const [tasks, setTasks] = React.useState<TTask[]>([]);
  const [taskTitle, setTaskTitle] = React.useState('');

  const tasksCompletedQuantity = React.useMemo(
    () => tasks.filter((task) => task.done).length,
    [tasks]
  );

  const handleAddTask = useCallback(() => {
    setTasks([
      ...tasks,
      {
        id: Crypto.randomUUID(),
        title: taskTitle,
        done: false,
      },
    ]);

    setTaskTitle('');
  }, [taskTitle, tasks]);

  const handleToggleTaskDone = useCallback(
    (id: string) => {
      setTasks((prevState) =>
        prevState.map((task) => {
          if (task.id === id) {
            return {
              ...task,
              done: !task.done,
            };
          }
          return task;
        })
      );
    },
    [tasks]
  );

  const handleRemoveTask = useCallback(
    (id: string) => {
      Alert.alert(
        'Remover item',
        'Você tem certeza que deseja remover esse item?',
        [
          {
            text: 'Cancelar',
            style: 'cancel',
          },
          {
            text: 'Remover',
            onPress: () => {
              setTasks(tasks.filter((task) => task.id !== id));
            },
          },
        ]
      );
    },
    [tasks]
  );

  return (
    <>
      <Header />

      <S.RowAction>
        <Input value={taskTitle} onChangeText={setTaskTitle} />
        <S.ButtonAddTask onPress={handleAddTask} disabled={taskTitle === ''}>
          <IconFeather
            name='plus-circle'
            color={theme.base.gray100}
            size={22}
          />
        </S.ButtonAddTask>
      </S.RowAction>

      <S.RowInfo>
        <S.Row>
          <S.TextInfo>Criadas</S.TextInfo>
          <BadgeQuantity quantity={tasks.length} />
        </S.Row>

        <S.Row>
          <S.TextInfo purple>Concluídas</S.TextInfo>
          <BadgeQuantity quantity={tasksCompletedQuantity} />
        </S.Row>
      </S.RowInfo>

      <S.Scroll showsVerticalScrollIndicator={false}>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onToggleTaskDone={handleToggleTaskDone}
            onRemoveTask={handleRemoveTask}
          />
        ))}
      </S.Scroll>
    </>
  );
};

export default MyApp;
