import { View, Text, StyleSheet, TextStyle, TextProps } from 'react-native';
import React from 'react';
import typographyStyles from './TypographyStyle';

interface ITypography extends TextProps {
  children: React.ReactNode;
  style?: TextStyle;
}

const Typography: React.FC<ITypography> = ({ children, style, ...props }) => {
  return (
    <Text
      style={[typographyStyles.text, style, { fontFamily: 'Manrope-Medium' }]}
      {...props}>
      {children}
    </Text>
  );
};

export default Typography;
