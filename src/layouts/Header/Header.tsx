import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import Typography from '../../components/ui/Typography/Typography';
import { BackIcon, MenuIcon, ReportIcon } from '../../icons';
import { useNavigation } from '@react-navigation/native';
import headerStyles from './HeaderStyle';
import Button from '../../components/ui/Button/Button';
import Dropdown from '../../components/ui/Dropdown/Dropdown';

interface IHeader {
  title: string;
  icon?: React.ReactNode;
  changeStage?: () => void;
  menu?: boolean;
  onPressMenu?: () => void;
}

const Header: React.FC<IHeader> = ({
  title,
  icon,
  changeStage,
  menu,
  onPressMenu,
}) => {
  const [visible, setVisible] = useState(false);

  const navigation = useNavigation<any>();

  const handlePressMenu = () => {
    onPressMenu && onPressMenu;
    setVisible(!visible);
  };

  return (
    <SafeAreaView style={headerStyles.container}>
      <View style={headerStyles.content}>
        <View style={headerStyles.titleContent}>
          {icon !== undefined ? (
            <>{icon}</>
          ) : (
            <Button
              onPress={!!changeStage ? changeStage : () => navigation.goBack()}
              variant="icon"
              Icon={BackIcon}
            />
          )}
          <Typography style={headerStyles.title}>{title}</Typography>
        </View>
        {menu && (
          <View>
            <Button
              variant="icon"
              Icon={MenuIcon}
              onPress={() => handlePressMenu()}></Button>
            {visible && (
              <Dropdown
                options={[
                  {
                    title: 'Неверная информация',
                    icon: ReportIcon,
                    onPress: () => {
                      navigation.navigate('IncorrectInfo');
                      setVisible(!visible);
                    },
                  },
                ]}
              />
            )}
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Header;
