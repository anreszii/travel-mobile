import { View, Text } from 'react-native';
import React from 'react';
import statCardStyles from './StatCardStyle';
import Typography from '../../../ui/Typography/Typography';

const StatCard = () => {
  return (
    <View style={statCardStyles.container}>
      <View style={statCardStyles.content}>
        <View style={statCardStyles.views}>
          <Typography style={statCardStyles.title}>999999</Typography>
          <Typography style={statCardStyles.subtitle}>Просмотров</Typography>
        </View>
        <View style={statCardStyles.clicks}>
          <Typography style={statCardStyles.title}>888888</Typography>
          <Typography style={statCardStyles.subtitle}>Кликов</Typography>
        </View>
      </View>
    </View>
  );
};

export default StatCard;
