import { View, Text } from 'react-native';
import React from 'react';
import modalDeleteOrgStyles from './ModalDeleteStyle';
import Modal from '../../../ui/Modal/Modal';
import Typography from '../../../ui/Typography/Typography';
import Button from '../../../ui/Button/Button';

interface IModalDeleteOrg {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalDeleteOrg: React.FC<IModalDeleteOrg> = ({ visible, setVisible }) => {
  return (
    <Modal visible={visible} setVisible={setVisible}>
      <View style={modalDeleteOrgStyles.container}>
        <Typography style={modalDeleteOrgStyles.title}>
          Вы действительно хотите удалить организацию? Отменить это действие
          будет невозможно
        </Typography>
        <View style={modalDeleteOrgStyles.buttonContent}>
          <Button
            variant="subcategories"
            disabled
            style={modalDeleteOrgStyles.button}>
            <Typography style={modalDeleteOrgStyles.buttonTitleDisable}>
              ОК (10)
            </Typography>
          </Button>
          <View style={modalDeleteOrgStyles.vL}></View>
          <Button
            variant="subcategories"
            style={modalDeleteOrgStyles.button}
            onPress={() => setVisible(!visible)}>
            <Typography style={modalDeleteOrgStyles.buttonTitle}>
              Отмена
            </Typography>
          </Button>
        </View>
      </View>
    </Modal>
  );
};

export default ModalDeleteOrg;
