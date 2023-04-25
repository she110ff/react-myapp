import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Text } from '@chakra-ui/react';
import TodoItem from './TodoItem';
import { Todo } from '../../types';
import { RootState } from '../../store/reducers';

function TodoList() {
  const { todos } = useSelector((state: RootState) => state.todo);
  console.log('todos :', todos);
  if (!todos || todos.length === 0) {
    return (
      <Box mt={8}>
        <Text fontSize="lg">할 일이 없습니다.</Text>
      </Box>
    );
  }

  return (
    <Box mt={8}>
      {todos.map((todo: Todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </Box>
  );
}

export default TodoList;
