import { View, Text, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import { infoCategories } from '../../../_mock/infoCategories';
import { ArrowDown, ArrowUp } from '../../../icons';
import Typography from '../Typography/Typography';
import accordionProfileStyles from './AccordionProfileStyle';
import { useNavigation } from '@react-navigation/native';

interface IElement {
  title: string;
  icon: ({ ...props }: { [x: string]: any }) => React.JSX.Element;
  onPress: () => void;
}

interface IData {
  title: string;
  icon: ({ ...props }: { [x: string]: any }) => React.JSX.Element;
  elements: IElement[];
  open: boolean;
}

interface IAccordionProfile {
  items: IData[];
}

const AccordionProfile: React.FC<IAccordionProfile> = ({ items }) => {
  const [data, setData] = useState<IData[]>([]);

  const navigation = useNavigation<any>();

  useEffect(() => {
    setData(items);
  }, []);

  const handleChangeOpen = (title: string) => {
    data[data.findIndex(el => el.title === title)].open =
      !data[data.findIndex(el => el.title === title)].open;
    setData([...data]);
  };

  return (
    <View>
      {items.map((item, index) => (
        <View
          key={index}
          style={{
            ...accordionProfileStyles.accordion,
            ...(index + 1 === items.length && { marginBottom: 24 }),
          }}>
          <View>
            <Button
              variant="subcategories"
              onPress={() => handleChangeOpen(item.title)}>
              <View style={accordionProfileStyles.headerContent}>
                <item.icon />
                <Typography style={accordionProfileStyles.title}>
                  {item.title}
                </Typography>
              </View>
              {item.open ? <ArrowUp /> : <ArrowDown />}
            </Button>
          </View>
          {item.open && (
            <View style={accordionProfileStyles.categoryContainer}>
              {item.elements.map((el, index) => (
                <Button
                  variant="subcategories"
                  style={accordionProfileStyles.category}
                  key={index}
                  onPress={el.onPress}>
                  <View style={accordionProfileStyles.categoryButton}>
                    <el.icon />
                    <Typography style={accordionProfileStyles.categoryTitle}>
                      {el.title}
                    </Typography>
                  </View>
                </Button>
              ))}
            </View>
          )}
        </View>
      ))}
    </View>
  );
};

export default AccordionProfile;
