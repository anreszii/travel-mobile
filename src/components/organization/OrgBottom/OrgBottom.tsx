import { View, Text } from 'react-native';
import React from 'react';
import orgBottomStyles from './OrgBottomStyle';
import Button from '../../ui/Button/Button';
import { FavoriteIcon, HeartIcon, MenuIcon, ShareIcon } from '../../../icons';

interface IOrgBottom {
  visibleMenu: boolean;
  setVisibleMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const OrgBottom: React.FC<IOrgBottom> = ({ visibleMenu, setVisibleMenu }) => {
  return (
    <View style={orgBottomStyles.content}>
      <View style={orgBottomStyles.buttonContent}>
        <Button variant="contain">На карте</Button>
      </View>
      <View style={orgBottomStyles.iconsContent}>
        <Button variant="icon" Icon={ShareIcon} style={orgBottomStyles.icon} />
        <Button variant="icon" Icon={HeartIcon} style={orgBottomStyles.icon} />
        <Button
          variant="icon"
          Icon={MenuIcon}
          style={orgBottomStyles.icon}
          onPress={() => setVisibleMenu(!visibleMenu)}
        />
      </View>
    </View>
  );
};

export default OrgBottom;
