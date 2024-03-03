import {
  View,
  Text,
  Image,
  Animated,
  Easing,
  Dimensions,
  ScrollView,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import Container from '../../layouts/Container/Container';
import Typography from '../../components/ui/Typography/Typography';
import Button from '../../components/ui/Button/Button';
import infoStyles from './InfoStyle';
import ChoiceCountry from '../../components/ChoiceCountry/ChoiceCountry';
import ChoiceCity from '../../components/ChoiceCity/ChoiceCity';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HeaderSearch from '../../layouts/HeaderSearch/HeaderSearch';
import { FlagIcon } from '../../icons';
import Accordion from '../../components/ui/Accordion/Accordion';
import { infoCategories } from '../../_mock/infoCategories';
import BottomBar from '../../layouts/BottomBar/BottomBar';

const Info: React.FC = () => {
  const [stage, setStage] = useState(1);
  const [country, setCountry] = useState<string | null>('');
  const [city, setCity] = useState<string | null>('');

  const slideContent = useRef(new Animated.Value(0)).current;
  const slideBottom = useRef(new Animated.Value(0)).current;
  const opacityHeader = useRef(new Animated.Value(0)).current;

  const screenH = Dimensions.get('screen').height;

  const contentStyle = {
    transform: [
      {
        translateY: slideContent.interpolate({
          inputRange: [0, 1],
          outputRange: [screenH, 0],
        }),
      },
    ],
  };

  const bottomStyle = {
    transform: [
      {
        translateY: slideBottom.interpolate({
          inputRange: [0, 1],
          outputRange: [200, 0],
        }),
      },
    ],
  };

  const animation = () => {
    Animated.parallel([
      Animated.timing(slideContent, {
        toValue: 1,
        duration: 800,
        easing: Easing.out(Easing.exp),
        useNativeDriver: true,
      }),
      Animated.timing(slideBottom, {
        toValue: 1,
        duration: 800,
        easing: Easing.out(Easing.exp),
        useNativeDriver: true,
      }),
      Animated.timing(opacityHeader, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
    ]).start();
  };

  useEffect(() => {
    animation();
  }, []);

  useEffect(() => {
    const getData = async () => {
      setCountry(await AsyncStorage.getItem('countryInfo'));
      setCity(await AsyncStorage.getItem('cityInfo'));
    };

    getData();
  }, [stage]);

  return (
    <>
      <Container>
        {!!country && !!city && !(stage >= 3) ? (
          <View style={{ flex: 1 }}>
            <Animated.View style={{ opacity: opacityHeader }}>
              <HeaderSearch icon={<FlagIcon />} title={country} />
            </Animated.View>
            <Animated.View style={{ ...contentStyle, flex: 1 }}>
              <Accordion items={infoCategories} />
            </Animated.View>
          </View>
        ) : (
          <>
            {stage === 1 && (
              <Container safe={true}>
                <ScrollView contentContainerStyle={infoStyles.content}>
                  <View>
                    <Typography style={infoStyles.title}>nomad</Typography>
                    <Image
                      source={require('../../../assets/info.png')}
                      style={infoStyles.image}
                      resizeMode="contain"
                    />
                    <Typography style={infoStyles.subtitle}>
                      Находите лучших специалистов в Вашем городе и участвуйте в
                      бонусной программе
                    </Typography>
                  </View>
                  <Button variant="outline" onPress={() => setStage(2)}>
                    Выберите город
                  </Button>
                </ScrollView>
              </Container>
            )}
            {stage === 2 && (
              <ChoiceCountry
                setStage={setStage}
                setCountry={setCountry}
                page="Info"
              />
            )}
            {stage === 3 && (
              <ChoiceCity setStage={setStage} setCity={setCity} page="Info" />
            )}
          </>
        )}
      </Container>
      <Animated.View style={bottomStyle}>
        <BottomBar />
      </Animated.View>
    </>
  );
};

export default Info;
