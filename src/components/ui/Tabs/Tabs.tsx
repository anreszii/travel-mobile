import { View, Text, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import tabsStyles from './TabsStyle';
import Typography from '../Typography/Typography';
import Animated from 'react-native-reanimated';

interface Tabs {
  title: string;
  focus: boolean;
}

interface ITabs {
  tabs: Tabs[];
  setTabs: React.Dispatch<React.SetStateAction<Tabs[]>>;
  onChangeTab?: () => void;
}

const Tabs: React.FC<ITabs> = ({ tabs, setTabs, onChangeTab }) => {
  const handleChangeTab = (title: string) => {
    tabs[tabs.findIndex(el => el.focus === true)].focus = false;
    tabs[tabs.findIndex(el => el.title === title)].focus = true;
    setTabs([...tabs]);
    onChangeTab && onChangeTab();
  };

  return (
    <View style={tabsStyles.container}>
      {tabs.map((item, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={1}
          style={
            item.focus
              ? index + 1 === tabs.length
                ? {
                    ...tabsStyles.tabItemActive,
                    width: '49%',
                    marginRight: 2.5,
                  }
                : { ...tabsStyles.tabItemActive, marginLeft: 3 }
              : tabsStyles.tabItemInActive
          }
          onPress={() => handleChangeTab(item.title)}>
          <Typography
            style={
              item.focus
                ? tabsStyles.tabTitleActive
                : tabsStyles.tabTitleInActive
            }>
            {item.title}
          </Typography>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Tabs;
