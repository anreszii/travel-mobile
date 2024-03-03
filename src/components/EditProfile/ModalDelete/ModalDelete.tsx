import { View, Text } from 'react-native';
import React from 'react';
import Modal from '../../ui/Modal/Modal';
import modalDeleteStyles from './ModalDeleteStyle';
import Typography from '../../ui/Typography/Typography';
import Button from '../../ui/Button/Button';

interface IModalDelete {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalDelete: React.FC<IModalDelete> = ({ visible, setVisible }) => {
  return (
    <Modal visible={visible} setVisible={setVisible}>
      <View style={modalDeleteStyles.container}>
        <Typography style={modalDeleteStyles.title}>
          Вы действительно хотите удалить аккаунт? Все организации, фото, отзывы
          будут удалены. Отменить это действие будет невозможно
        </Typography>
        <View style={modalDeleteStyles.buttonContent}>
          <Button
            variant="subcategories"
            disabled
            style={modalDeleteStyles.button}>
            <Typography style={modalDeleteStyles.buttonTitleDisable}>
              ОК (10)
            </Typography>
          </Button>
          <View style={modalDeleteStyles.vL}></View>
          <Button variant="subcategories" style={modalDeleteStyles.button}>
            <Typography style={modalDeleteStyles.buttonTitle}>
              Отмена
            </Typography>
          </Button>
        </View>
      </View>
    </Modal>
  );
};

export default ModalDelete;
