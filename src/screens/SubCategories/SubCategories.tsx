import { View, Text, ScrollView, StyleSheet, Animated } from 'react-native';
import React, { useRef } from 'react';
import HeaderSearch from '../../layouts/HeaderSearch/HeaderSearch';
import Container from '../../layouts/Container/Container';
import ButtonSubCategories from '../../components/categories/ButtonSub/ButtonSubCategories';
import { useNavigation } from '@react-navigation/native';
import { Subcategories } from '../../_mock/subcategories';
import subCategoriesStyles from './SubCategoriesStyle';

interface ISubCategories {
  route?: any;
  category: string;
  setStage: React.Dispatch<React.SetStateAction<number>>;
  setSubCategory: React.Dispatch<React.SetStateAction<string>>;
}

const SubCategories: React.FC<ISubCategories> = ({
  route,
  category,
  setStage,
  setSubCategory,
}) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  const animateContent = () => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const handleSelectSubcategory = (title: string) => {
    animateContent();
    setSubCategory(title);
    setTimeout(() => {
      setStage(5);
    }, 100);
  };

  return (
    <Container>
      <HeaderSearch title={category} changeStage={() => setStage(3)} />
      <Animated.ScrollView
        style={{
          opacity: animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0],
          }),
          transform: [
            {
              translateX: animatedValue.interpolate({
                inputRange: [0, 1],
                outputRange: [0, -100],
              }),
            },
            {
              translateY: animatedValue.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 50],
              }),
            },
          ],
        }}>
        {Subcategories.map((item, index) => (
          <ButtonSubCategories
            title={item.title}
            key={index}
            //@ts-ignore
            style={[
              subCategoriesStyles.sub,
              index === 0 ? subCategoriesStyles.firstSub : {},
            ]}
            onPress={() => handleSelectSubcategory(item.title)}
          />
        ))}
      </Animated.ScrollView>
    </Container>
  );
};

export default SubCategories;
