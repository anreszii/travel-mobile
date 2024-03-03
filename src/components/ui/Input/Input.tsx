import { View, Text, Pressable, ViewStyle, TextStyle } from 'react-native';
import React, { useState } from 'react';
import inputStyles from './InputStyle';
import { TextInput, TextInputProps } from 'react-native-paper';

interface IInput extends TextInputProps {
  style?: ViewStyle;
  styleInput?: TextStyle;
  onPress?: () => void;
}

const Input: React.FC<IInput> = ({ style, styleInput, onPress, ...props }) => {
  const [focus, setFocus] = useState(false);

  return (
    <Pressable style={style} onPress={onPress && onPress}>
      <TextInput
        autoCapitalize="none"
        underlineColor="transparent"
        activeUnderlineColor="transparent"
        underlineColorAndroid="transparent"
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        placeholderTextColor="#8B96A3"
        style={[
          inputStyles.textInput,
          styleInput,
          focus && { borderColor: '#5379F6' },
        ]}
        {...props}
      />
    </Pressable>
  );
};

export default Input;
