import { View, Text, SafeAreaView } from 'react-native';
import React, { useMemo } from 'react';
import Modal from '../../ui/Modal/Modal';
import modalTimeStyles from './ModalTimeStyle';
import Typography from '../../ui/Typography/Typography';
import BottomSheet from '@gorhom/bottom-sheet';

interface IModalTime {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalTime: React.FC<IModalTime> = ({ visible, setVisible }) => {
  const snapPoints = useMemo(() => ['50%'], []);

  return (
    <Modal visible={visible} setVisible={setVisible}>
      <BottomSheet
        snapPoints={snapPoints}
        animationConfigs={{ duration: 350 }}
        index={0}
        onClose={() => setVisible(!visible)}
        style={modalTimeStyles.container}>
        <View style={modalTimeStyles.content}>
          <View style={modalTimeStyles.dayContent}>
            <Typography style={modalTimeStyles.day}>Понедельник</Typography>
            <Typography style={modalTimeStyles.time}>Круглосуточно</Typography>
          </View>
          <View style={modalTimeStyles.dayContent}>
            <Typography style={modalTimeStyles.day}>Вторник</Typography>
            <Typography style={modalTimeStyles.time}>8:00-17:00</Typography>
          </View>
          <View style={modalTimeStyles.dayContent}>
            <Typography style={modalTimeStyles.day}>Среда</Typography>
            <Typography style={modalTimeStyles.time}>8:00-17:00</Typography>
          </View>
          <View style={modalTimeStyles.dayContent}>
            <Typography style={modalTimeStyles.day}>Четверг</Typography>
            <Typography style={modalTimeStyles.time}>8:00-17:00</Typography>
          </View>
          <View style={modalTimeStyles.dayContent}>
            <Typography style={modalTimeStyles.day}>Пятница</Typography>
            <Typography style={modalTimeStyles.time}>8:00-17:00</Typography>
          </View>
          <View style={modalTimeStyles.dayContent}>
            <Typography style={modalTimeStyles.day}>Суббота</Typography>
            <Typography style={modalTimeStyles.timeClose}>Закрыто</Typography>
          </View>
          <View style={modalTimeStyles.dayContent}>
            <Typography style={modalTimeStyles.day}>Воскресенье</Typography>
            <Typography style={modalTimeStyles.timeClose}>Закрыто</Typography>
          </View>
        </View>
      </BottomSheet>
    </Modal>
  );
};

export default ModalTime;
