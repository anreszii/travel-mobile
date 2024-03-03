import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import Button from '../../../ui/Button/Button';
import bottomPhotoStyles from './BottomPhotoStyle';
import { CrossIcon, SelectAllIcon } from '../../../../icons';
import Typography from '../../../ui/Typography/Typography';
import { useNavigation } from '@react-navigation/native';

interface IBottomPhoto {
  editMain: boolean;
  editMy: boolean;
  editOther: boolean;
  selectAll: () => void;
  deSelectAll: () => void;
  isSelectAll: boolean;
  openDelete: () => void;
}

const BottomPhoto: React.FC<IBottomPhoto> = ({
  editMain,
  editMy,
  editOther,
  selectAll,
  deSelectAll,
  isSelectAll,
  openDelete,
}) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={bottomPhotoStyles.content}>
      {editMain || editMy || editOther ? (
        <View style={bottomPhotoStyles.editButtonContainer}>
          <Button
            variant="subcategories"
            style={bottomPhotoStyles.editButton}
            onPress={!isSelectAll ? selectAll : deSelectAll}>
            <View style={bottomPhotoStyles.editButtonContent}>
              <SelectAllIcon />
              <Typography style={bottomPhotoStyles.editButtonTitle}>
                {!isSelectAll ? 'Выделить все' : 'Снять все'}
              </Typography>
            </View>
          </Button>
          <Button
            variant="subcategories"
            style={bottomPhotoStyles.editButton}
            onPress={openDelete}>
            <View style={bottomPhotoStyles.editButtonContent}>
              <CrossIcon />
              <Typography style={bottomPhotoStyles.editButtonTitle}>
                Удалить
              </Typography>
            </View>
          </Button>
        </View>
      ) : (
        <Button
          variant="contain"
          style={bottomPhotoStyles.button}
          onPress={() => navigation.goBack()}>
          Сохранить
        </Button>
      )}
    </SafeAreaView>
  );
};

export default BottomPhoto;
