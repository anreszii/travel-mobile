import {
  View,
  Text,
  ScrollView,
  TextInput as BaseInput,
  Keyboard,
  TouchableOpacity,
  Animated,
  Easing,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import Container from '../../layouts/Container/Container';
import Header from '../../layouts/Header/Header';
import Typography from '../../components/ui/Typography/Typography';
import Input from '../../components/ui/Input/Input';
import changeInfoStyles from './ChangeInfoStyle';
import MapView from 'react-native-maps';
import Button from '../../components/ui/Button/Button';
import { addDays, format, startOfWeek } from 'date-fns';
import { ru } from 'date-fns/locale';
import {
  ArrowRight,
  CrossIcon,
  EditIcon,
  FacebookIcon,
  InstagramIcon,
  PhoneIcon,
  TelegramIcon,
  ViberIcon,
  WhatsappIcon,
} from '../../icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { TextInput } from 'react-native-paper';
import ChoiceCategory from '../../components/Profile/ChoiceCategory/ChoiceCategory';
import ChoiceCity from '../../components/ChoiceCity/ChoiceCity';
import ChoiceEditCity from '../../components/Profile/ChoiceEditCity/ChoiceEditCity';
import { useNavigation } from '@react-navigation/native';
import TagsChange from '../../components/Profile/TagsChange/TagsChange';

const ChangeInfo = () => {
  const [days, setDays] = useState(
    Array.from({ length: 7 }).map((_, index) => {
      const startOfCurrentWeek = startOfWeek(new Date(), { locale: ru });
      const currentDate = addDays(startOfCurrentWeek, index);
      const dayOfWeek = format(currentDate, 'EE', {
        locale: ru,
      }).substring(0, 2);
      return { dayOfWeek, focus: index === 0 };
    }),
  );

  const [stage, setStage] = useState(1);
  const [keyboardHeight, setKeyboardHeight] = useState(-100);

  const navigation = useNavigation();
  const opacityAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacityAnimation, {
      toValue: 1,
      duration: 1600,
      easing: Easing.out(Easing.exp),
      useNativeDriver: true,
    }).start();

    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      event => {
        const { height } = event.endCoordinates;
        setKeyboardHeight(height);
      },
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardHeight(-100);
      },
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <Animated.View style={{ flex: 1, opacity: opacityAnimation }}>
      <Container mb={0}>
        <Header title="Изменить информацию" />
        <KeyboardAwareScrollView
          enableOnAndroid={true}
          enableAutomaticScroll={false}
          style={{
            position: 'absolute',
            bottom: keyboardHeight + 10,
            right: 10,
            zIndex: 1000,
          }}>
          <Button
            variant="contain"
            style={{
              width: 88,
              height: 36,
            }}>
            ОК
          </Button>
        </KeyboardAwareScrollView>
        {stage === 1 && (
          <ScrollView
            style={changeInfoStyles.content}
            showsVerticalScrollIndicator={false}>
            <View style={changeInfoStyles.addressContent}>
              <Typography style={changeInfoStyles.label}>Название </Typography>
              <Input value="Coffee Novi" />
            </View>
            <View style={changeInfoStyles.addressContent}>
              <Typography style={changeInfoStyles.label}>Категория</Typography>
              <Input
                onPressIn={() => setStage(2)}
                right={
                  <TextInput.Icon
                    icon={() => <ArrowRight style={{ marginTop: 6 }} />}
                  />
                }
                value="Кофейни"
              />
            </View>
            <View style={changeInfoStyles.addressContent}>
              <Typography style={changeInfoStyles.label}>
                Специализация
              </Typography>
              <Typography style={changeInfoStyles.sublabel}>
                Опишите кратко род занятий. Например: Репетитор английского /
                Кофе с собой / Маникюр
              </Typography>
              <Input value="Кофе, выпечка" />
            </View>
            <View style={changeInfoStyles.addressContent}>
              <Typography style={changeInfoStyles.label}>Город</Typography>
              <Input
                onPressIn={() => setStage(3)}
                value="Херцег Нови"
                right={
                  <TextInput.Icon
                    icon={() => <ArrowRight style={{ marginTop: 6 }} />}
                  />
                }
              />
            </View>
            <View style={changeInfoStyles.addressContent}>
              <Typography style={changeInfoStyles.label}>Адрес</Typography>
              <Typography style={changeInfoStyles.sublabel}>
                Если Вы являетесь частным лицом и не хотите раскрывать
                информацию о Вашем местонахождении, то укажите ближайший
                ориентир, чтобы клиентам было проще Вас найти
              </Typography>
              <Input value="13 Njegoševa, Herceg - Novi 85340" />
            </View>
            <View style={changeInfoStyles.mapContent}>
              <Typography style={changeInfoStyles.label}>На карте</Typography>
              <MapView
                region={{
                  latitude: 37.78825,
                  longitude: -122.4324,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}
                style={changeInfoStyles.map}
              />
            </View>
            <View
              style={{ ...changeInfoStyles.daysContainer, marginBottom: 12 }}>
              <Typography style={changeInfoStyles.label}>
                Рабочее время
              </Typography>
              <View style={changeInfoStyles.daysContent}>
                {days.map((item, index) => (
                  <Button
                    variant={item.focus ? 'contain' : 'outline'}
                    key={index}
                    style={{
                      ...changeInfoStyles.buttonDay,
                      ...(index + 1 !== days.length ? { marginRight: 12 } : {}),
                    }}>
                    {item.dayOfWeek}
                  </Button>
                ))}
              </View>
              <View style={changeInfoStyles.editContent}>
                <View style={changeInfoStyles.inputsContent}>
                  <Input style={changeInfoStyles.input} value="88:99" />
                  <Input style={changeInfoStyles.input} value="88:99" />
                </View>
                <View style={changeInfoStyles.buttonsContent}>
                  <Button
                    variant="icon"
                    Icon={CrossIcon}
                    style={changeInfoStyles.button}
                  />
                  <Button
                    variant="icon"
                    Icon={EditIcon}
                    style={changeInfoStyles.button}
                  />
                </View>
              </View>
            </View>
            <Button
              variant="subcategories"
              style={{
                marginBottom: 12,
                width: '60%',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <CrossIcon />
                <Typography
                  style={{
                    marginLeft: 8,
                    color: '#555F74',
                    fontSize: 16,
                    fontWeight: '400',
                    lineHeight: 21.86,
                  }}>
                  Удалить дни
                </Typography>
              </View>
            </Button>
            <View style={changeInfoStyles.daysContainer}>
              <View style={changeInfoStyles.daysContent}>
                {days.map((item, index) => (
                  <Button
                    key={index}
                    variant={item.focus ? 'contain' : 'outline'}
                    style={{
                      ...changeInfoStyles.buttonDay,
                      ...(index + 1 !== days.length ? { marginRight: 12 } : {}),
                    }}>
                    {item.dayOfWeek}
                  </Button>
                ))}
              </View>
              <View style={changeInfoStyles.editContent}>
                <View style={changeInfoStyles.inputsContent}>
                  <Input style={changeInfoStyles.input} value="88:99" />
                  <Input style={changeInfoStyles.input} value="88:99" />
                </View>
                <View style={changeInfoStyles.buttonsContent}>
                  <Button
                    variant="icon"
                    Icon={CrossIcon}
                    style={changeInfoStyles.button}
                  />
                  <Button
                    variant="icon"
                    Icon={EditIcon}
                    style={changeInfoStyles.button}
                  />
                </View>
              </View>
            </View>
            <View style={changeInfoStyles.contactsContent}>
              <Typography style={changeInfoStyles.label}>Контакты</Typography>
              <View style={changeInfoStyles.inputContactContent}>
                <PhoneIcon />
                <BaseInput
                  autoCapitalize="none"
                  value="437 831 037"
                  style={{
                    borderBottomWidth: 1,
                    borderColor: '#E8EBF9',
                    padding: 12,
                    fontSize: 16,
                    fontWeight: '400',
                    lineHeight: 21.86,
                    flex: 1,
                    marginHorizontal: 12,
                  }}
                />
              </View>
              <View style={changeInfoStyles.inputContactContent}>
                <InstagramIcon />
                <BaseInput
                  value="Instagram.com/coff"
                  autoCapitalize="none"
                  style={{
                    borderBottomWidth: 1,
                    borderColor: '#E8EBF9',
                    padding: 12,
                    fontSize: 16,
                    fontWeight: '400',
                    lineHeight: 21.86,
                    flex: 1,
                    marginHorizontal: 12,
                  }}
                />
              </View>
              <View style={changeInfoStyles.inputContactContent}>
                <TelegramIcon />
                <BaseInput
                  value="Instagram.com/coff"
                  autoCapitalize="none"
                  style={{
                    borderBottomWidth: 1,
                    borderColor: '#E8EBF9',
                    padding: 12,
                    fontSize: 16,
                    fontWeight: '400',
                    lineHeight: 21.86,
                    flex: 1,
                    marginHorizontal: 12,
                  }}
                />
              </View>
              <View style={changeInfoStyles.inputContactContent}>
                <WhatsappIcon />
                <BaseInput
                  value="437 831 037"
                  autoCapitalize="none"
                  style={{
                    borderBottomWidth: 1,
                    borderColor: '#E8EBF9',
                    padding: 12,
                    fontSize: 16,
                    fontWeight: '400',
                    lineHeight: 21.86,
                    flex: 1,
                    marginHorizontal: 12,
                  }}
                />
              </View>
              <View style={changeInfoStyles.inputContactContent}>
                <ViberIcon />
                <BaseInput
                  autoCapitalize="none"
                  placeholder="Viber"
                  style={{
                    borderBottomWidth: 1,
                    borderColor: '#E8EBF9',
                    padding: 12,
                    fontSize: 16,
                    fontWeight: '400',
                    lineHeight: 21.86,
                    flex: 1,
                    marginHorizontal: 12,
                  }}
                />
              </View>
              <View style={changeInfoStyles.inputContactContent}>
                <FacebookIcon />
                <BaseInput
                  autoCapitalize="none"
                  placeholder="Facebook"
                  style={{
                    borderBottomWidth: 1,
                    borderColor: '#E8EBF9',
                    padding: 12,
                    fontSize: 16,
                    fontWeight: '400',
                    lineHeight: 21.86,
                    flex: 1,
                    marginHorizontal: 12,
                  }}
                />
              </View>
            </View>
            <View>
              <Typography style={changeInfoStyles.label}>Языки</Typography>
              <View style={changeInfoStyles.languageContent}>
                <Typography style={{ fontSize: 32, marginHorizontal: 8 }}>
                  🇵🇱
                </Typography>
                <Typography style={{ fontSize: 32, marginHorizontal: 8 }}>
                  🇫🇮
                </Typography>
                <Typography style={{ fontSize: 32, marginHorizontal: 8 }}>
                  🇫🇷
                </Typography>
                <Typography style={{ fontSize: 32, marginHorizontal: 8 }}>
                  🇸🇰
                </Typography>
              </View>
            </View>
            <TouchableOpacity onPress={() => setStage(4)}>
              <Typography style={changeInfoStyles.label}>Тэги</Typography>
              <View style={changeInfoStyles.tagsContent}>
                <View style={changeInfoStyles.tagsItem}>
                  <Typography style={changeInfoStyles.tagsTitle}>
                    кофейни
                  </Typography>
                </View>
                <View style={changeInfoStyles.tagsItem}>
                  <Typography style={changeInfoStyles.tagsTitle}>
                    Кофе с собой
                  </Typography>
                </View>
                <View style={changeInfoStyles.tagsItem}>
                  <Typography style={changeInfoStyles.tagsTitle}>
                    Кофе на вынос
                  </Typography>
                </View>
                <View style={changeInfoStyles.tagsItem}>
                  <Typography style={changeInfoStyles.tagsTitle}>
                    Десертный кофе
                  </Typography>
                </View>
                <View style={changeInfoStyles.tagsItem}>
                  <Typography style={changeInfoStyles.tagsTitle}>
                    Десертный кофе
                  </Typography>
                </View>
                <View style={changeInfoStyles.tagsItem}>
                  <Typography style={changeInfoStyles.tagsTitle}>
                    Доставка
                  </Typography>
                </View>
                <View style={changeInfoStyles.tagsItem}>
                  <Typography style={changeInfoStyles.tagsTitle}>
                    Только наличные
                  </Typography>
                </View>
              </View>
            </TouchableOpacity>
            <View style={changeInfoStyles.buttonSave}>
              <Button variant="contain" onPress={() => navigation.goBack()}>
                Сохранить
              </Button>
            </View>
          </ScrollView>
        )}
        {stage === 2 && <ChoiceCategory setStage={setStage} />}
        {stage === 3 && <ChoiceEditCity setStage={setStage} />}
        {stage === 4 && <TagsChange />}
      </Container>
    </Animated.View>
  );
};

export default ChangeInfo;
