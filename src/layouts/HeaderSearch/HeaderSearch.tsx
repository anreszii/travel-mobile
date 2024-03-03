import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React, { useRef, useState } from 'react';
import Typography from '../../components/ui/Typography/Typography';
import { BackIcon, SearchIcon } from '../../icons';
import { useNavigation } from '@react-navigation/native';
import headerSearchStyles from './HeaderSearchStyle';
import Button from '../../components/ui/Button/Button';

interface IHeaderSearch {
  title: string;
  icon?: React.ReactNode;
  changeStage?: () => void;
  back?: boolean;
}

const HeaderSearch: React.FC<IHeaderSearch> = ({
  title,
  icon,
  changeStage,
  back = true,
}) => {
  const [isSearch, setIsSearch] = useState(false);
  const [isPress, setIsPress] = useState(false);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={headerSearchStyles.container}>
      <View style={headerSearchStyles.content}>
        <View style={headerSearchStyles.backContent}>
          {icon !== undefined ? (
            <View style={headerSearchStyles.backIcon}>{icon}</View>
          ) : (
            <>
              {back && (
                <Button
                  onPress={
                    !!changeStage ? changeStage : () => navigation.goBack()
                  }
                  style={headerSearchStyles.backIcon}
                  variant="icon"
                  Icon={BackIcon}
                />
              )}
            </>
          )}
          {isSearch ? (
            <TextInput
              style={headerSearchStyles.input}
              placeholder="Поиск"
              autoCapitalize="none"
            />
          ) : (
            <Typography style={headerSearchStyles.title}>{title}</Typography>
          )}
        </View>
        <Button
          variant="icon"
          onPress={() => setIsSearch(!isSearch)}
          Icon={SearchIcon}
        />
      </View>
    </SafeAreaView>
  );
};

export default HeaderSearch;
