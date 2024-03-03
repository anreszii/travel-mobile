import { View, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import Typography from '../../components/ui/Typography/Typography';
import { BackIcon, SearchIcon } from '../../icons';
import { useNavigation } from '@react-navigation/native';
import headerTabsStyles from './HeaderTabsStyle';
import Tab from '../../components/ui/Tabs/Tabs';
import Button from '../../components/ui/Button/Button';

interface Tabs {
  title: string;
  focus: boolean;
}

interface IHeaderTabs {
  title: string;
  icon?: React.ReactNode;
  changeStage?: () => void;
  tabs: Tabs[];
  setTabs: React.Dispatch<React.SetStateAction<Tabs[]>>;
  search?: boolean;
  onChangeTab?: () => void;
}

const HeaderTabs: React.FC<IHeaderTabs> = ({
  title,
  icon,
  changeStage,
  tabs,
  setTabs,
  search,
  onChangeTab,
}) => {
  const [isSearch, setIsSearch] = useState(false);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={headerTabsStyles.container}>
      <View style={headerTabsStyles.content}>
        <View style={headerTabsStyles.backContent}>
          {icon !== undefined ? (
            <>{icon}</>
          ) : (
            <Button
              onPress={!!changeStage ? changeStage : () => navigation.goBack()}
              variant="icon"
              Icon={BackIcon}
            />
          )}
          {isSearch ? (
            <TextInput
              style={headerTabsStyles.input}
              placeholder="Поиск"
              autoCapitalize="none"
            />
          ) : (
            <Typography style={headerTabsStyles.title}>{title}</Typography>
          )}
        </View>
        {search !== false && (
          <Button
            onPress={() => setIsSearch(!isSearch)}
            variant="icon"
            Icon={SearchIcon}
          />
        )}
      </View>
      <View style={headerTabsStyles.tabsContent}>
        <Tab tabs={tabs} setTabs={setTabs} onChangeTab={onChangeTab} />
      </View>
    </SafeAreaView>
  );
};

export default HeaderTabs;
