import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import Container from '../../layouts/Container/Container';
import signInStyles from './SignInStyle';
import Typography from '../../components/ui/Typography/Typography';
import { EmailIcon, GoogleIcon, LockIcon } from '../../icons';
import Input from '../../components/ui/Input/Input';
import Button from '../../components/ui/Button/Button';
import { useNavigation } from '@react-navigation/native';

const SignIn = () => {
  const navigation = useNavigation<any>();

  return (
    <Container mb={0}>
      <View style={signInStyles.wrapper}>
        <View style={signInStyles.header}>
          <Typography style={signInStyles.headerTitle}>nomad</Typography>
        </View>
        <View style={signInStyles.content}>
          <View style={signInStyles.inputContent}>
            <View style={signInStyles.inputContainer}>
              <EmailIcon style={signInStyles.icon} />
              <TextInput style={signInStyles.input} placeholder="E mail" />
            </View>
            <View style={signInStyles.inputContainer}>
              <LockIcon style={signInStyles.icon} />
              <TextInput style={signInStyles.input} placeholder="Пароль" />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('ForgotPass')}>
              <Typography style={signInStyles.forgot}>
                Забыли пароль?
              </Typography>
            </TouchableOpacity>
          </View>
          <View style={signInStyles.buttonContent}>
            <Button variant="contain" style={signInStyles.button}>
              Войти
            </Button>
            <Button
              variant="outline"
              style={signInStyles.button}
              onPress={() => navigation.navigate('SignUp')}>
              Создать аккаунт
            </Button>
            <Button variant="subcategories" style={signInStyles.button}>
              <View style={signInStyles.buttonContainer}>
                <GoogleIcon />
                <Typography style={signInStyles.googleTitle}>
                  Продолжить с Google
                </Typography>
              </View>
            </Button>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default SignIn;
