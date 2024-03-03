import { View, Text, Image } from 'react-native';
import React, { useState } from 'react';
import Container from '../../layouts/Container/Container';
import Header from '../../layouts/Header/Header';
import Typography from '../../components/ui/Typography/Typography';
import Input from '../../components/ui/Input/Input';
import Button from '../../components/ui/Button/Button';
import { AddImageIcon } from '../../icons';
import incorrectInfoStyles from './IncorrectInfoStyle';
import { useNavigation } from '@react-navigation/native';

const IncorrectInfo = () => {
  const [stage, setStage] = useState(1);

  const navigation = useNavigation<any>();

  return (
    <>
      {stage === 1 && (
        <Container mb={0}>
          <Header title="Неверная информация" />
          <View style={incorrectInfoStyles.content}>
            <View>
              <View style={incorrectInfoStyles.taleWrong}>
                <Typography style={incorrectInfoStyles.label}>
                  Расскажите что не так
                </Typography>
                <Input styleInput={incorrectInfoStyles.taleWrongInput} />
              </View>
              <View style={incorrectInfoStyles.addImage}>
                <Typography style={incorrectInfoStyles.label}>
                  Добавьте фото
                </Typography>
                <Button
                  variant="icon"
                  Icon={AddImageIcon}
                  style={incorrectInfoStyles.button}
                />
              </View>
            </View>
            <Button variant="contain" onPress={() => setStage(2)}>
              Отправить
            </Button>
          </View>
        </Container>
      )}
      {stage === 2 && (
        <Container mb={0} safe={true}>
          <View style={incorrectInfoStyles.contentComplete}>
            <View>
              <Typography style={incorrectInfoStyles.title}>nomad</Typography>
              <Image
                source={require('../../../assets/thankReq.png')}
                style={incorrectInfoStyles.image}
              />
              <Typography style={incorrectInfoStyles.subtitle}>
                Спасибо! Мы рассмотрим Вашу жалобу в ближайшее время.
              </Typography>
            </View>
            <Button variant="contain" onPress={() => navigation.goBack()}>
              Вернуться
            </Button>
          </View>
        </Container>
      )}
    </>
  );
};

export default IncorrectInfo;
