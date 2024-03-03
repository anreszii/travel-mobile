import { View, Text } from 'react-native';
import React, { useState } from 'react';
import ratingStyles from './RatingStyle';
import Typography from '../../../ui/Typography/Typography';
import { RatingIcon, StarIcon } from '../../../../icons';

const Rating = () => {
  return (
    <View style={ratingStyles.content}>
      <View style={ratingStyles.header}>
        <Typography style={ratingStyles.title}>4.8</Typography>
        <RatingIcon />
      </View>
      <Typography style={ratingStyles.subtitle}>Ваша оценка</Typography>
      <View style={ratingStyles.starsContent}>
        {Array.from({ length: 5 }).map((_, index) => (
          <StarIcon key={index} style={ratingStyles.star} />
        ))}
      </View>
    </View>
  );
};

export default Rating;
