import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
  Keyboard,
  TextInput,
  Dimensions,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import Container from '../../layouts/Container/Container';
import HeaderTabs from '../../layouts/HeaderTabs/HeaderTabs';
import statOrgStyles from './StatOrgStyle';
import Typography from '../../components/ui/Typography/Typography';
import StatCard from '../../components/Profile/MyOrgPage/StatCard/StatCard';
import {
  ArrowDown,
  ArrowUp,
  AvatarIcon,
  CrossIcon,
  EditCrossIcon,
  EditIcon,
  MenuIcon,
  RatingFourIcon,
  ReportFlagIcon,
  SendButtonIcon,
} from '../../icons';
import Dropdown from '../../components/ui/Dropdown/Dropdown';
import ModalReport from '../../components/Profile/MyOrgPage/ModalReport/ModalReport';
import Button from '../../components/ui/Button/Button';
import ModalDeleteComment from '../../components/organization/OrgPage/ModalDeleteComment/ModalDeleteComment';
import Input from '../../components/ui/Input/Input';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const StatOrg = () => {
  const [tabs, setTabs] = useState([
    { title: 'Просмотры', focus: true },
    { title: 'Отзывы', focus: false },
  ]);
  const [subTabs, setSubTabs] = useState([
    { title: 'Ежемесячно', focus: true },
    { title: 'Ежеквартально', focus: false },
    { title: 'Ежегодно', focus: false },
  ]);
  const [visibleComment, setVisibleComment] = useState(false);
  const [visibleReport, setVisibleReport] = useState(false);
  const [stage, setStage] = useState(1);
  const [visibleRewiew, setVisibleRewiew] = useState(false);
  const [visibleDelete, setVisibleDelete] = useState(false);
  const [isEditAnswer, setIsEditAnswer] = useState(false);

  const inputRef = useRef<TextInput | null>(null);

  const handleChangeFocus = (title: string) => {
    subTabs[subTabs.findIndex(el => el.focus === true)].focus = false;
    subTabs[subTabs.findIndex(el => el.title === title)].focus = true;
    setSubTabs([...subTabs]);
  };

  const handleEditAnswer = () => {
    inputRef.current?.focus();
  };

  const [keyboardHeight, setKeyboardHeight] = useState(-100);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      event => {
        const { height } = event.endCoordinates;
        setKeyboardHeight(height);
        setIsEditAnswer(!isEditAnswer);
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
    <>
      {stage === 1 && (
        <Container mb={0}>
          <HeaderTabs
            title="Статистика"
            tabs={tabs}
            setTabs={setTabs}
            search={false}
          />
          <KeyboardAwareScrollView
            enableOnAndroid={true}
            enableAutomaticScroll={false}
            style={{
              position: 'absolute',
              bottom: keyboardHeight,
              zIndex: 1000,
            }}>
            <View
              style={{
                backgroundColor: '#fff',
                width: Dimensions.get('screen').width,
                flexDirection: 'row',
                alignItems: 'center',
                borderWidth: 1,
                borderColor: '#D5DDE7',
              }}>
              <AvatarIcon style={{ marginLeft: 12 }} />
              <TextInput
                ref={inputRef}
                onBlur={() => setIsEditAnswer(!isEditAnswer)}
                style={{
                  width: Dimensions.get('screen').width - 108,
                  padding: 12,
                  fontSize: 13,
                  fontWeight: '400',
                  lineHeight: 17.76,
                }}
                placeholder="Введите ответ"
              />
              <TouchableOpacity>
                <SendButtonIcon />
              </TouchableOpacity>
            </View>
          </KeyboardAwareScrollView>
          <ScrollView style={statOrgStyles.content}>
            {tabs[0].focus && (
              <>
                <View style={statOrgStyles.tabs}>
                  {subTabs.map((item, index) => (
                    <TouchableOpacity
                      activeOpacity={1}
                      onPress={() => handleChangeFocus(item.title)}
                      style={
                        item.focus
                          ? statOrgStyles.tabsContentActive
                          : statOrgStyles.tabsContent
                      }>
                      <Typography style={statOrgStyles.tabsTitle}>
                        {item.title}
                      </Typography>
                    </TouchableOpacity>
                  ))}
                </View>
                {subTabs[0].focus && (
                  <>
                    <View style={statOrgStyles.statItem}>
                      <Typography style={statOrgStyles.label}>
                        Январь 2024
                      </Typography>
                      <StatCard />
                    </View>
                    <View style={statOrgStyles.statItem}>
                      <Typography style={statOrgStyles.label}>
                        Декабрь 2023
                      </Typography>
                      <StatCard />
                    </View>
                    <View style={statOrgStyles.statItem}>
                      <Typography style={statOrgStyles.label}>
                        Ноябрь 2023
                      </Typography>
                      <StatCard />
                    </View>
                  </>
                )}
                {subTabs[1].focus && (
                  <>
                    <View style={statOrgStyles.statItem}>
                      <Typography style={statOrgStyles.label}>
                        Январь - Март 2024
                      </Typography>
                      <StatCard />
                    </View>
                    <View style={statOrgStyles.statItem}>
                      <Typography style={statOrgStyles.label}>
                        Октябрь-Декабрь 2023
                      </Typography>
                      <StatCard />
                    </View>
                    <View style={statOrgStyles.statItem}>
                      <Typography style={statOrgStyles.label}>
                        Июль-Сентябрь 2023
                      </Typography>
                      <StatCard />
                    </View>
                  </>
                )}
                {subTabs[2].focus && (
                  <View style={statOrgStyles.statItem}>
                    <Typography style={statOrgStyles.label}>2024</Typography>
                    <StatCard />
                  </View>
                )}
              </>
            )}
            {tabs[1].focus && (
              <>
                <Typography style={statOrgStyles.titleRewiew}>Новые</Typography>
                <View style={statOrgStyles.myRewiewContainer}>
                  <View style={statOrgStyles.myRewiewItem}>
                    <View style={statOrgStyles.rewiewItemHeader}>
                      <View style={statOrgStyles.row}>
                        <AvatarIcon />
                        <Typography style={statOrgStyles.rewiewItemHeaderTitle}>
                          Placeholderplaceholder
                        </Typography>
                      </View>
                      <TouchableOpacity
                        onPress={() => setVisibleComment(!visibleComment)}>
                        <MenuIcon />
                      </TouchableOpacity>
                    </View>
                    <View style={statOrgStyles.rewiewItemRating}>
                      <RatingFourIcon />
                      <Typography style={statOrgStyles.rewiewItemRatingTitle}>
                        01/02/3001
                      </Typography>
                    </View>
                    <Typography style={statOrgStyles.rewiewDesc}>
                      Приятная атмосфера и хорошее расположение недалеко от
                      старого града и прочая хрень для описания бла бла текст
                      рыба По промокоду “Полако” получите скидку 146%
                    </Typography>
                    <Button
                      variant="subcategories"
                      style={statOrgStyles.buttonRewiew}
                      onPress={() => setVisibleRewiew(!visibleRewiew)}>
                      <Typography style={statOrgStyles.buttonRewiewTitle}>
                        {!visibleRewiew ? 'Показать ответ' : 'Скрыть ответ'}
                      </Typography>
                      {!visibleRewiew ? <ArrowDown /> : <ArrowUp />}
                    </Button>
                    {visibleRewiew && (
                      <View style={statOrgStyles.rewiewContainer}>
                        <View style={statOrgStyles.myRewiewItem}>
                          <View style={statOrgStyles.rewiewItemHeader}>
                            <View style={statOrgStyles.row}>
                              <AvatarIcon />
                              <Typography
                                style={statOrgStyles.rewiewItemHeaderTitle}>
                                Coffee Novi
                              </Typography>
                            </View>
                            <TouchableOpacity
                              onPress={() =>
                                setVisibleComment(!visibleComment)
                              }>
                              <MenuIcon />
                            </TouchableOpacity>
                          </View>
                          <Typography style={statOrgStyles.rewiewDesc}>
                            Спасибо за ваш отзыв! Ждем вас снова в нашем
                            заведении!
                          </Typography>
                          {visibleComment && (
                            <Dropdown
                              style={{ left: 4 }}
                              options={[
                                {
                                  title: 'Редактировать',
                                  icon: EditIcon,
                                  onPress: () => handleEditAnswer(),
                                },
                                {
                                  title: 'Удалить',
                                  icon: CrossIcon,
                                  onPress: () => {
                                    setVisibleComment(false);
                                    setVisibleDelete(true);
                                  },
                                },
                              ]}
                            />
                          )}
                        </View>
                      </View>
                    )}
                    {visibleComment && (
                      <Dropdown
                        style={{ left: 16 }}
                        options={[
                          {
                            title: 'Пожаловаться',
                            icon: ReportFlagIcon,
                            onPress: () => {
                              setVisibleComment(false);
                              setVisibleReport(true);
                            },
                          },
                        ]}
                      />
                    )}
                  </View>
                </View>
                <View style={statOrgStyles.myRewiewContainer}>
                  <View style={statOrgStyles.myRewiewItem}>
                    <View style={statOrgStyles.rewiewItemHeader}>
                      <View style={statOrgStyles.row}>
                        <AvatarIcon />
                        <Typography style={statOrgStyles.rewiewItemHeaderTitle}>
                          Placeholderplaceholder
                        </Typography>
                      </View>
                      <TouchableOpacity
                        onPress={() => setVisibleComment(!visibleComment)}>
                        <MenuIcon />
                      </TouchableOpacity>
                    </View>
                    <View style={statOrgStyles.rewiewItemRating}>
                      <RatingFourIcon />
                      <Typography style={statOrgStyles.rewiewItemRatingTitle}>
                        01/02/3001
                      </Typography>
                    </View>
                    <Typography style={statOrgStyles.rewiewDesc}>
                      Приятная атмосфера и хорошее расположение недалеко от
                      старого града и прочая хрень для описания бла бла текст
                      рыба По промокоду “Полако” получите скидку 146%
                    </Typography>
                    <View>
                      <Button
                        variant="subcategories"
                        style={statOrgStyles.buttonRewiew}>
                        <Typography style={statOrgStyles.buttonRewiewTitle}>
                          Ответить
                        </Typography>
                      </Button>
                    </View>
                    {visibleComment && (
                      <Dropdown
                        style={{ left: 16 }}
                        options={[
                          {
                            title: 'Пожаловаться',
                            icon: ReportFlagIcon,
                            onPress: () => {
                              setVisibleComment(false);
                              setVisibleReport(true);
                            },
                          },
                        ]}
                      />
                    )}
                  </View>
                </View>
              </>
            )}
          </ScrollView>
        </Container>
      )}
      {stage === 2 && (
        <SafeAreaView style={statOrgStyles.contentComplete}>
          <View>
            <Typography style={statOrgStyles.title}>nomad</Typography>
            <Image
              source={require('../../../assets/thankReq.png')}
              style={statOrgStyles.image}
            />
            <Typography style={statOrgStyles.subtitle}>
              Спасибо! Мы рассмотрим Вашу жалобу в ближайшее время.
            </Typography>
          </View>
          <Button variant="contain" onPress={() => setStage(1)}>
            Вернуться
          </Button>
        </SafeAreaView>
      )}
      <ModalReport
        visible={visibleReport}
        setVisible={setVisibleReport}
        setStage={setStage}
      />
      <ModalDeleteComment
        visible={visibleDelete}
        setVisible={setVisibleDelete}
      />
    </>
  );
};

export default StatOrg;
