import {
  View,
  Text,
  Modal as NativeModal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  SafeAreaView,
  ModalProps as NativeModalProps,
} from 'react-native';
import React from 'react';
import modalStyles from './ModalStyle';

interface IModal extends NativeModalProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}

const Modal: React.FC<IModal> = ({
  visible,
  setVisible,
  children,
  ...props
}) => {
  return (
    <>
      <NativeModal
        visible={visible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setVisible && setVisible(!visible)}
        supportedOrientations={[
          'portrait',
          'portrait-upside-down',
          'landscape',
          'landscape-left',
          'landscape-right',
        ]}
        {...props}>
        <TouchableWithoutFeedback onPress={() => setVisible(!visible)}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {children}
          </View>
        </TouchableWithoutFeedback>
      </NativeModal>
      {visible && <View style={modalStyles.overlay} />}
    </>
  );
};

export default Modal;
