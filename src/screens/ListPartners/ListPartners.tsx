import {
  View,
  Text,
  ScrollView,
  Image,
  Animated,
  Easing,
  NativeModules,
  Dimensions,
} from 'react-native';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Container from '../../layouts/Container/Container';
import HeaderTabs from '../../layouts/HeaderTabs/HeaderTabs';
import CardOrg from '../../components/organization/Card/CardOrg';
import listPartnersStyles from './ListPartnersStyle';
import { partners } from '../../_mock/partners';
import Typography from '../../components/ui/Typography/Typography';
import Header from '../../layouts/Header/Header';
import { partnersNone } from '../../_mock/partnersNone';
import Button from '../../components/ui/Button/Button';
import MapView from 'react-native-maps';
import changeInfoStyles from '../ChangeInfo/ChangeInfoStyle';
import MapsElements from '../../components/MapsElements/MapsElements';
import { useFocusEffect } from '@react-navigation/native';
import OrgPage from '../../components/organization/OrgPage/OrgPage';
import BottomBar from '../../layouts/BottomBar/BottomBar';
const { StatusBarManager } = NativeModules;

interface Tabs {
  title: string;
  focus: boolean;
}

interface IListPartners {
  route?: any;
  subCategory: string;
  setStage: React.Dispatch<React.SetStateAction<number>>;
}

const ListPartners: React.FC<IListPartners> = ({
  route,
  subCategory,
  setStage,
}) => {
  const [tabs, setTabs] = useState<Tabs[]>([
    { title: 'Списком', focus: true },
    { title: 'На карте', focus: false },
  ]);
  const [isOrganization, setIsOrganization] = useState(false);
  const [isAnimation, setIsAnimation] = useState(false);

  const slideAnimation = useRef(new Animated.Value(0)).current;
  const contentSlideAnimation = useRef(new Animated.Value(0)).current;
  const bottomBarAnimation = useRef(new Animated.Value(0)).current;
  const opacityAnimation = useRef(new Animated.Value(0)).current;
  const mapAnimation = useRef(new Animated.Value(0)).current;
  const mapElem = useRef(new Animated.Value(0)).current;

  const screenH = Dimensions.get('screen').height;

  useEffect(() => {
    if (isAnimation) {
      slideClose();
    } else {
      slideOpen();
    }
  }, [isAnimation]);

  const slideOpen = () => {
    Animated.parallel([
      Animated.timing(slideAnimation, {
        toValue: 1,
        duration: 600,
        easing: Easing.out(Easing.exp),
        useNativeDriver: true,
      }),
      Animated.timing(bottomBarAnimation, {
        toValue: 1,
        duration: 600,
        easing: Easing.out(Easing.exp),
        useNativeDriver: true,
      }),
      Animated.timing(contentSlideAnimation, {
        toValue: 1,
        duration: 700,
        easing: Easing.out(Easing.exp),
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnimation, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const slideClose = () => {
    Animated.parallel([
      Animated.timing(slideAnimation, {
        toValue: 0,
        duration: 1200,
        easing: Easing.out(Easing.exp),
        useNativeDriver: true,
      }),
      Animated.timing(bottomBarAnimation, {
        toValue: 0,
        duration: 1200,
        easing: Easing.out(Easing.exp),
        useNativeDriver: true,
      }),
      Animated.timing(contentSlideAnimation, {
        toValue: 0,
        duration: 2400,
        easing: Easing.out(Easing.exp),
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnimation, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const bottomBarSlideStyle = {
    transform: [
      {
        translateY: bottomBarAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: [200, 0],
        }),
      },
    ],
  };

  const contentSlideStyle = {
    transform: [
      {
        translateY: contentSlideAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: [200, 0],
        }),
      },
    ],
  };

  const handlePressCard = () => {
    setIsAnimation(!isAnimation);

    setTimeout(() => {
      setIsOrganization(!isOrganization);
    }, 200);
  };

  const animateMap = () => {
    Animated.timing(mapAnimation, {
      toValue: 1,
      duration: 1000,
      easing: Easing.out(Easing.exp),
      useNativeDriver: true,
    }).start();
  };

  const mapElemSlideStyle = {
    transform: [
      {
        translateY: mapElem.interpolate({
          inputRange: [0, 1],
          outputRange: [400, 0],
        }),
      },
    ],
  };

  const mapOrg = () => {
    Animated.timing(mapElem, {
      toValue: 1,
      duration: 800,
      easing: Easing.out(Easing.exp),
      useNativeDriver: true,
    }).start();
  };

  return (
    <>
      <Container mb={0}>
        <Animated.View
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            left: 0,
            zIndex: 10000,
            opacity: opacityAnimation,
          }}>
          {partners.length <= 0 ? (
            <Header title={subCategory} changeStage={() => setStage(4)} />
          ) : (
            <HeaderTabs
              title={subCategory}
              changeStage={() => setStage(4)}
              tabs={tabs}
              setTabs={setTabs}
              onChangeTab={() => {
                animateMap();
                mapOrg();
              }}
            />
          )}
        </Animated.View>
        <>
          {partners.length <= 0 ? (
            <ScrollView
              style={listPartnersStyles.noneOrgContainer}
              showsVerticalScrollIndicator={false}>
              <View>
                <Image
                  source={require('../../../assets/noneorg.png')}
                  style={listPartnersStyles.noneOrgImage}
                  resizeMode="contain"
                />
                <Typography style={listPartnersStyles.noneOrgTitle}>
                  Печалька(
                </Typography>
                <Typography style={listPartnersStyles.noneOrgSubtitle}>
                  Похоже, в данном городе еще никто не добавил организации, но
                  Вы можете сделать это первым!
                </Typography>
              </View>
              <Button variant="contain" style={{ marginBottom: 96 }}>
                Добавить организацию
              </Button>
            </ScrollView>
          ) : (
            <>
              {tabs[tabs.findIndex(el => el.focus === true)].title ===
              'Списком' ? (
                <>
                  {isOrganization ? (
                    <OrgPage handleClose={() => handlePressCard()} />
                  ) : (
                    <Animated.ScrollView
                      showsVerticalScrollIndicator={false}
                      style={[
                        contentSlideStyle,
                        {
                          flex: 1,
                          paddingTop: 128 + StatusBarManager.HEIGHT,
                        },
                      ]}>
                      {partners.map((item, index) => (
                        <View
                          key={index}
                          style={[
                            listPartnersStyles.card,
                            index === 0 && listPartnersStyles.firstCard,
                            index + 1 === partners.length &&
                              listPartnersStyles.lastCard,
                          ]}>
                          <CardOrg
                            key={index}
                            title={item.title}
                            subtitle={item.subtitle}
                            focus={item.focus}
                            onPress={() => handlePressCard()}
                          />
                        </View>
                      ))}
                    </Animated.ScrollView>
                  )}
                </>
              ) : (
                <View>
                  <Animated.View
                    style={{
                      transform: [
                        {
                          scale: mapAnimation.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0.2, 1],
                          }),
                        },
                      ],
                    }}>
                    <MapView
                      region={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                      }}
                      style={listPartnersStyles.map}
                    />
                  </Animated.View>
                  <Animated.View
                    style={{
                      ...mapElemSlideStyle,
                      position: 'absolute',
                      bottom: 0,
                      right: 0,
                      left: 0,
                      top: screenH - 72 - 120 - StatusBarManager.HEIGHT,
                    }}>
                    <MapsElements />
                  </Animated.View>
                </View>
              )}
            </>
          )}
        </>
      </Container>
      <Animated.View style={bottomBarSlideStyle}>
        <BottomBar />
      </Animated.View>
    </>
  );
};

export default ListPartners;
