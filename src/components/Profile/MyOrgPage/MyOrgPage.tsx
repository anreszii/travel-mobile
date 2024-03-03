import {
  View,
  Text,
  Dimensions,
  Image,
  StyleSheet,
  Easing,
  TouchableOpacity,
  ScrollView,
  Animated,
} from 'react-native';
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import Container from '../../../layouts/Container/Container';
import { Pagination } from 'react-native-snap-carousel';
import Typography from '../../ui/Typography/Typography';
import { carousel } from '../../../_mock/carousel';
import myOrgPageStyles from './MyOrgPageStyle';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import BottomBar from '../../../layouts/BottomBar/BottomBar';
import { BottomBarContext } from '../../../providers/BottomBarProvider';
import Button from '../../ui/Button/Button';
import {
  CrossIcon,
  FacebookIcon,
  InstagramIcon,
  LocationIcon,
  PhoneIcon,
  RatingIcon,
  TelegramIcon,
  ViberIcon,
  WebSiteIcon,
  WhatsappIcon,
} from '../../../icons';
import { useSharedValue, withSpring } from 'react-native-reanimated';
import Carousel from 'react-native-reanimated-carousel';
import { useNavigation } from '@react-navigation/native';
import OrgBottom from '../../organization/OrgBottom/OrgBottom';
import ModalTime from '../../organization/ModalTime/ModalTime';
import ModalMenu from '../ModalMenu/ModalMenu';
import ModalDelete from './ModalDeleteOrg/ModalDeleteOrg';
import ModalDeleteOrg from './ModalDeleteOrg/ModalDeleteOrg';

interface IMyOrgPage {
  handleClose: () => void;
}

const MyOrgPage: React.FC<IMyOrgPage> = ({ handleClose }) => {
  const width = Dimensions.get('screen').width;
  const height = Dimensions.get('screen').height;
  const [activeIndex, setActiveIndex] = useState(0);
  const [tabsActive, setTabsActive] = useState(0);
  const [visibleMenu, setVisibleMenu] = useState(false);
  const [visibleTime, setVisibleTime] = useState(false);
  const [visibleDelete, setVisibleDelete] = useState(false);

  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => [height - 375, '90%'], []);

  const slideAnimation = useRef(new Animated.Value(0)).current;

  const handleSheetClose = () => {
    bottomSheetRef.current?.close();
    bottomSheetRef.current?.forceClose();
    bottomSheetRef.current?.snapToPosition('0%');
    slideClose();
    setTimeout(() => {
      handleClose();
    }, 5);
  };

  const slideClose = () => {
    Animated.timing(slideAnimation, {
      toValue: 0,
      duration: 1800,
      easing: Easing.out(Easing.exp),
      useNativeDriver: true,
    }).start();
  };

  const slideOpen = () => {
    Animated.timing(slideAnimation, {
      toValue: 1,
      duration: 600,
      easing: Easing.out(Easing.exp),
      useNativeDriver: true,
    }).start();
  };

  const carouselSlideStyle = {
    transform: [
      {
        translateY: slideAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: [-400, 0],
        }),
      },
    ],
  };

  useEffect(() => {
    slideOpen();
  }, []);

  const handleChangeTabs = (title: string) => {
    switch (title) {
      case 'Обзор':
        setTabsActive(0);
        break;
      case 'Фото':
        setTabsActive(1);
        break;
      case 'Отзывы':
        setTabsActive(2);
        break;
    }
  };

  return (
    <>
      <>
        <>
          <Container safe={true} mb={0}>
            <Animated.View style={[carouselSlideStyle]}>
              <Carousel
                loop
                data={carousel}
                renderItem={({ item, index }) => (
                  <Image source={item} style={myOrgPageStyles.image} />
                )}
                width={width}
                height={260}
                autoPlay={true}
                scrollAnimationDuration={1000}
                onSnapToItem={index => setActiveIndex(index)}
              />
              <Pagination
                dotsLength={carousel.length}
                activeDotIndex={activeIndex}
                containerStyle={{
                  position: 'absolute',
                  top: 180,
                  left: 0,
                  right: 0,
                }}
                dotStyle={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  marginHorizontal: 2,
                  backgroundColor: '#5379F6',
                }}
                inactiveDotStyle={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  marginHorizontal: 2,
                  backgroundColor: '#FFF',
                }}
                inactiveDotScale={1}
                animatedDuration={0}
              />
            </Animated.View>
            <BottomSheet ref={bottomSheetRef} index={0} snapPoints={snapPoints}>
              <BottomSheetScrollView
                style={myOrgPageStyles.content}
                showsVerticalScrollIndicator={false}>
                <View style={myOrgPageStyles.header}>
                  <Typography style={myOrgPageStyles.title}>
                    Coffee Novi
                  </Typography>
                  <Button
                    variant="icon"
                    Icon={CrossIcon}
                    style={myOrgPageStyles.crossButton}
                    onPress={handleSheetClose}
                  />
                </View>
                <Typography style={myOrgPageStyles.subtitle}>
                  Кофейня
                </Typography>
                <View style={myOrgPageStyles.ratingContent}>
                  <RatingIcon />
                  <Typography style={myOrgPageStyles.rating}>4.8</Typography>
                  <Typography style={myOrgPageStyles.score}>
                    (124 оценки)
                  </Typography>
                </View>
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => setVisibleTime(!visibleTime)}>
                  <Typography style={myOrgPageStyles.time}>
                    Открыто до 99:99
                  </Typography>
                </TouchableOpacity>
                <View style={myOrgPageStyles.tabsContent}>
                  <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => handleChangeTabs('Обзор')}
                    style={
                      tabsActive === 0
                        ? myOrgPageStyles.tabsTitleContainerActive
                        : myOrgPageStyles.tabsTitleContainer
                    }>
                    <Typography style={myOrgPageStyles.tabsTitle}>
                      Обзор
                    </Typography>
                  </TouchableOpacity>
                  <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => handleChangeTabs('Фото')}
                    style={
                      tabsActive === 1
                        ? myOrgPageStyles.rowActive
                        : myOrgPageStyles.row
                    }>
                    <Typography style={myOrgPageStyles.tabsTitle}>
                      Фото
                    </Typography>
                    <View style={myOrgPageStyles.subtitleContainer}>
                      <Typography style={myOrgPageStyles.tabsSubtitle}>
                        8
                      </Typography>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => handleChangeTabs('Отзывы')}
                    style={
                      tabsActive === 2
                        ? myOrgPageStyles.rowActive
                        : myOrgPageStyles.row
                    }>
                    <Typography style={myOrgPageStyles.tabsTitle}>
                      Отзывы
                    </Typography>
                    <View style={myOrgPageStyles.subtitleContainer}>
                      <Typography style={myOrgPageStyles.tabsSubtitle}>
                        15
                      </Typography>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={myOrgPageStyles.locationContent}>
                  <LocationIcon />
                  <Typography style={myOrgPageStyles.location}>
                    13 Njegoševa, Herceg - Novi 85340
                  </Typography>
                </View>
                <View
                  style={{
                    borderWidth: StyleSheet.hairlineWidth,
                    borderColor: '#EEE',
                    width: '120%',
                    marginHorizontal: -24,
                  }}></View>
                <View style={myOrgPageStyles.phoneContent}>
                  <PhoneIcon />
                  <Typography style={myOrgPageStyles.phone}>
                    + 382 111 222 333
                  </Typography>
                </View>
                <View style={myOrgPageStyles.socialsContent}>
                  <Button variant="icon" Icon={InstagramIcon} />
                  <Button variant="icon" Icon={TelegramIcon} />
                  <Button variant="icon" Icon={WhatsappIcon} />
                  <Button variant="icon" Icon={ViberIcon} />
                  <Button variant="icon" Icon={WebSiteIcon} />
                  <Button variant="icon" Icon={FacebookIcon} />
                </View>
                <View
                  style={{
                    borderWidth: StyleSheet.hairlineWidth,
                    borderColor: '#EEE',
                    width: '120%',
                    marginHorizontal: -24,
                  }}></View>
                <View style={myOrgPageStyles.descriptionContent}>
                  <Typography style={myOrgPageStyles.descriptionTitle}>
                    Описание
                  </Typography>
                  <Typography style={myOrgPageStyles.description}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolore amet enim ab, sint officia et accusamus maxime ipsum
                    repudiandae, rerum aliquid aperiam saepe modi velit, minima
                    consequatur nostrum dignissimos natus! Lorem ipsum, dolor
                    sit amet consectetur adipisicing elit. Dolore ullam
                    asperiores laborum, quas et labore! Aliquid modi ipsam
                    dolor, libero nobis deleniti sint quis accusamus id commodi
                    eos quisquam eligendi.
                  </Typography>
                </View>
              </BottomSheetScrollView>
            </BottomSheet>
          </Container>
          <ModalMenu
            visible={visibleMenu}
            setVisible={setVisibleMenu}
            visibleDelete={visibleDelete}
            setVisibleDelete={setVisibleDelete}
          />
        </>
        <OrgBottom visibleMenu={visibleMenu} setVisibleMenu={setVisibleMenu} />
      </>
      <ModalTime visible={visibleTime} setVisible={setVisibleTime} />
      <ModalDeleteOrg visible={visibleDelete} setVisible={setVisibleDelete} />
    </>
  );
};

export default MyOrgPage;
