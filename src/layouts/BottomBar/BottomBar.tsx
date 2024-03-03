import React, { useContext, useState, useEffect, useRef } from 'react';
import Typography from '../../components/ui/Typography/Typography';
import bottomBarStyles from './BottomBarStyle';
import { FavoriteIcon, InfoIcon, OtherIcon, PartnersIcon } from '../../icons';
import { BottomBarContext } from '../../providers/BottomBarProvider';
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';

const BottomBar: React.FC = () => {
  const { isVisible, setIsVisible } = useContext(BottomBarContext);
  const routes = [
    { name: 'Partners' },
    { name: 'Info' },
    { name: 'Favorite' },
    { name: 'Other' },
  ];
  const [focused, setFocused] = useState(routes[0].name);
  const navigation = useNavigation<any>();
  const route = useRoute();

  const handleChangeScreen = (routeName: string) => {
    navigation.navigate(routeName);
  };

  useFocusEffect(() => {
    setFocused(route.name);
  });

  return (
    <View
      style={{
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'transparent',
      }}>
      {isVisible && (
        <SafeAreaView style={bottomBarStyles.container}>
          {routes.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={bottomBarStyles.button}
                activeOpacity={0.1}
                onPress={() => {
                  handleChangeScreen(item.name);
                }}>
                {item.name === 'Partners' && (
                  <PartnersIcon focus={item.name === focused} />
                )}
                {item.name === 'Info' && (
                  <InfoIcon focus={item.name === focused} />
                )}
                {item.name === 'Favorite' && (
                  <FavoriteIcon focus={item.name === focused} />
                )}
                {item.name === 'Other' && (
                  <OtherIcon focus={item.name === focused} />
                )}
                <Typography
                  style={
                    item.name === focused
                      ? bottomBarStyles.titleActive
                      : bottomBarStyles.titleNonActive
                  }>
                  {item.name === 'Partners' && 'Партнеры'}
                  {item.name === 'Info' && 'Инфо'}
                  {item.name === 'Favorite' && 'Избранное'}
                  {item.name === 'Other' && 'Еще'}
                </Typography>
              </TouchableOpacity>
            );
          })}
        </SafeAreaView>
      )}
    </View>
  );
};

export default BottomBar;
