import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import React, { useState } from 'react';
import Container from '../../layouts/Container/Container';
import Header from '../../layouts/Header/Header';
import BottomPhoto from '../../components/Profile/MyOrgPage/BottomPhoto/BottomPhoto';
import changePhotoStyles from './ChangePhotoStyle';
import Typography from '../../components/ui/Typography/Typography';
import { AddIcon, CheckmarkIcon, CheckmarkTrueIcon } from '../../icons';
import ModalDeletePhoto from '../../components/Profile/MyOrgPage/ModalDeletePhoto/ModalDeletePhoto';

const ChangePhoto = () => {
  const [isEditPhotoMain, setIsEditPhotoMain] = useState(false);
  const [isEditPhotoMy, setIsEditPhotoMy] = useState(false);
  const [isEditPhotoOther, setIsEditPhotoOther] = useState(false);
  const [isSelectAll, setIsSelectAll] = useState(false);
  const [images, setImages] = useState([
    { uri: require('../../../assets/photo1.png'), focus: false },
    { uri: require('../../../assets/photo2.png'), focus: true },
    { uri: require('../../../assets/photo3.png'), focus: false },
    { uri: require('../../../assets/photo4.png'), focus: false },
    { uri: require('../../../assets/photo5.png'), focus: false },
    { uri: require('../../../assets/photo6.png'), focus: false },
  ]);
  const [visibleDelete, setVisibleDelete] = useState(false);

  const allTrue = () => {
    for (let i = 0; i < images.length; i++) {
      if (images[i].focus !== true) {
        return false;
      }
    }
    return true;
  };

  const handleSelectImage = (uri: (id: string) => any) => {
    images[images.findIndex(el => el.uri === uri)].focus =
      !images[images.findIndex(el => el.uri === uri)].focus;
    setImages([...images]);
    if (allTrue()) {
      setIsSelectAll(true);
    } else {
      setIsSelectAll(false);
    }
  };

  const selectAll = () => {
    const selectAllItems = images.map(item => {
      return {
        uri: item.uri,
        focus: true,
      };
    });
    setImages(selectAllItems);
    setIsSelectAll(true);
  };

  const deSelectAll = () => {
    const selectAllItems = images.map(item => {
      return {
        uri: item.uri,
        focus: false,
      };
    });
    setImages(selectAllItems);
    setIsSelectAll(false);
  };

  const handleOpenDelete = () => {
    setVisibleDelete(!visibleDelete);
  };

  return (
    <>
      <>
        <Container mb={0}>
          <Header title="Изменить фото" />
          <ScrollView
            style={changePhotoStyles.content}
            showsVerticalScrollIndicator={false}>
            <View>
              <View style={changePhotoStyles.header}>
                <Typography style={changePhotoStyles.headerTitle}>
                  Фото на главной карусели
                </Typography>
                <TouchableOpacity
                  disabled={isEditPhotoMy || isEditPhotoOther ? true : false}
                  onPress={() => setIsEditPhotoMain(!isEditPhotoMain)}>
                  <AddIcon />
                </TouchableOpacity>
              </View>
              <Typography style={changePhotoStyles.subtitle}>
                Добавьте от 5 до 15 фотографий, которые будут отображаться на
                главной странице и карточке вашей организации
              </Typography>
              <View style={changePhotoStyles.photoContent}>
                {isEditPhotoMain ? (
                  <>
                    {images.map((item, index) => (
                      <View key={index}>
                        <TouchableOpacity
                          style={changePhotoStyles.icon}
                          onPress={() => handleSelectImage(item.uri)}>
                          {item.focus ? (
                            <CheckmarkTrueIcon />
                          ) : (
                            <CheckmarkIcon />
                          )}
                        </TouchableOpacity>
                        <Image
                          source={item.uri}
                          style={
                            index % 2 === 0 || index === 0
                              ? changePhotoStyles.photoFirst
                              : changePhotoStyles.photo
                          }
                        />
                      </View>
                    ))}
                  </>
                ) : (
                  <>
                    <Image
                      source={require('../../../assets/photo1.png')}
                      style={changePhotoStyles.photoFirst}
                    />
                    <Image
                      source={require('../../../assets/photo2.png')}
                      style={changePhotoStyles.photo}
                    />
                    <Image
                      source={require('../../../assets/photo3.png')}
                      style={changePhotoStyles.photoFirst}
                    />
                    <Image
                      source={require('../../../assets/photo4.png')}
                      style={changePhotoStyles.photo}
                    />
                    <Image
                      source={require('../../../assets/photo5.png')}
                      style={changePhotoStyles.photoFirst}
                    />
                    <Image
                      source={require('../../../assets/photo6.png')}
                      style={changePhotoStyles.photo}
                    />
                  </>
                )}
              </View>
            </View>
            <View>
              <View style={changePhotoStyles.headerWithDesc}>
                <Typography style={changePhotoStyles.headerTitle}>
                  Ваши фото
                </Typography>
                <TouchableOpacity
                  disabled={isEditPhotoMain || isEditPhotoOther ? true : false}
                  onPress={() => setIsEditPhotoMy(!isEditPhotoMy)}>
                  <AddIcon />
                </TouchableOpacity>
              </View>
              <View style={changePhotoStyles.photoContent}>
                {isEditPhotoMy ? (
                  <>
                    {images.map((item, index) => (
                      <View key={index}>
                        <TouchableOpacity
                          style={changePhotoStyles.icon}
                          onPress={() => handleSelectImage(item.uri)}>
                          {item.focus ? (
                            <CheckmarkTrueIcon />
                          ) : (
                            <CheckmarkIcon />
                          )}
                        </TouchableOpacity>
                        <Image
                          source={item.uri}
                          style={
                            index % 2 === 0 || index === 0
                              ? changePhotoStyles.photoFirst
                              : changePhotoStyles.photo
                          }
                        />
                      </View>
                    ))}
                  </>
                ) : (
                  <>
                    <Image
                      source={require('../../../assets/photo1.png')}
                      style={changePhotoStyles.photoFirst}
                    />
                    <Image
                      source={require('../../../assets/photo2.png')}
                      style={changePhotoStyles.photo}
                    />
                    <Image
                      source={require('../../../assets/photo3.png')}
                      style={changePhotoStyles.photoFirst}
                    />
                    <Image
                      source={require('../../../assets/photo4.png')}
                      style={changePhotoStyles.photo}
                    />
                    <Image
                      source={require('../../../assets/photo5.png')}
                      style={changePhotoStyles.photoFirst}
                    />
                    <Image
                      source={require('../../../assets/photo6.png')}
                      style={changePhotoStyles.photo}
                    />
                  </>
                )}
              </View>
            </View>
            <View>
              <View style={changePhotoStyles.headerWithDesc}>
                <Typography style={changePhotoStyles.headerTitle}>
                  Фото других пользователей
                </Typography>
                <TouchableOpacity
                  disabled={isEditPhotoMy || isEditPhotoMain ? true : false}
                  onPress={() => setIsEditPhotoOther(!isEditPhotoOther)}>
                  <AddIcon />
                </TouchableOpacity>
              </View>
              <View style={changePhotoStyles.photoContent}>
                {isEditPhotoOther ? (
                  <>
                    {images.map((item, index) => (
                      <View key={index}>
                        <TouchableOpacity
                          style={changePhotoStyles.icon}
                          onPress={() => handleSelectImage(item.uri)}>
                          {item.focus ? (
                            <CheckmarkTrueIcon />
                          ) : (
                            <CheckmarkIcon />
                          )}
                        </TouchableOpacity>
                        <Image
                          source={item.uri}
                          style={
                            index % 2 === 0 || index === 0
                              ? changePhotoStyles.photoFirst
                              : changePhotoStyles.photo
                          }
                        />
                      </View>
                    ))}
                  </>
                ) : (
                  <>
                    <Image
                      source={require('../../../assets/photo1.png')}
                      style={changePhotoStyles.photoFirst}
                    />
                    <Image
                      source={require('../../../assets/photo2.png')}
                      style={changePhotoStyles.photo}
                    />
                    <Image
                      source={require('../../../assets/photo3.png')}
                      style={changePhotoStyles.photoFirst}
                    />
                    <Image
                      source={require('../../../assets/photo4.png')}
                      style={changePhotoStyles.photo}
                    />
                    <Image
                      source={require('../../../assets/photo5.png')}
                      style={changePhotoStyles.photoFirst}
                    />
                    <Image
                      source={require('../../../assets/photo6.png')}
                      style={changePhotoStyles.photo}
                    />
                  </>
                )}
              </View>
            </View>
          </ScrollView>
        </Container>
        <BottomPhoto
          editMain={isEditPhotoMain}
          editMy={isEditPhotoMy}
          editOther={isEditPhotoOther}
          selectAll={selectAll}
          deSelectAll={deSelectAll}
          isSelectAll={isSelectAll}
          openDelete={handleOpenDelete}
        />
      </>
      <ModalDeletePhoto visible={visibleDelete} setVisible={setVisibleDelete} />
    </>
  );
};

export default ChangePhoto;
