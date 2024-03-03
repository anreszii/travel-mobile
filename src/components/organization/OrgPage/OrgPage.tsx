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
  NativeModules,
  ViewStyle,
  ImageBackground,
} from 'react-native';
const { StatusBarManager } = NativeModules;
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
import orgPageStyles from './OrgPageStyle';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import BottomBar from '../../../layouts/BottomBar/BottomBar';
import { BottomBarContext } from '../../../providers/BottomBarProvider';
import Button from '../../ui/Button/Button';
import {
  AddImageIcon,
  ArrowDown,
  AvatarIcon,
  BackIcon,
  CrossIcon,
  EditCrossIcon,
  FacebookIcon,
  InstagramIcon,
  LocationIcon,
  MenuIcon,
  PhoneIcon,
  RatingFourIcon,
  RatingIcon,
  ReportFlagIcon,
  TelegramIcon,
  TrashIcon,
  ViberIcon,
  WebSiteIcon,
  WhatsappIcon,
} from '../../../icons';
import { useSharedValue, withSpring } from 'react-native-reanimated';
import Carousel from 'react-native-reanimated-carousel';
import OrgBottom from '../OrgBottom/OrgBottom';
import ModalMenu from '../ModalMenu/ModalMenu';
import ModalTime from '../ModalTime/ModalTime';
import ModalDelete from './ModalDelete/ModalDelete';
import ImageView from 'react-native-image-viewing';
import Modal from 'react-native-modal';
import Dropdown from '../../ui/Dropdown/Dropdown';
import Rating from './Rating/Rating';
import ModalFilter from './ModalFilter/ModalFilter';
import ModalDeleteComment from './ModalDeleteComment/ModalDeleteComment';
import OrgBottomRewiew from '../OrgBottom/OrgBottomRewiew';
import OrgBottomPhoto from '../OrgBottom/OrgBottomPhoto';
import YourRewiew from './YourRewiew/YourRewiew';
import Input from '../../ui/Input/Input';
import { launchImageLibrary } from 'react-native-image-picker';

interface IOrgPage {
  handleClose: () => void;
}

const OrgPage: React.FC<IOrgPage> = ({ handleClose }) => {
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  const [activeIndex, setActiveIndex] = useState(0);
  const [tabsActive, setTabsActive] = useState(0);
  const [visibleMenu, setVisibleMenu] = useState(false);
  const [visibleTime, setVisibleTime] = useState(false);
  const [visiblePhoto, setVisiblePhoto] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const [visibleDelete, setVisibleDelete] = useState(false);
  const [visibleReport, setVisibleReport] = useState(false);
  const [visibleFilter, setVisibleFilter] = useState(false);
  const [visibleComment, setVisibleComment] = useState(false);
  const [visibleDeleteComment, setVisibleDeleteComment] = useState(false);
  const [isRewiew, setIsRewiew] = useState(false);
  const [imagesRewiew, setImagesRewiew] = useState<
    (string | undefined)[] | undefined
  >([]);

  const bottomSheetRef = useRef<BottomSheet>(null);
  const bottomSheetCarousel = useRef<any>(null);

  const slideAnimation = useRef(new Animated.Value(0)).current;
  const contentSlideAnimation = useRef(new Animated.Value(0)).current;
  const opacityAnimation = useRef(new Animated.Value(0)).current;

  const images = [
    {
      uri: 'https://www.purina.ru/sites/default/files/2021-10/britanskaya-3.jpg',
    },
    {
      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKrc0QWVMHaVSeuT0PILfLT4U9Ca3wpKUhoqyzfL2SGQ&s',
    },
    {
      uri: 'https://img.freepik.com/free-photo/adorable-cat-relaxing-indoors_23-2150692848.jpg',
    },
    {
      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9Q8WU-rDGslRtVv2gL53SPUZ-Th8RlKjrXU0RDuEswg&s',
    },
    {
      uri: 'https://im.kommersant.ru/issues.photo/ogoniok/archive/common/4989/Og13_057_Page_1_Image_0001.jpg',
    },
    {
      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP94bpI-2mk52eSbb8E1VrnYr8UFEQxwsoPWEsSbxL-Q&s',
    },
  ];

  const handleSheetClose = () => {
    bottomSheetRef.current?.close();
    bottomSheetRef.current?.forceClose();
    slideClose();
    setTimeout(() => {
      handleClose();
    }, 5);
  };

  const slideClose = () => {
    Animated.parallel([
      Animated.timing(slideAnimation, {
        toValue: 0,
        duration: 1800,
        easing: Easing.out(Easing.exp),
        useNativeDriver: true,
      }),
      Animated.timing(contentSlideAnimation, {
        toValue: 0,
        duration: 5600,
        easing: Easing.out(Easing.exp),
        useNativeDriver: true,
      }),
    ]).start();
  };

  const slideOpen = () => {
    Animated.parallel([
      Animated.timing(slideAnimation, {
        toValue: 1,
        duration: 600,
        easing: Easing.out(Easing.exp),
        useNativeDriver: true,
      }),
      Animated.timing(contentSlideAnimation, {
        toValue: 1,
        duration: 400,
        easing: Easing.out(Easing.exp),
        useNativeDriver: true,
      }),
    ]).start();
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

  const contentSlideStyle = {
    transform: [
      {
        translateY: contentSlideAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: [2000, 0],
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
        switch (bottomSheetCarousel.current.getCurrentIndex()) {
          case 1:
            bottomSheetCarousel.current.prev(1);
            break;
          case 2:
            bottomSheetCarousel.current.prev(2);
            setTabsActive(2);
            break;
        }
        setTabsActive(0);
        break;
      case 'Фото':
        switch (bottomSheetCarousel.current.getCurrentIndex()) {
          case 0:
            bottomSheetCarousel.current.next(1);
            break;
          case 2:
            bottomSheetCarousel.current.prev(1);
            setTabsActive(2);
            break;
        }
        setTabsActive(1);
        break;
      case 'Отзывы':
        switch (bottomSheetCarousel.current.getCurrentIndex()) {
          case 0:
            bottomSheetCarousel.current.next(2);
            break;
          case 1:
            bottomSheetCarousel.current.next(1);
            setTabsActive(2);
            break;
        }
        setTabsActive(2);
        break;
    }
  };

  useEffect(() => {
    if (isRewiew) {
      Animated.timing(opacityAnimation, {
        toValue: 1,
        duration: 1200,
        easing: Easing.out(Easing.exp),
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(opacityAnimation, {
        toValue: 0,
        duration: 400,
        easing: Easing.out(Easing.exp),
        useNativeDriver: true,
      }).start();
    }
  }, [isRewiew]);

  const ImageViewHeader = () => {
    return (
      <View style={orgPageStyles.headerPhoto}>
        <Button
          variant="iconDark"
          onPress={() => setVisiblePhoto(false)}
          Icon={BackIcon}
        />
        <Button
          variant="iconDark"
          onPress={() => setVisibleReport(!visibleReport)}
          Icon={ReportFlagIcon}
        />
      </View>
    );
  };

  const launchPickImage = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      selectionLimit: 0,
    });
    setImagesRewiew(
      !result.didCancel ? result.assets?.map((item, index) => item.uri) : [],
    );
  };

  return (
    <>
      <>
        <>
          <Container safe mb={0}>
            <Animated.View style={[carouselSlideStyle]}>
              <Carousel
                loop
                data={carousel}
                style={{
                  zIndex: 1,
                  position: 'absolute',
                  right: 0,
                  left: 0,
                }}
                renderItem={({ item, index }) => (
                  <Image source={item} style={orgPageStyles.image} />
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
            <Animated.View style={contentSlideStyle}>
              <Carousel
                loop
                ref={bottomSheetCarousel}
                data={[
                  <BottomSheet
                    style={{ flex: 1 }}
                    ref={bottomSheetRef}
                    index={0}
                    snapPoints={
                      tabsActive === 0 || tabsActive === 2
                        ? [height - 240, '95%']
                        : [height - 240, '100%']
                    }>
                    <View style={orgPageStyles.content}>
                      <View style={orgPageStyles.header}>
                        <Typography style={orgPageStyles.title}>
                          Coffee Novi
                        </Typography>
                        <Button
                          variant="icon"
                          Icon={CrossIcon}
                          style={orgPageStyles.crossButton}
                          onPress={handleSheetClose}
                        />
                      </View>
                      <Typography style={orgPageStyles.subtitle}>
                        Кофейня
                      </Typography>
                      <View style={orgPageStyles.ratingContent}>
                        <RatingIcon />
                        <Typography style={orgPageStyles.rating}>
                          4.8
                        </Typography>
                        <Typography style={orgPageStyles.score}>
                          (124 оценки)
                        </Typography>
                      </View>
                      <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => setVisibleTime(!visibleTime)}>
                        <Typography style={orgPageStyles.time}>
                          Открыто до 99:99
                        </Typography>
                      </TouchableOpacity>
                      <View style={orgPageStyles.tabsContent}>
                        <TouchableOpacity
                          activeOpacity={1}
                          onPress={() => handleChangeTabs('Обзор')}
                          style={orgPageStyles.tabsTitleContainerActive}>
                          <Typography style={orgPageStyles.tabsTitle}>
                            Обзор
                          </Typography>
                        </TouchableOpacity>
                        <TouchableOpacity
                          activeOpacity={1}
                          onPress={() => handleChangeTabs('Фото')}
                          style={orgPageStyles.row}>
                          <Typography style={orgPageStyles.tabsTitle}>
                            Фото
                          </Typography>
                          <View style={orgPageStyles.subtitleContainer}>
                            <Typography style={orgPageStyles.tabsSubtitle}>
                              8
                            </Typography>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                          activeOpacity={1}
                          onPress={() => handleChangeTabs('Отзывы')}
                          style={orgPageStyles.row}>
                          <Typography style={orgPageStyles.tabsTitle}>
                            Отзывы
                          </Typography>
                          <View style={orgPageStyles.subtitleContainer}>
                            <Typography style={orgPageStyles.tabsSubtitle}>
                              15
                            </Typography>
                          </View>
                        </TouchableOpacity>
                      </View>
                      <BottomSheetScrollView>
                        <View style={orgPageStyles.locationContent}>
                          <LocationIcon />
                          <Typography style={orgPageStyles.location}>
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
                        <View style={orgPageStyles.phoneContent}>
                          <PhoneIcon />
                          <Typography style={orgPageStyles.phone}>
                            + 382 111 222 333
                          </Typography>
                        </View>
                        <View style={orgPageStyles.socialsContent}>
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
                        <View style={orgPageStyles.descriptionContent}>
                          <Typography style={orgPageStyles.descriptionTitle}>
                            Описание
                          </Typography>
                          <Typography style={orgPageStyles.description}>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Dolore amet enim ab, sint officia et accusamus
                            maxime ipsum repudiandae, rerum aliquid aperiam
                            saepe modi velit, minima consequatur nostrum
                            dignissimos natus! Lorem ipsum, dolor sit amet
                            consectetur adipisicing elit. Dolore ullam
                            asperiores laborum, quas et labore! Aliquid modi
                            ipsam dolor, libero nobis deleniti sint quis
                            accusamus id commodi eos quisquam eligendi.
                          </Typography>
                        </View>
                      </BottomSheetScrollView>
                    </View>
                  </BottomSheet>,
                  <BottomSheet
                    ref={bottomSheetRef}
                    style={{ flex: 1 }}
                    backgroundStyle={{ borderRadius: 0 }}
                    index={0}
                    snapPoints={
                      tabsActive === 0 || tabsActive === 2
                        ? [height - 240, '95%']
                        : [height - 240, '100%']
                    }>
                    <View style={orgPageStyles.content}>
                      {isRewiew ? (
                        <Animated.View
                          style={{ flex: 1, opacity: opacityAnimation }}>
                          <BottomSheetScrollView
                            style={{ flex: 1 }}
                            contentContainerStyle={orgPageStyles.rewiewContent}>
                            <View style={orgPageStyles.header}>
                              <Typography style={orgPageStyles.rewiewTitle}>
                                Ваши впечатления
                              </Typography>
                              <Button
                                variant="icon"
                                Icon={CrossIcon}
                                style={orgPageStyles.crossButton}
                                onPress={() => setIsRewiew(!isRewiew)}
                              />
                            </View>
                            <View style={orgPageStyles.yourRatingContainer}>
                              <Typography style={orgPageStyles.yourRatingTitle}>
                                Ваша оценка
                              </Typography>
                              <YourRewiew />
                            </View>
                            <View style={orgPageStyles.yourRewiewContainer}>
                              <Typography style={orgPageStyles.yourRewiewTitle}>
                                Ваш отзыв
                              </Typography>
                              <Input
                                placeholder="Поделитесь своими впечатлениями"
                                style={orgPageStyles.yourRewiewInput}
                                styleInput={orgPageStyles.yourRewiewInputTitle}
                              />
                            </View>
                            <View style={orgPageStyles.addPhotoContainer}>
                              <Typography style={orgPageStyles.addPhotoTitle}>
                                Добавьте фото
                              </Typography>
                              <View style={orgPageStyles.addPhotoImages}>
                                <Button
                                  variant="icon"
                                  Icon={AddImageIcon}
                                  style={orgPageStyles.addPhotoButton}
                                  onPress={async () => await launchPickImage()}
                                />
                                {!!imagesRewiew?.length && (
                                  <>
                                    {imagesRewiew?.map((item, index) => (
                                      <View key={index}>
                                        <TouchableOpacity
                                          style={orgPageStyles.imageRewiewIcon}>
                                          <CrossIcon
                                            width={16}
                                            height={16}
                                            color="#EEF5FF"
                                          />
                                        </TouchableOpacity>
                                        <Image
                                          key={index}
                                          source={
                                            item ? { uri: item } : { uri: '' }
                                          }
                                          style={orgPageStyles.rewiewImage}
                                        />
                                      </View>
                                    ))}
                                  </>
                                )}
                              </View>
                            </View>
                            <View
                              style={orgPageStyles.buttonSendContainer}></View>
                          </BottomSheetScrollView>
                        </Animated.View>
                      ) : (
                        <>
                          <View style={orgPageStyles.header}>
                            <Typography style={orgPageStyles.title}>
                              Coffee Novi
                            </Typography>
                            <Button
                              variant="icon"
                              Icon={CrossIcon}
                              style={orgPageStyles.crossButton}
                              onPress={handleSheetClose}
                            />
                          </View>
                          <Typography style={orgPageStyles.subtitle}>
                            Кофейня
                          </Typography>
                          <View style={orgPageStyles.ratingContent}>
                            <RatingIcon />
                            <Typography style={orgPageStyles.rating}>
                              4.8
                            </Typography>
                            <Typography style={orgPageStyles.score}>
                              (124 оценки)
                            </Typography>
                          </View>
                          <TouchableOpacity
                            activeOpacity={1}
                            onPress={() => setVisibleTime(!visibleTime)}>
                            <Typography style={orgPageStyles.time}>
                              Открыто до 99:99
                            </Typography>
                          </TouchableOpacity>
                          <View style={orgPageStyles.tabsContent}>
                            <TouchableOpacity
                              activeOpacity={1}
                              onPress={() => handleChangeTabs('Обзор')}
                              style={
                                tabsActive === 0
                                  ? orgPageStyles.tabsTitleContainerActive
                                  : orgPageStyles.tabsTitleContainer
                              }>
                              <Typography style={orgPageStyles.tabsTitle}>
                                Обзор
                              </Typography>
                            </TouchableOpacity>
                            <TouchableOpacity
                              activeOpacity={1}
                              onPress={() => handleChangeTabs('Фото')}
                              style={
                                tabsActive === 1
                                  ? orgPageStyles.rowActive
                                  : orgPageStyles.row
                              }>
                              <Typography style={orgPageStyles.tabsTitle}>
                                Фото
                              </Typography>
                              <View style={orgPageStyles.subtitleContainer}>
                                <Typography style={orgPageStyles.tabsSubtitle}>
                                  8
                                </Typography>
                              </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                              activeOpacity={1}
                              onPress={() => handleChangeTabs('Отзывы')}
                              style={
                                tabsActive === 2
                                  ? orgPageStyles.rowActive
                                  : orgPageStyles.row
                              }>
                              <Typography style={orgPageStyles.tabsTitle}>
                                Отзывы
                              </Typography>
                              <View style={orgPageStyles.subtitleContainer}>
                                <Typography style={orgPageStyles.tabsSubtitle}>
                                  15
                                </Typography>
                              </View>
                            </TouchableOpacity>
                          </View>
                          {tabsActive === 0 && (
                            <BottomSheetScrollView style={{ flex: 1 }}>
                              <View style={orgPageStyles.locationContent}>
                                <LocationIcon />
                                <Typography style={orgPageStyles.location}>
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
                              <View style={orgPageStyles.phoneContent}>
                                <PhoneIcon />
                                <Typography style={orgPageStyles.phone}>
                                  + 382 111 222 333
                                </Typography>
                              </View>
                              <View style={orgPageStyles.socialsContent}>
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
                              <View style={orgPageStyles.descriptionContent}>
                                <Typography
                                  style={orgPageStyles.descriptionTitle}>
                                  Описание
                                </Typography>
                                <Typography style={orgPageStyles.description}>
                                  Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Dolore amet enim ab, sint
                                  officia et accusamus maxime ipsum repudiandae,
                                  rerum aliquid aperiam saepe modi velit, minima
                                  consequatur nostrum dignissimos natus! Lorem
                                  ipsum, dolor sit amet consectetur adipisicing
                                  elit. Dolore ullam asperiores laborum, quas et
                                  labore! Aliquid modi ipsam dolor, libero nobis
                                  deleniti sint quis accusamus id commodi eos
                                  quisquam eligendi.
                                </Typography>
                              </View>
                            </BottomSheetScrollView>
                          )}
                          {tabsActive === 1 && (
                            <BottomSheetScrollView
                              showsVerticalScrollIndicator={false}
                              style={orgPageStyles.photoContainer}>
                              <View style={orgPageStyles.photoContent}>
                                <TouchableOpacity
                                  onPress={() => {
                                    setVisiblePhoto(!visiblePhoto);
                                    setImageIndex(0);
                                  }}>
                                  <Image
                                    source={require('../../../../assets/photo1.png')}
                                    style={orgPageStyles.photoFirst}
                                  />
                                </TouchableOpacity>
                                <TouchableOpacity
                                  onPress={() => {
                                    setVisiblePhoto(!visiblePhoto);
                                    setImageIndex(1);
                                  }}>
                                  <Image
                                    source={require('../../../../assets/photo2.png')}
                                    style={orgPageStyles.photo}
                                  />
                                </TouchableOpacity>
                                <TouchableOpacity
                                  onPress={() => {
                                    setVisiblePhoto(!visiblePhoto);
                                    setImageIndex(2);
                                  }}>
                                  <Image
                                    source={require('../../../../assets/photo3.png')}
                                    style={orgPageStyles.photoFirst}
                                  />
                                </TouchableOpacity>
                                <TouchableOpacity
                                  onPress={() => {
                                    setVisiblePhoto(!visiblePhoto);
                                    setImageIndex(3);
                                  }}>
                                  <Image
                                    source={require('../../../../assets/photo4.png')}
                                    style={orgPageStyles.photo}
                                  />
                                </TouchableOpacity>
                                <TouchableOpacity
                                  onPress={() => {
                                    setVisiblePhoto(!visiblePhoto);
                                    setImageIndex(4);
                                  }}>
                                  <Image
                                    source={require('../../../../assets/photo5.png')}
                                    style={orgPageStyles.photoFirst}
                                  />
                                </TouchableOpacity>
                                <TouchableOpacity
                                  onPress={() => {
                                    setVisiblePhoto(!visiblePhoto);
                                    setImageIndex(5);
                                  }}>
                                  <Image
                                    source={require('../../../../assets/photo6.png')}
                                    style={orgPageStyles.photo}
                                  />
                                </TouchableOpacity>
                              </View>
                            </BottomSheetScrollView>
                          )}
                          {tabsActive === 2 && (
                            <BottomSheetScrollView
                              showsVerticalScrollIndicator={false}
                              style={{ marginBottom: 124 }}>
                              <Rating />
                              <View style={orgPageStyles.rewiewHeader}>
                                <Typography
                                  style={orgPageStyles.rewiewHeaderTitle}>
                                  2 отзыва
                                </Typography>
                                <TouchableOpacity
                                  style={orgPageStyles.filterRewiew}
                                  onPress={() =>
                                    setVisibleFilter(!visibleFilter)
                                  }>
                                  <Typography
                                    style={orgPageStyles.rewiewFilterTitle}>
                                    Сначала новые
                                  </Typography>
                                  <ArrowDown color="#8B96A3" />
                                </TouchableOpacity>
                              </View>
                              <View>
                                <Typography style={orgPageStyles.myRewiewTitle}>
                                  Ваши отзывы
                                </Typography>
                                <View style={orgPageStyles.myRewiewContainer}>
                                  <View style={orgPageStyles.myRewiewItem}>
                                    <View
                                      style={orgPageStyles.rewiewItemHeader}>
                                      <AvatarIcon />
                                      <Typography
                                        style={
                                          orgPageStyles.rewiewItemHeaderTitle
                                        }>
                                        Placeholderplaceholder
                                      </Typography>
                                    </View>
                                    <View
                                      style={orgPageStyles.rewiewItemRating}>
                                      <RatingFourIcon />
                                      <Typography
                                        style={
                                          orgPageStyles.rewiewItemRatingTitle
                                        }>
                                        01/02/3001
                                      </Typography>
                                    </View>
                                    <Typography
                                      style={orgPageStyles.rewiewDesc}>
                                      Приятная атмосфера и хорошее расположение
                                      недалеко от старого града и прочая хрень
                                      для описания бла бла текст рыба По
                                      промокоду “Полако” получите скидку 146%
                                    </Typography>
                                    {visibleComment && (
                                      <Dropdown
                                        style={{ left: 16 }}
                                        options={[
                                          {
                                            title: 'Редактировать',
                                            icon: EditCrossIcon,
                                            onPress: () => {},
                                          },
                                          {
                                            title: 'Удалить',
                                            icon: CrossIcon,
                                            onPress: () =>
                                              setVisibleDeleteComment(
                                                !visibleDeleteComment,
                                              ),
                                          },
                                        ]}
                                      />
                                    )}
                                  </View>
                                  <TouchableOpacity
                                    onPress={() =>
                                      setVisibleComment(!visibleComment)
                                    }>
                                    <MenuIcon />
                                  </TouchableOpacity>
                                </View>
                              </View>
                              <View style={orgPageStyles.rewiewItem}>
                                <View style={orgPageStyles.rewiewItemHeader}>
                                  <AvatarIcon />
                                  <Typography
                                    style={orgPageStyles.rewiewItemHeaderTitle}>
                                    Placeholderplaceholder
                                  </Typography>
                                </View>
                                <View style={orgPageStyles.rewiewItemRating}>
                                  <RatingFourIcon />
                                  <Typography
                                    style={orgPageStyles.rewiewItemRatingTitle}>
                                    01/02/3001
                                  </Typography>
                                </View>
                              </View>
                              <View style={orgPageStyles.rewiewItem}>
                                <View style={orgPageStyles.rewiewItemHeader}>
                                  <AvatarIcon />
                                  <Typography
                                    style={orgPageStyles.rewiewItemHeaderTitle}>
                                    Placeholderplaceholder
                                  </Typography>
                                </View>
                                <View style={orgPageStyles.rewiewItemRating}>
                                  <RatingFourIcon />
                                  <Typography
                                    style={orgPageStyles.rewiewItemRatingTitle}>
                                    01/02/3001
                                  </Typography>
                                </View>
                              </View>
                            </BottomSheetScrollView>
                          )}
                        </>
                      )}
                    </View>
                  </BottomSheet>,
                  <BottomSheet
                    ref={bottomSheetRef}
                    backgroundStyle={
                      tabsActive === 1 ? { borderRadius: 0 } : {}
                    }
                    index={0}
                    style={{ flex: 1 }}
                    snapPoints={
                      tabsActive === 0 || tabsActive === 2
                        ? [height - 240, '95%']
                        : [height - 240, '100%']
                    }>
                    <View style={orgPageStyles.content}>
                      {isRewiew ? (
                        <Animated.View
                          style={{ flex: 1, opacity: opacityAnimation }}>
                          <BottomSheetScrollView
                            style={{ flex: 1 }}
                            contentContainerStyle={orgPageStyles.rewiewContent}>
                            <View style={orgPageStyles.header}>
                              <Typography style={orgPageStyles.rewiewTitle}>
                                Ваши впечатления
                              </Typography>
                              <Button
                                variant="icon"
                                Icon={CrossIcon}
                                style={orgPageStyles.crossButton}
                                onPress={() => setIsRewiew(!isRewiew)}
                              />
                            </View>
                            <View style={orgPageStyles.yourRatingContainer}>
                              <Typography style={orgPageStyles.yourRatingTitle}>
                                Ваша оценка
                              </Typography>
                              <YourRewiew />
                            </View>
                            <View style={orgPageStyles.yourRewiewContainer}>
                              <Typography style={orgPageStyles.yourRewiewTitle}>
                                Ваш отзыв
                              </Typography>
                              <Input
                                placeholder="Поделитесь своими впечатлениями"
                                style={orgPageStyles.yourRewiewInput}
                                styleInput={orgPageStyles.yourRewiewInputTitle}
                              />
                            </View>
                            <View style={orgPageStyles.addPhotoContainer}>
                              <Typography style={orgPageStyles.addPhotoTitle}>
                                Добавьте фото
                              </Typography>
                              <View style={orgPageStyles.addPhotoImages}>
                                <Button
                                  variant="icon"
                                  Icon={AddImageIcon}
                                  style={orgPageStyles.addPhotoButton}
                                  onPress={async () => await launchPickImage()}
                                />
                                {!!imagesRewiew?.length && (
                                  <>
                                    {imagesRewiew?.map((item, index) => (
                                      <View key={index}>
                                        <TouchableOpacity
                                          style={orgPageStyles.imageRewiewIcon}>
                                          <CrossIcon
                                            width={16}
                                            height={16}
                                            color="#EEF5FF"
                                          />
                                        </TouchableOpacity>
                                        <Image
                                          key={index}
                                          source={
                                            item ? { uri: item } : { uri: '' }
                                          }
                                          style={orgPageStyles.rewiewImage}
                                        />
                                      </View>
                                    ))}
                                  </>
                                )}
                              </View>
                            </View>
                            <View
                              style={orgPageStyles.buttonSendContainer}></View>
                          </BottomSheetScrollView>
                        </Animated.View>
                      ) : (
                        <>
                          <View style={orgPageStyles.header}>
                            <Typography style={orgPageStyles.title}>
                              Coffee Novi
                            </Typography>
                            <Button
                              variant="icon"
                              Icon={CrossIcon}
                              style={orgPageStyles.crossButton}
                              onPress={handleSheetClose}
                            />
                          </View>
                          <Typography style={orgPageStyles.subtitle}>
                            Кофейня
                          </Typography>
                          <View style={orgPageStyles.ratingContent}>
                            <RatingIcon />
                            <Typography style={orgPageStyles.rating}>
                              4.8
                            </Typography>
                            <Typography style={orgPageStyles.score}>
                              (124 оценки)
                            </Typography>
                          </View>
                          <TouchableOpacity
                            activeOpacity={1}
                            onPress={() => setVisibleTime(!visibleTime)}>
                            <Typography style={orgPageStyles.time}>
                              Открыто до 99:99
                            </Typography>
                          </TouchableOpacity>
                          <View style={orgPageStyles.tabsContent}>
                            <TouchableOpacity
                              activeOpacity={1}
                              onPress={() => handleChangeTabs('Обзор')}
                              style={
                                tabsActive === 0
                                  ? orgPageStyles.tabsTitleContainerActive
                                  : orgPageStyles.tabsTitleContainer
                              }>
                              <Typography style={orgPageStyles.tabsTitle}>
                                Обзор
                              </Typography>
                            </TouchableOpacity>
                            <TouchableOpacity
                              activeOpacity={1}
                              onPress={() => handleChangeTabs('Фото')}
                              style={
                                tabsActive === 1
                                  ? orgPageStyles.rowActive
                                  : orgPageStyles.row
                              }>
                              <Typography style={orgPageStyles.tabsTitle}>
                                Фото
                              </Typography>
                              <View style={orgPageStyles.subtitleContainer}>
                                <Typography style={orgPageStyles.tabsSubtitle}>
                                  8
                                </Typography>
                              </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                              activeOpacity={1}
                              onPress={() => handleChangeTabs('Отзывы')}
                              style={
                                tabsActive === 2
                                  ? orgPageStyles.rowActive
                                  : orgPageStyles.row
                              }>
                              <Typography style={orgPageStyles.tabsTitle}>
                                Отзывы
                              </Typography>
                              <View style={orgPageStyles.subtitleContainer}>
                                <Typography style={orgPageStyles.tabsSubtitle}>
                                  15
                                </Typography>
                              </View>
                            </TouchableOpacity>
                          </View>
                          {tabsActive === 0 && (
                            <BottomSheetScrollView style={{ flex: 1 }}>
                              <View style={orgPageStyles.locationContent}>
                                <LocationIcon />
                                <Typography style={orgPageStyles.location}>
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
                              <View style={orgPageStyles.phoneContent}>
                                <PhoneIcon />
                                <Typography style={orgPageStyles.phone}>
                                  + 382 111 222 333
                                </Typography>
                              </View>
                              <View style={orgPageStyles.socialsContent}>
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
                              <View style={orgPageStyles.descriptionContent}>
                                <Typography
                                  style={orgPageStyles.descriptionTitle}>
                                  Описание
                                </Typography>
                                <Typography style={orgPageStyles.description}>
                                  Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Dolore amet enim ab, sint
                                  officia et accusamus maxime ipsum repudiandae,
                                  rerum aliquid aperiam saepe modi velit, minima
                                  consequatur nostrum dignissimos natus! Lorem
                                  ipsum, dolor sit amet consectetur adipisicing
                                  elit. Dolore ullam asperiores laborum, quas et
                                  labore! Aliquid modi ipsam dolor, libero nobis
                                  deleniti sint quis accusamus id commodi eos
                                  quisquam eligendi.
                                </Typography>
                              </View>
                            </BottomSheetScrollView>
                          )}
                          {tabsActive === 1 && (
                            <BottomSheetScrollView
                              showsVerticalScrollIndicator={false}
                              style={orgPageStyles.photoContainer}>
                              <View style={orgPageStyles.photoContent}>
                                <TouchableOpacity
                                  onPress={() => {
                                    setVisiblePhoto(!visiblePhoto);
                                    setImageIndex(0);
                                  }}>
                                  <Image
                                    source={require('../../../../assets/photo1.png')}
                                    style={orgPageStyles.photoFirst}
                                  />
                                </TouchableOpacity>
                                <TouchableOpacity
                                  onPress={() => {
                                    setVisiblePhoto(!visiblePhoto);
                                    setImageIndex(1);
                                  }}>
                                  <Image
                                    source={require('../../../../assets/photo2.png')}
                                    style={orgPageStyles.photo}
                                  />
                                </TouchableOpacity>
                                <TouchableOpacity
                                  onPress={() => {
                                    setVisiblePhoto(!visiblePhoto);
                                    setImageIndex(2);
                                  }}>
                                  <Image
                                    source={require('../../../../assets/photo3.png')}
                                    style={orgPageStyles.photoFirst}
                                  />
                                </TouchableOpacity>
                                <TouchableOpacity
                                  onPress={() => {
                                    setVisiblePhoto(!visiblePhoto);
                                    setImageIndex(3);
                                  }}>
                                  <Image
                                    source={require('../../../../assets/photo4.png')}
                                    style={orgPageStyles.photo}
                                  />
                                </TouchableOpacity>
                                <TouchableOpacity
                                  onPress={() => {
                                    setVisiblePhoto(!visiblePhoto);
                                    setImageIndex(4);
                                  }}>
                                  <Image
                                    source={require('../../../../assets/photo5.png')}
                                    style={orgPageStyles.photoFirst}
                                  />
                                </TouchableOpacity>
                                <TouchableOpacity
                                  onPress={() => {
                                    setVisiblePhoto(!visiblePhoto);
                                    setImageIndex(5);
                                  }}>
                                  <Image
                                    source={require('../../../../assets/photo6.png')}
                                    style={orgPageStyles.photo}
                                  />
                                </TouchableOpacity>
                              </View>
                            </BottomSheetScrollView>
                          )}
                          {tabsActive === 2 && (
                            <BottomSheetScrollView
                              showsVerticalScrollIndicator={false}
                              style={{ marginBottom: 124 }}>
                              <Rating />
                              <View style={orgPageStyles.rewiewHeader}>
                                <Typography
                                  style={orgPageStyles.rewiewHeaderTitle}>
                                  2 отзыва
                                </Typography>
                                <TouchableOpacity
                                  style={orgPageStyles.filterRewiew}
                                  onPress={() =>
                                    setVisibleFilter(!visibleFilter)
                                  }>
                                  <Typography
                                    style={orgPageStyles.rewiewFilterTitle}>
                                    Сначала новые
                                  </Typography>
                                  <ArrowDown color="#8B96A3" />
                                </TouchableOpacity>
                              </View>
                              <View>
                                <Typography style={orgPageStyles.myRewiewTitle}>
                                  Ваши отзывы
                                </Typography>
                                <View style={orgPageStyles.myRewiewContainer}>
                                  <View style={orgPageStyles.myRewiewItem}>
                                    <View
                                      style={orgPageStyles.rewiewItemHeader}>
                                      <AvatarIcon />
                                      <Typography
                                        style={
                                          orgPageStyles.rewiewItemHeaderTitle
                                        }>
                                        Placeholderplaceholder
                                      </Typography>
                                    </View>
                                    <View
                                      style={orgPageStyles.rewiewItemRating}>
                                      <RatingFourIcon />
                                      <Typography
                                        style={
                                          orgPageStyles.rewiewItemRatingTitle
                                        }>
                                        01/02/3001
                                      </Typography>
                                    </View>
                                    <Typography
                                      style={orgPageStyles.rewiewDesc}>
                                      Приятная атмосфера и хорошее расположение
                                      недалеко от старого града и прочая хрень
                                      для описания бла бла текст рыба По
                                      промокоду “Полако” получите скидку 146%
                                    </Typography>
                                    {visibleComment && (
                                      <Dropdown
                                        style={{ left: 16 }}
                                        options={[
                                          {
                                            title: 'Редактировать',
                                            icon: EditCrossIcon,
                                            onPress: () =>
                                              setIsRewiew(!isRewiew),
                                          },
                                          {
                                            title: 'Удалить',
                                            icon: CrossIcon,
                                            onPress: () =>
                                              setVisibleDeleteComment(
                                                !visibleDeleteComment,
                                              ),
                                          },
                                        ]}
                                      />
                                    )}
                                  </View>
                                  <TouchableOpacity
                                    onPress={() =>
                                      setVisibleComment(!visibleComment)
                                    }>
                                    <MenuIcon />
                                  </TouchableOpacity>
                                </View>
                              </View>
                              <View style={orgPageStyles.rewiewItem}>
                                <View style={orgPageStyles.rewiewItemHeader}>
                                  <AvatarIcon />
                                  <Typography
                                    style={orgPageStyles.rewiewItemHeaderTitle}>
                                    Placeholderplaceholder
                                  </Typography>
                                </View>
                                <View style={orgPageStyles.rewiewItemRating}>
                                  <RatingFourIcon />
                                  <Typography
                                    style={orgPageStyles.rewiewItemRatingTitle}>
                                    01/02/3001
                                  </Typography>
                                </View>
                              </View>
                              <View style={orgPageStyles.rewiewItem}>
                                <View style={orgPageStyles.rewiewItemHeader}>
                                  <AvatarIcon />
                                  <Typography
                                    style={orgPageStyles.rewiewItemHeaderTitle}>
                                    Placeholderplaceholder
                                  </Typography>
                                </View>
                                <View style={orgPageStyles.rewiewItemRating}>
                                  <RatingFourIcon />
                                  <Typography
                                    style={orgPageStyles.rewiewItemRatingTitle}>
                                    01/02/3001
                                  </Typography>
                                </View>
                              </View>
                            </BottomSheetScrollView>
                          )}
                        </>
                      )}
                    </View>
                  </BottomSheet>,
                ]}
                renderItem={({ item, index }) => item}
                width={width}
                height={height}
                scrollAnimationDuration={500}
              />
            </Animated.View>
          </Container>
          <ModalMenu visible={visibleMenu} setVisible={setVisibleMenu} />
        </>
        {tabsActive === 0 && (
          <OrgBottom
            visibleMenu={visibleMenu}
            setVisibleMenu={setVisibleMenu}
          />
        )}
        {tabsActive === 1 && (
          <OrgBottomPhoto
            visibleMenu={visibleMenu}
            setVisibleMenu={setVisibleMenu}
          />
        )}
        {tabsActive === 2 && !isRewiew && (
          <OrgBottomRewiew
            visibleMenu={visibleMenu}
            setVisibleMenu={setVisibleMenu}
            onPress={() => setIsRewiew(!isRewiew)}
          />
        )}
        {isRewiew && (
          <Button
            variant="contain"
            style={orgPageStyles.buttonSend}
            onPress={() => setIsRewiew(!isRewiew)}>
            Отправить
          </Button>
        )}
      </>
      <ModalTime visible={visibleTime} setVisible={setVisibleTime} />
      <ModalFilter visible={visibleFilter} setVisible={setVisibleFilter} />
      <ModalDeleteComment
        visible={visibleDeleteComment}
        setVisible={setVisibleDeleteComment}
      />
      <ImageView
        visible={visiblePhoto}
        onRequestClose={() => setVisiblePhoto(!visiblePhoto)}
        imageIndex={imageIndex}
        images={images}
        HeaderComponent={ImageViewHeader}
      />
    </>
  );
};

export default OrgPage;
