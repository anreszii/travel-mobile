import { View, Text } from 'react-native';
import React from 'react';
import Modal from '../../../ui/Modal/Modal';
import Typography from '../../../ui/Typography/Typography';
import Button from '../../../ui/Button/Button';
import modalDeleteCommentStyles from './ModalDeleteCommentStyle';

interface IModalDeleteComment {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalDeleteComment: React.FC<IModalDeleteComment> = ({
  visible,
  setVisible,
}) => {
  return (
    <Modal visible={visible} setVisible={setVisible}>
      <View style={modalDeleteCommentStyles.container}>
        <Typography style={modalDeleteCommentStyles.title}>
          Вы действительно хотите удалить комментарий?
        </Typography>
        <View style={modalDeleteCommentStyles.buttonContent}>
          <Button
            variant="subcategories"
            style={modalDeleteCommentStyles.button}
            onPress={() => setVisible(!visible)}>
            <Typography style={modalDeleteCommentStyles.buttonTitle}>
              Отмена
            </Typography>
          </Button>
          <View style={modalDeleteCommentStyles.vL}></View>
          <Button
            variant="subcategories"
            style={modalDeleteCommentStyles.button}
            onPress={() => setVisible(!visible)}>
            <Typography style={modalDeleteCommentStyles.buttonTitle}>
              Ок
            </Typography>
          </Button>
        </View>
      </View>
    </Modal>
  );
};

export default ModalDeleteComment;
