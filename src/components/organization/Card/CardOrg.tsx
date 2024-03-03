import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import React from 'react';
import cardOrgStyles from './CardOrgStyle';
import Typography from '../../ui/Typography/Typography';
import { HeartIcon, RatingIcon } from '../../../icons';

interface ICardOrg extends TouchableOpacityProps {
  title: string;
  subtitle: string;
  focus: boolean;
}

const CardOrg: React.FC<ICardOrg> = ({ title, subtitle, focus, ...props }) => {
  return (
    <View style={cardOrgStyles.container}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ borderRadius: 12 }}>
        <Image
          source={require('../../../../assets/photo.png')}
          style={cardOrgStyles.image}
          resizeMode="contain"
        />
        <Image
          source={require('../../../../assets/picframe.png')}
          style={cardOrgStyles.image}
        />
        <Image
          source={require('../../../../assets/picframe2.png')}
          style={cardOrgStyles.image}
        />
        <Image
          source={require('../../../../assets/picframe3.png')}
          style={cardOrgStyles.image}
        />
      </ScrollView>
      <TouchableOpacity activeOpacity={1} {...props}>
        <Typography style={cardOrgStyles.title}>{title}</Typography>
        <Typography style={cardOrgStyles.subtitle}>{subtitle}</Typography>
        <View style={cardOrgStyles.ratingContent}>
          <View style={cardOrgStyles.rating}>
            <RatingIcon />
            <Typography style={cardOrgStyles.ratingTitle}>4.8</Typography>
            <Typography style={cardOrgStyles.ratingSubtitle}>
              (124 оценки)
            </Typography>
          </View>
          <TouchableOpacity style={{ paddingRight: 12 }}>
            <HeartIcon focus={focus} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CardOrg;
