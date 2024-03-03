import { View, Text, TextInput } from 'react-native';
import React, { useState } from 'react';
import Container from '../../layouts/Container/Container';
import BottomBar from '../../layouts/BottomBar/BottomBar';
import editProfileStyles from './EditProfileStyle';
import Typography from '../../components/ui/Typography/Typography';
import {
  CrossIcon,
  EditPhotoIcon,
  EditProfileIcon,
  LockIcon,
  ProfileActiveIcon,
  ProfileIcon,
} from '../../icons';
import Button from '../../components/ui/Button/Button';
import ModalDelete from '../../components/EditProfile/ModalDelete/ModalDelete';
import { useNavigation } from '@react-navigation/native';

const EditProfile = () => {
  const [visible, setVisible] = useState(false);

  const navigation = useNavigation();

  return (
    <>
      <>
        <Container safe>
          <View style={editProfileStyles.content}>
            <View style={editProfileStyles.header}>
              <View style={editProfileStyles.editAvatar}>
                <EditProfileIcon />
              </View>
              <Typography style={editProfileStyles.headerTitle}>
                Ivan Dolgoborodov
              </Typography>
            </View>
            <View style={editProfileStyles.contentInput}>
              <View style={editProfileStyles.inputContainer}>
                <ProfileActiveIcon style={editProfileStyles.icon} />
                <TextInput
                  style={editProfileStyles.input}
                  value="Ivan Dolgoborodov"
                />
              </View>
              <View style={editProfileStyles.inputContainer}>
                <LockIcon style={editProfileStyles.icon} />
                <TextInput
                  style={editProfileStyles.input}
                  placeholder="Новый пароль"
                />
              </View>
              <View style={editProfileStyles.inputContainer}>
                <LockIcon style={editProfileStyles.icon} />
                <TextInput
                  style={editProfileStyles.input}
                  placeholder="Подтвердить пароль"
                />
              </View>
              <Button
                variant="subcategories"
                style={editProfileStyles.button}
                onPress={() => setVisible(!visible)}>
                <View style={editProfileStyles.buttonContainer}>
                  <CrossIcon />
                  <Typography style={editProfileStyles.buttonTitle}>
                    Удалить аккаунт
                  </Typography>
                </View>
              </Button>
            </View>
            <Button variant="contain" onPress={() => navigation.goBack()}>
              Сохранить
            </Button>
          </View>
        </Container>
        <BottomBar />
      </>
      <ModalDelete visible={visible} setVisible={setVisible} />
    </>
  );
};

export default EditProfile;
