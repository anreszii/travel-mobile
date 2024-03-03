import { View, Text } from 'react-native';
import React from 'react';
import modalDeletePhotoStyles from './ModalDeletePhotoStyle';
import Modal from '../../../ui/Modal/Modal';
import Typography from '../../../ui/Typography/Typography';
import Button from '../../../ui/Button/Button';

interface IModalDeletePhoto {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalDeletePhoto: React.FC<IModalDeletePhoto> = ({
  visible,
  setVisible,
}) => {
  return (
    <Modal visible={visible} setVisible={setVisible}>
      <View style={modalDeletePhotoStyles.container}>
        <Typography style={modalDeletePhotoStyles.title}>
          Вы действительно хотите удалить фото?
        </Typography>
        <View style={modalDeletePhotoStyles.buttonContent}>
          <Button
            variant="subcategories"
            style={modalDeletePhotoStyles.button}
            onPress={() => setVisible(!visible)}>
            <Typography style={modalDeletePhotoStyles.buttonTitleDisable}>
              Отмена
            </Typography>
          </Button>
          <View style={modalDeletePhotoStyles.vL}></View>
          <Button
            variant="subcategories"
            style={modalDeletePhotoStyles.button}
            onPress={() => setVisible(!visible)}>
            <Typography style={modalDeletePhotoStyles.buttonTitle}>
              Ок
            </Typography>
          </Button>
        </View>
      </View>
    </Modal>
  );
};

export default ModalDeletePhoto;
