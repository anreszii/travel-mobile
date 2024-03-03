import { View, Text } from 'react-native';
import React from 'react';
import modalNotCompleteStyles from './ModalNotCompleteStyle';
import Modal from '../../ui/Modal/Modal';
import Typography from '../../ui/Typography/Typography';
import Button from '../../ui/Button/Button';

interface IModalNotComplete {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalNotComplete: React.FC<IModalNotComplete> = ({
  visible,
  setVisible,
}) => {
  return (
    <Modal visible={visible} setVisible={setVisible}>
      <View style={modalNotCompleteStyles.container}>
        <Typography style={modalNotCompleteStyles.title}>
          Для добавления организации заполните все пункты
        </Typography>
        <Button
          variant="subcategories"
          style={modalNotCompleteStyles.button}
          onPress={() => setVisible(!visible)}>
          <Typography style={modalNotCompleteStyles.buttonTitle}>
            Я понимаю
          </Typography>
        </Button>
      </View>
    </Modal>
  );
};

export default ModalNotComplete;
