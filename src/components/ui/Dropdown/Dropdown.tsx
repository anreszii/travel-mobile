import { View, Text, ViewStyle, Animated, Easing } from 'react-native';
import React, { useEffect, useRef } from 'react';
import dropdownStyle from './DropdownStyle';
import Button from '../Button/Button';
import Typography from '../Typography/Typography';

interface IDropdown {
  options: {
    title: string;
    icon?: ({ ...props }: { [x: string]: any }) => React.JSX.Element;
    onPress: () => void;
  }[];
  style?: ViewStyle;
}

const Dropdown: React.FC<IDropdown> = ({ options, style = {} }) => {
  const opacityContent = useRef(new Animated.Value(0.2)).current;

  useEffect(() => {
    Animated.timing(opacityContent, {
      toValue: 1,
      duration: 600,
      easing: Easing.out(Easing.exp),
      useNativeDriver: true,
    }).start();
  }, [options]);

  return (
    <Animated.View
      style={{ ...dropdownStyle.dropdown, ...style, opacity: opacityContent }}>
      {options.map((option, index) => (
        <Button variant="subcategories" onPress={option.onPress} key={index}>
          <View style={dropdownStyle.dropdownItem}>
            {option.icon && <option.icon color={'#000'} />}
            <Typography style={dropdownStyle.dropdownTitle}>
              {option.title}
            </Typography>
          </View>
        </Button>
      ))}
    </Animated.View>
  );
};

export default Dropdown;
