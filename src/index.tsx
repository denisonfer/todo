import IconFeather from '@expo/vector-icons/Feather';
import * as Crypto from 'expo-crypto';
import React, { useCallback } from 'react';
import { Alert } from 'react-native';

import BadgeQuantity from '@components/BadgeQuantity';
import Header from '@components/Header';
import Input from '@components/Input';
import Task from '@components/Task';
import { TTask } from '@shared/interfaces/TTask';
import theme from '@styles/theme';
import * as S from './styles';

const MyApp: React.FC = () => {
  const [tasks, setTasks] = React.useState<TTask[]>([]);
  const [taskTitle, setTaskTitle] = React.useState('');

  const tasksCompletedQuantity = React.useMemo(
    () => tasks.filter(task => task.done).length,
    [tasks],
  );

  const handleAddTask = useCallback(() => {
    setTasks(
      [
        ...tasks,
        {
          id: Crypto.randomUUID(),
          title: taskTitle,
          done: false,
          createdAt: new Date(),
        },
      ].sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime()),
    );
    setTaskTitle('');
  }, [taskTitle]);

  const handleToggleTaskDone = useCallback(
    (id: string) => {
      setTasks(prevState => {
        const updatedTasks = prevState.map(task => {
          if (task.id === id) {
            return {
              ...task,
              done: !task.done,
            };
          }
          return task;
        });

        const tasksNotDone = updatedTasks.filter(task => !task.done);
        const tasksDone = updatedTasks.filter(task => task.done);

        return [...tasksNotDone, ...tasksDone];
      });
    },
    [tasks],
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
              setTasks(tasks.filter(task => task.id !== id));
            },
          },
        ],
      );
    },
    [tasks],
  );

  return (
    <>
      <Header />

      <S.RowAction>
        <Input value={taskTitle} onChangeText={setTaskTitle} />
        <S.ButtonAddTask onPress={handleAddTask} disabled={taskTitle === ''}>
          <IconFeather
            name="plus-circle"
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
        {tasks.map(task => (
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
