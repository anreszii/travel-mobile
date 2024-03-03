import { View, Text } from 'react-native';
import React from 'react';
import Modal from '../../../ui/Modal/Modal';
import modalFilterStyles from './ModalFilterStyle';
import Button from '../../../ui/Button/Button';
import Typography from '../../../ui/Typography/Typography';

interface IModalFilter {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalFilter: React.FC<IModalFilter> = ({ visible, setVisible }) => {
  return (
    <Modal visible={visible} setVisible={setVisible} animationType="fade">
      <View style={modalFilterStyles.container}>
        <View
          style={{
            height: 4,
            backgroundColor: '#D5DDE7',
            borderRadius: 12,
            width: 28,
            marginBottom: 12,
          }}
        />
        <Button
          variant="subcategories"
          style={modalFilterStyles.button}
          disabled
          onPress={() => setVisible(!visible)}>
          <Typography style={modalFilterStyles.titleActive}>
            Сначала новые
          </Typography>
        </Button>
        <Button
          variant="subcategories"
          style={modalFilterStyles.button}
          onPress={() => setVisible(!visible)}>
          <Typography style={modalFilterStyles.title}>
            Сначала положительные
          </Typography>
        </Button>
        <Button
          variant="subcategories"
          style={modalFilterStyles.button}
          onPress={() => setVisible(!visible)}>
          <Typography style={modalFilterStyles.title}>
            Сначала отрицательные
          </Typography>
        </Button>
      </View>
    </Modal>
  );
};

export default ModalFilter;
