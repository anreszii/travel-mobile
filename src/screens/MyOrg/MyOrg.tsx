import {
  View,
  Text,
  ScrollView,
  Animated,
  Easing,
  NativeModules,
} from 'react-native';
import React, { useContext, useEffect, useRef, useState } from 'react';
import HeaderSearch from '../../layouts/HeaderSearch/HeaderSearch';
import Container from '../../layouts/Container/Container';
import { favorite } from '../../_mock/favorite';
import CardOrg from '../../components/organization/Card/CardOrg';
import myOrgStyles from './MyOrgStyle';
import OrgPage from '../../components/organization/OrgPage/OrgPage';
import BottomBar from '../../layouts/BottomBar/BottomBar';
import { BottomBarContext } from '../../providers/BottomBarProvider';
import MyOrgPage from '../../components/Profile/MyOrgPage/MyOrgPage';
const { StatusBarManager } = NativeModules;

const MyOrg = () => {
  const [isOrganization, setIsOrganization] = useState(false);
  const [isAnimation, setIsAnimation] = useState(false);

  const { isVisible, setIsVisible } = useContext(BottomBarContext);

  const slideAnimation = useRef(new Animated.Value(0)).current;
  const contentSlideAnimation = useRef(new Animated.Value(0)).current;
  const bottomBarAnimation = useRef(new Animated.Value(0)).current;
  const opacityAnimation = useRef(new Animated.Value(0)).current;

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
        duration: 800,
        easing: Easing.out(Easing.exp),
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnimation, {
        toValue: 1,
        duration: 650,
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
        duration: 400,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const headerSlideStyle = {
    transform: [
      {
        translateY: slideAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: [-200, 0],
        }),
      },
    ],
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
          outputRange: [-100, 0],
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

  return (
    <>
      <Container mb={0}>
        <Animated.View
          style={[
            headerSlideStyle,
            {
              position: 'absolute',
              top: 0,
              right: 0,
              left: 0,
              zIndex: 10000,
            },
          ]}>
          <HeaderSearch title="Мои организации" />
        </Animated.View>
        {isOrganization ? (
          <MyOrgPage handleClose={() => handlePressCard()} />
        ) : (
          <View
            style={{
              flex: 1,
              paddingTop: 80 + StatusBarManager.HEIGHT,
            }}>
            <Animated.ScrollView
              showsVerticalScrollIndicator={false}
              style={[
                contentSlideStyle,
                {
                  ...myOrgStyles.container,
                  opacity: opacityAnimation,
                },
              ]}>
              <View style={myOrgStyles.content}>
                {favorite.map((item, index) => (
                  <View
                    style={{
                      ...myOrgStyles.card,
                      ...(index + 1 === favorite.length &&
                        myOrgStyles.lastCard),
                    }}
                    key={index}>
                    <CardOrg
                      title={item.title}
                      subtitle={item.subtitle}
                      focus={item.focus}
                      onPress={() => handlePressCard()}
                    />
                  </View>
                ))}
              </View>
            </Animated.ScrollView>
          </View>
        )}
      </Container>
      <Animated.View style={bottomBarSlideStyle}>
        <BottomBar />
      </Animated.View>
    </>
  );
};

export default MyOrg;
