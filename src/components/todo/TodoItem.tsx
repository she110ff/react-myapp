import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box, Checkbox, Text, IconButton } from '@chakra-ui/react';
import { RiDeleteBinLine, RiEditLine } from 'react-icons/ri';
import { Todo } from '../../types';
import { toggleTodo, deleteTodo } from '../../store/reducers/todoReducer';
import EditTodoForm from './EditTodoForm';

interface Props {
  todo: Todo;
}

function TodoItem({ todo }: Props) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleToggle = () => {
    dispatch(
      toggleTodo({
        ...todo,
        completed: !todo.completed,
      })
    );
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleClose = () => {
    setIsEditing(false);
  };

  return (
    <Box display="flex" alignItems="center" mb={4}>
      <Checkbox isChecked={todo.completed} onChange={handleToggle} mr={4} />
      <Text
        fontSize="lg"
        mr="auto"
        textDecoration={todo.completed ? 'line-through' : 'none'}
      >
        {todo.text}
      </Text>
      <IconButton
        icon={<RiDeleteBinLine />}
        aria-label="삭제"
        variant="ghost"
        colorScheme="red"
        onClick={handleDelete}
      />
      <IconButton
        aria-label="Edit"
        icon={<RiEditLine />}
        mr={4}
        onClick={handleEdit}
      />
      {isEditing && (
        <EditTodoForm todo={todo} isOpen={isEditing} onClose={handleClose} />
      )}
    </Box>
  );
}

export default TodoItem;
