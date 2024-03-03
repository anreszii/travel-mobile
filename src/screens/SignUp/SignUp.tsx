import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import Container from '../../layouts/Container/Container';
import signUpStyles from './SignUpStyle';
import Typography from '../../components/ui/Typography/Typography';
import { EmailIcon, GoogleIcon, LockIcon } from '../../icons';
import Input from '../../components/ui/Input/Input';
import Button from '../../components/ui/Button/Button';
import { useNavigation } from '@react-navigation/native';
import CodeInput from '../../components/ui/CodeInput/CodeInput';

const SignUp = () => {
  const [stage, setStage] = useState(1);
  const [code, setCode] = useState('');

  const navigation = useNavigation<any>();

  return (
    <Container mb={0}>
      {stage === 1 && (
        <View style={signUpStyles.wrapper}>
          <View style={signUpStyles.header}>
            <Typography style={signUpStyles.headerTitle}>nomad</Typography>
          </View>
          <View style={signUpStyles.content}>
            <View style={signUpStyles.inputContent}>
              <View style={signUpStyles.inputContainer}>
                <LockIcon style={signUpStyles.icon} />
                <TextInput style={signUpStyles.input} placeholder="Ваше имя" />
              </View>
              <View style={signUpStyles.inputContainer}>
                <EmailIcon style={signUpStyles.icon} />
                <TextInput style={signUpStyles.input} placeholder="E mail" />
              </View>
              <View style={signUpStyles.inputContainer}>
                <LockIcon style={signUpStyles.icon} />
                <TextInput style={signUpStyles.input} placeholder="Пароль" />
              </View>
              <View style={signUpStyles.inputContainer}>
                <LockIcon style={signUpStyles.icon} />
                <TextInput
                  style={signUpStyles.input}
                  placeholder="Повторите пароль"
                />
              </View>
            </View>
            <View style={signUpStyles.buttonContent}>
              <Button
                variant="contain"
                style={signUpStyles.button}
                onPress={() => setStage(2)}>
                Создать аккаунт
              </Button>
              <Button
                variant="outline"
                style={signUpStyles.button}
                onPress={() => navigation.navigate('SignIn')}>
                Войти
              </Button>
              <Button variant="subcategories" style={signUpStyles.button}>
                <View style={signUpStyles.buttonContainer}>
                  <GoogleIcon />
                  <Typography style={signUpStyles.googleTitle}>
                    Продолжить с Google
                  </Typography>
                </View>
              </Button>
            </View>
          </View>
        </View>
      )}
      {stage === 2 && (
        <View style={signUpStyles.wrapper}>
          <View style={signUpStyles.header}>
            <Typography style={signUpStyles.headerTitle}>nomad</Typography>
          </View>
          <View style={signUpStyles.content}>
            <View>
              <Typography style={signUpStyles.send}>
                Мы отправили проверочный код на ваш почтоый ящик:
              </Typography>
              <Typography style={signUpStyles.email}>
                ivandolgoborodov@gmail.com
              </Typography>
            </View>
            <View style={signUpStyles.inputContent}>
              <CodeInput code={code} setCode={setCode} />
            </View>
            <View style={signUpStyles.buttonContent}>
              <Button
                variant="contain"
                style={signUpStyles.button}
                onPress={() => navigation.goBack()}>
                Подтвердить
              </Button>
            </View>
          </View>
        </View>
      )}
    </Container>
  );
};

export default SignUp;
