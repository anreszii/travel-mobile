import { View, Text } from 'react-native';
import React from 'react';
import Modal from '../../ui/Modal/Modal';
import modalMenuStyles from './ModalMenuStyle';
import Button from '../../ui/Button/Button';
import Typography from '../../ui/Typography/Typography';
import {
  AddImageIcon,
  CrossIcon,
  EditIcon,
  EditPhotoIcon,
  MyCompanyIcon,
  StatIcon,
} from '../../../icons';
import { useNavigation } from '@react-navigation/native';

interface IModalMenu {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  visibleDelete: boolean;
  setVisibleDelete: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalMenu: React.FC<IModalMenu> = ({
  visible,
  setVisible,
  visibleDelete,
  setVisibleDelete,
}) => {
  const navigation = useNavigation<any>();

  const handleChangeInfo = () => {
    setVisible(!visible);
    navigation.navigate('ChangeInfo');
  };

  const handleChangePhoto = () => {
    setVisible(!visible);
    navigation.navigate('ChangePhoto');
  };

  const handleChangeStat = () => {
    setVisible(!visible);
    navigation.navigate('StatOrg');
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
        <Button
          variant="subcategories"
          style={modalMenuStyles.buttonContent}
          onPress={() => handleChangePhoto()}>
          <EditPhotoIcon />
          <Typography style={modalMenuStyles.textButton}>
            Изменить фото
          </Typography>
        </Button>
        <Button
          variant="subcategories"
          style={modalMenuStyles.buttonContent}
          onPress={handleChangeStat}>
          <StatIcon />
          <Typography style={modalMenuStyles.textButton}>Статистика</Typography>
        </Button>
        <Button
          variant="subcategories"
          style={modalMenuStyles.buttonContent}
          onPress={() => {
            setVisible(!visible);
            setVisibleDelete(!visibleDelete);
          }}>
          <CrossIcon />
          <Typography style={modalMenuStyles.textButton}>
            Удалить организацию
          </Typography>
        </Button>
      </View>
    </Modal>
  );
};

export default ModalMenu;
