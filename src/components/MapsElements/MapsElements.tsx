import { View, Text, ScrollView, Image } from 'react-native';
import React from 'react';
import Typography from '../ui/Typography/Typography';
import mapsElementsStyles from './MapsElementsStyle';
import { RatingIcon } from '../../icons';

const MapsElements = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={mapsElementsStyles.content}>
      {Array.from({ length: 3 }).map((_, index) => (
        <View style={mapsElementsStyles.orgItem} key={index}>
          <View
            style={{
              height: 4,
              backgroundColor: '#D5DDE7',
              borderRadius: 12,
              width: 28,
              marginBottom: 12,
            }}
          />
          <View style={mapsElementsStyles.orgItemContainer}>
            <View style={mapsElementsStyles.orgItemContent}>
              <Typography style={mapsElementsStyles.title}>
                Coffee Novi
              </Typography>
              <View style={mapsElementsStyles.row}>
                <RatingIcon />
                <Typography style={mapsElementsStyles.scoreTitle}>
                  4.8
                </Typography>
                <Typography style={mapsElementsStyles.scoreSubtitle}>
                  (124)
                </Typography>
              </View>
              <Typography style={mapsElementsStyles.timeTitle}>
                Открыто до 99:99
              </Typography>
            </View>
            <Image
              source={require('../../../assets/photo.png')}
              width={80}
              height={80}
            />
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default MapsElements;
