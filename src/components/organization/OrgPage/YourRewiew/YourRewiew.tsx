import { View, Text } from 'react-native';
import React from 'react';
import yourRewiewStyles from './YourRewiewStyle';
import { StarIcon } from '../../../../icons';

const YourRewiew = () => {
  return (
    <View style={yourRewiewStyles.content}>
      <View style={yourRewiewStyles.starsContent}>
        {Array.from({ length: 5 }).map((_, index) => (
          <StarIcon key={index} style={yourRewiewStyles.star} />
        ))}
      </View>
    </View>
  );
};

export default YourRewiew;
