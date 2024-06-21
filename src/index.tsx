import IconFeather from '@expo/vector-icons/Feather';
import React, { useCallback } from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import * as Crypto from 'expo-crypto';
import BadgeQuantity from './components/BadgeQuantity';
import Header from './components/Header';
import Input from './components/Input';
import Task from './components/Task';
import { TTask } from './shared/interfaces/TTask';
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
    <View>
      <Header />

      <View style={styles.rowInput}>
        <Input value={taskTitle} onChangeText={setTaskTitle} />
        <TouchableOpacity style={styles.button} onPress={handleAddTask}>
          <IconFeather
            name='plus-circle'
            color={theme.base.gray100}
            size={22}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.rowInfo}>
        <View style={styles.row}>
          <Text style={styles.textInfo}>Criadas</Text>
          <BadgeQuantity quantity={tasks.length} />
        </View>

        <View style={styles.row}>
          <Text style={[styles.textInfo, { color: theme.product.purple }]}>
            Concluídas
          </Text>
          <BadgeQuantity quantity={tasksCompletedQuantity} />
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.containerTasks}
      >
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onToggleTaskDone={handleToggleTaskDone}
            onRemoveTask={handleRemoveTask}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191919',
  },
  rowInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -32,
    marginBottom: 32,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: theme.product.blueDark,
    height: 52,
    justifyContent: 'center',
    marginLeft: 4,
    borderRadius: 8,
    width: 52,
  },
  rowInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingHorizontal: 24,
  },
  textInfo: {
    fontFamily: theme.fonts.InterBold,
    fontSize: theme.fontSize.md,
    color: theme.product.blue,
  },

  containerTasks: {
    flexGrow: 1,
    paddingHorizontal: 24,
  },
});

export default MyApp;
