import { View, Text, TextInput } from 'react-native';
import React, { useState } from 'react';
import Container from '../../layouts/Container/Container';
import Typography from '../../components/ui/Typography/Typography';
import Button from '../../components/ui/Button/Button';
import { EmailIcon, LockIcon } from '../../icons';
import forgotPassStyles from './ForgotPassStyle';
import CodeInput from '../../components/ui/CodeInput/CodeInput';
import { useNavigation } from '@react-navigation/native';

const ForgotPass = () => {
  const [stage, setStage] = useState(1);
  const [code, setCode] = useState('');

  const navigation = useNavigation();

  return (
    <Container mb={0}>
      {stage === 1 && (
        <View style={forgotPassStyles.wrapper}>
          <View style={forgotPassStyles.header}>
            <Typography style={forgotPassStyles.headerTitle}>nomad</Typography>
          </View>
          <View style={forgotPassStyles.content}>
            <View style={forgotPassStyles.inputContent}>
              <Typography style={forgotPassStyles.title}>
                Введите Email, указанный при регистрации вашего аккаунта
              </Typography>
              <View style={forgotPassStyles.inputContainer}>
                <EmailIcon style={forgotPassStyles.icon} />
                <TextInput
                  style={forgotPassStyles.input}
                  placeholder="E mail"
                />
              </View>
            </View>
            <View style={forgotPassStyles.buttonContent}>
              <Button
                variant="contain"
                style={forgotPassStyles.button}
                onPress={() => setStage(2)}>
                Отправить код
              </Button>
            </View>
          </View>
        </View>
      )}
      {stage === 2 && (
        <View style={forgotPassStyles.wrapper}>
          <View style={forgotPassStyles.headerSmall}>
            <Typography style={forgotPassStyles.headerTitle}>nomad</Typography>
          </View>
          <View style={forgotPassStyles.contentBig}>
            <View style={forgotPassStyles.inputContent}>
              <Typography style={forgotPassStyles.title}>
                Мы отправили проверочный код на ваш почтоый ящик:
              </Typography>
              <Typography style={forgotPassStyles.email}>
                ivandolgoborodov@gmail.com
              </Typography>
              <View style={forgotPassStyles.inputContainer}>
                <CodeInput code={code} setCode={setCode} />
              </View>
            </View>
            <View style={forgotPassStyles.buttonContent}>
              <Button
                variant="contain"
                style={forgotPassStyles.button}
                onPress={() => setStage(3)}>
                Отправить код
              </Button>
            </View>
          </View>
        </View>
      )}
      {stage === 3 && (
        <View style={forgotPassStyles.wrapper}>
          <View style={forgotPassStyles.header}>
            <Typography style={forgotPassStyles.headerTitle}>nomad</Typography>
          </View>
          <View style={forgotPassStyles.content}>
            <View style={forgotPassStyles.inputContent}>
              <Typography style={forgotPassStyles.title}>
                Введите новый пароль
              </Typography>
              <View style={forgotPassStyles.inputContainer}>
                <LockIcon style={forgotPassStyles.icon} />
                <TextInput
                  style={forgotPassStyles.input}
                  placeholder="Новый пароль"
                />
              </View>
              <View style={forgotPassStyles.inputContainer}>
                <LockIcon style={forgotPassStyles.icon} />
                <TextInput
                  style={forgotPassStyles.input}
                  placeholder="Повторите пароль"
                />
              </View>
            </View>
            <View style={forgotPassStyles.buttonContent}>
              <Button
                variant="contain"
                style={forgotPassStyles.button}
                onPress={() => navigation.goBack()}>
                Сохранить
              </Button>
            </View>
          </View>
        </View>
      )}
    </Container>
  );
};

export default ForgotPass;
