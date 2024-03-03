import { View, Text, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import { infoCategories } from '../../../_mock/infoCategories';
import { ArrowDown, ArrowUp } from '../../../icons';
import Typography from '../Typography/Typography';
import accordionStyles from './AccordionStyle';
import { useNavigation } from '@react-navigation/native';

interface IElement {
  title: string;
  icon: ({ ...props }: { [x: string]: any }) => React.JSX.Element;
}

interface IData {
  title: string;
  elements: IElement[];
  open: boolean;
}

interface IAccordion {
  items: IData[];
}

const Accordion: React.FC<IAccordion> = ({ items }) => {
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
    <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
      {items.map((item, index) => (
        <View
          key={index}
          style={{
            ...accordionStyles.accordion,
            ...(index + 1 === items.length && { marginBottom: 96 }),
          }}>
          <View>
            <Button
              variant="subcategories"
              onPress={() => handleChangeOpen(item.title)}>
              <Typography style={accordionStyles.title}>
                {item.title}
              </Typography>
              {item.open ? <ArrowUp /> : <ArrowDown />}
            </Button>
          </View>
          {item.open && (
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={accordionStyles.categoryContainer}>
              {item.elements.map((el, index) => (
                <Button
                  variant="category"
                  style={accordionStyles.category}
                  key={index}
                  onPress={() =>
                    navigation.navigate('CategoryInfo', { title: el.title })
                  }>
                  <el.icon />
                  <Typography style={accordionStyles.categoryTitle}>
                    {el.title}
                  </Typography>
                </Button>
              ))}
            </ScrollView>
          )}
        </View>
      ))}
    </ScrollView>
  );
};

export default Accordion;
