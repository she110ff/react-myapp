import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box, Flex, Input, Button } from '@chakra-ui/react';
import { addTodo } from '../../store/reducers/todoReducer';

function AddTodoForm() {
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('todoText :', todoText);
    if (todoText.trim()) {
      dispatch(
        addTodo({
          id: new Date().getTime().toString(),
          text: todoText,
          completed: false,
        })
      );
      setTodoText('');
    }
  };

  return (
    <Box mb={8}>
      <form onSubmit={handleSubmit}>
        <Flex alignItems="center">
          <Input
            type="text"
            placeholder="새로운 할 일을 입력하세요."
            value={todoText}
            onChange={(event) => setTodoText(event.target.value)}
            mr={4}
          />
          <Button colorScheme="blue" type="submit">
            추가
          </Button>
        </Flex>
      </form>
    </Box>
  );
}

export default AddTodoForm;
