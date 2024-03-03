import { View, Text } from 'react-native';
import React from 'react';
import modalDeleteStyles from './ModalDeleteStyle';
import Modal from '../../../ui/Modal/Modal';
import Typography from '../../../ui/Typography/Typography';
import Button from '../../../ui/Button/Button';

interface IModalDelete {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalDelete: React.FC<IModalDelete> = ({ visible, setVisible }) => {
  return (
    <Modal visible={visible} setVisible={setVisible}>
      <View style={modalDeleteStyles.container}>
        <Typography style={modalDeleteStyles.title}>
          Вы действительно хотите удалить фото?
        </Typography>
        <View style={modalDeleteStyles.buttonContent}>
          <Button
            variant="subcategories"
            disabled
            style={modalDeleteStyles.button}>
            <Typography style={modalDeleteStyles.buttonTitle}>
              Отмена
            </Typography>
          </Button>
          <View style={modalDeleteStyles.vL}></View>
          <Button variant="subcategories" style={modalDeleteStyles.button}>
            <Typography style={modalDeleteStyles.buttonTitle}>Ок</Typography>
          </Button>
        </View>
      </View>
    </Modal>
  );
};

export default ModalDelete;
