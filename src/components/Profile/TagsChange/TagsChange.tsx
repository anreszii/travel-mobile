import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Container from '../../../layouts/Container/Container';
import tagsChangeStyles from './TagsChangeStyle';
import { CrossCheckmarkIcon } from '../../../icons';

const TagsChange = () => {
  const [tags, setTags] = useState([{ value: '' }]);

  const handleInputChange = (index: number) => (text: string) => {
    const newTags = [...tags];
    newTags[index].value = text;
    if (text.endsWith(' ')) {
      newTags.push({
        value: '',
      });
      setTags(newTags);
    } else {
      setTags(newTags);
    }
  };

  const handleBackspacePress = (index: number) => {
    if (index > 0 && tags[index].value === '') {
      const newTags = [...tags];
      newTags.splice(index, 1);
      setTags(newTags);
    }
  };

  const handleDeleteTag = (index: number) => {
    if (index > 0) {
      const newTags = [...tags];
      newTags.splice(index, 1);
      setTags(newTags);
    }
  };

  return (
    <Container>
      <View style={tagsChangeStyles.content}>
        <View style={tagsChangeStyles.header}>
          <Text style={tagsChangeStyles.headerTitle}>
            Для оптимизации поисковой выдачи введите тэги для этой организации.
            Вводите тэги с маленькой буквы, без пробела. Например:{' '}
            <Text style={tagsChangeStyles.headerTags}>
              “кофессобой”, “можносживотными”, “тольконаличные”
            </Text>
          </Text>
        </View>
        <View style={tagsChangeStyles.tagsContent}>
          {tags.map((tag, index) => (
            <View key={index}>
              <TouchableOpacity
                style={{ zIndex: 1000 }}
                onPress={() => handleDeleteTag(index)}>
                <CrossCheckmarkIcon style={tagsChangeStyles.crossIcon} />
              </TouchableOpacity>
              <TextInput
                style={tagsChangeStyles.inputTags}
                onChangeText={handleInputChange(index)}
                onKeyPress={({ nativeEvent }) => {
                  if (nativeEvent.key === 'Backspace') {
                    handleBackspacePress(index);
                  }
                }}
                autoFocus={index === tags.length - 1}
              />
            </View>
          ))}
        </View>
      </View>
    </Container>
  );
};

export default TagsChange;
