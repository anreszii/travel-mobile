import { View, Text } from 'react-native';
import React from 'react';
import Modal from '../../../ui/Modal/Modal';
import modalReportStyles from './ModalReportStyle';
import Button from '../../../ui/Button/Button';
import Typography from '../../../ui/Typography/Typography';

interface IModalReport {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setStage: React.Dispatch<React.SetStateAction<number>>;
}

const ModalReport: React.FC<IModalReport> = ({
  visible,
  setVisible,
  setStage,
}) => {
  return (
    <Modal visible={visible} setVisible={setVisible}>
      <View style={modalReportStyles.container}>
        <Button
          variant="subcategories"
          style={modalReportStyles.button}
          onPress={() => {
            setVisible(false);
            setStage(2);
          }}>
          <Typography style={modalReportStyles.title}>
            Оскорбительный контент
          </Typography>
        </Button>
        <Button
          variant="subcategories"
          style={modalReportStyles.button}
          onPress={() => {
            setVisible(false);
            setStage(2);
          }}>
          <Typography style={modalReportStyles.title}>
            Недостоверная информация
          </Typography>
        </Button>
      </View>
    </Modal>
  );
};

export default ModalReport;
