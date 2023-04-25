import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Button,
  FormControl,
  FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { updateTodo } from '../../store/reducers/todoReducer';
import { Todo } from '../../types';

interface Props {
  todo: Todo;
  isOpen: boolean;
  onClose: () => void;
}

const EditTodoForm: React.FC<Props> = ({ todo, isOpen, onClose }) => {
  const dispatch = useDispatch();
  const [text, setTitle] = useState<string>(todo.text);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleSubmit = () => {
    dispatch(
      updateTodo({
        id: todo.id,
        text: text,
        completed: todo.completed,
      })
    );
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Todo 수정하기</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>제목</FormLabel>
            <input type="text" value={text} onChange={handleTitleChange} />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button variant="ghost" mr={3} onClick={onClose}>
            취소
          </Button>
          <Button colorScheme="blue" onClick={handleSubmit}>
            저장
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EditTodoForm;
