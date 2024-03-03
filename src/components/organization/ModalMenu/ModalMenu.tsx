import { View, Text } from 'react-native';
import React from 'react';
import Modal from '../../ui/Modal/Modal';
import modalMenuStyles from './ModalMenuStyle';
import Button from '../../ui/Button/Button';
import Typography from '../../ui/Typography/Typography';
import { AddImageIcon, EditIcon, MyCompanyIcon } from '../../../icons';
import { useNavigation } from '@react-navigation/native';

interface IModalMenu {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalMenu: React.FC<IModalMenu> = ({ visible, setVisible }) => {
  const navigation = useNavigation<any>();

  const handleChangeInfo = () => {
    setVisible(!visible);
    navigation.navigate('ChangeInfo');
  };

  return (
    <Modal visible={visible} setVisible={setVisible}>
      <View style={modalMenuStyles.container}>
        <Button
          variant="subcategories"
          style={modalMenuStyles.buttonContent}
          onPress={() => handleChangeInfo()}>
          <EditIcon />
          <Typography style={modalMenuStyles.textButton}>
            Изменить информацию
          </Typography>
        </Button>
        <Button variant="subcategories" style={modalMenuStyles.buttonContent}>
          <AddImageIcon />
          <Typography style={modalMenuStyles.textButton}>
            Добавить фото
          </Typography>
        </Button>
        <Button variant="subcategories" style={modalMenuStyles.buttonContent}>
          <MyCompanyIcon />
          <Typography style={modalMenuStyles.textButton}>
            Это моя компания
          </Typography>
        </Button>
      </View>
    </Modal>
  );
};

export default ModalMenu;
