import {
  View,
  Text,
  ViewStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  TouchableHighlight,
  Dimensions,
  Pressable,
} from 'react-native';
import React, { useState } from 'react';
import Typography from '../Typography/Typography';
import { Shadow } from 'react-native-neomorph-shadows';
import buttonStyles from './ButtonStyle';

interface IButton extends TouchableOpacityProps {
  children?: React.ReactNode;
  variant:
    | 'contain'
    | 'outline'
    | 'category'
    | 'country'
    | 'city'
    | 'subcategories'
    | 'icon'
    | 'iconDark';
  style?: ViewStyle;
  Icon?: ({ ...props }: { [x: string]: any }) => React.JSX.Element;
}

const Button: React.FC<IButton> = ({
  children,
  variant,
  style,
  Icon,
  ...props
}) => {
  const [isPressed, setIsPressed] = useState(false);

  const onButtonPress = () => {
    setIsPressed(true);
  };

  const onButtonRelease = () => {
    setIsPressed(false);
  };

  switch (variant) {
    case 'contain':
      return (
        <TouchableOpacity
          activeOpacity={1}
          onPressIn={onButtonPress}
          onPressOut={onButtonRelease}
          style={
            !isPressed
              ? { ...buttonStyles.contain, ...style }
              : { ...buttonStyles.containPressed, ...style }
          }
          {...props}>
          <Typography
            style={
              !isPressed
                ? buttonStyles.textContain
                : buttonStyles.textContainPressed
            }>
            {children}
          </Typography>
        </TouchableOpacity>
      );
    case 'outline':
      return (
        <TouchableOpacity
          style={{ ...buttonStyles.outline, ...style }}
          {...props}>
          <Typography style={buttonStyles.textOutline}>{children}</Typography>
        </TouchableOpacity>
      );
    case 'category':
      return (
        <>
          {isPressed ? (
            <TouchableOpacity
              onPressIn={onButtonPress}
              onPressOut={onButtonRelease}
              activeOpacity={1}
              {...props}>
              <Shadow
                inner
                useArt
                //@ts-ignore
                style={{ ...buttonStyles.categoryActive, ...style }}>
                {children}
              </Shadow>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPressIn={onButtonPress}
              onPressOut={onButtonRelease}
              activeOpacity={1}
              {...props}>
              <View style={{ ...buttonStyles.category, ...style }}>
                {children}
              </View>
            </TouchableOpacity>
          )}
        </>
      );
    case 'country':
      return (
        <TouchableHighlight
          style={[buttonStyles.country, style]}
          underlayColor="#E8EBF9"
          activeOpacity={0.6}
          onPress={() => {}}
          {...props}>
          <Typography style={buttonStyles.textCountry}>{children}</Typography>
        </TouchableHighlight>
      );
    case 'city':
      return (
        <TouchableHighlight
          style={[buttonStyles.city, style]}
          underlayColor="#E8EBF9"
          activeOpacity={0.6}
          onPress={() => {}}
          {...props}>
          <Typography style={buttonStyles.textCity}>{children}</Typography>
        </TouchableHighlight>
      );
    case 'subcategories':
      return (
        <TouchableHighlight
          style={[style, { borderRadius: 25 }]}
          underlayColor="#E8EBF9"
          activeOpacity={1}
          onPress={() => {}}
          {...props}>
          <View style={buttonStyles.subcategoriesContent}>{children}</View>
        </TouchableHighlight>
      );
    case 'icon':
      return (
        <TouchableHighlight
          style={[style, { borderRadius: 16 }, buttonStyles.iconContent]}
          underlayColor="#E8EBF9"
          activeOpacity={1}
          onPressIn={onButtonPress}
          onPressOut={onButtonRelease}
          {...props}>
          {Icon && <Icon color={isPressed && '#1374F3'} />}
        </TouchableHighlight>
      );
    case 'iconDark':
      return (
        <TouchableHighlight
          style={[style, { borderRadius: 16 }, buttonStyles.iconContent]}
          underlayColor="#272E3B"
          activeOpacity={1}
          onPressIn={onButtonPress}
          onPressOut={onButtonRelease}
          {...props}>
          {Icon && <Icon color={isPressed ? '#1374F3' : '#fff'} />}
        </TouchableHighlight>
      );
  }
};

export default Button;
