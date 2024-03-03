import { View, Text, ViewStyle, TouchableOpacityProps } from 'react-native';
import React from 'react';
import Button from '../../ui/Button/Button';
import Typography from '../../ui/Typography/Typography';
import { ArrowRight } from '../../../icons';
import buttonSubStyles from './ButtonSubStyle';

interface IButtonSubCategories extends TouchableOpacityProps {
  title: string;
  style?: ViewStyle;
}

const ButtonSubCategories: React.FC<IButtonSubCategories> = ({
  title,
  style,
  ...props
}) => {
  return (
    <Button variant="subcategories" style={style} {...props}>
      <Typography style={buttonSubStyles.title}>{title}</Typography>
      <ArrowRight />
    </Button>
  );
};

export default ButtonSubCategories;
