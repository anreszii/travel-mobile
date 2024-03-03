import { View, Text, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { Categories } from '../../../_mock/categories';
import Button from '../../ui/Button/Button';
import Typography from '../../ui/Typography/Typography';
import partnersStyles from '../../../screens/Partners/PartnersStyle';
import { ArrowRight } from '../../../icons';
import { Subcategories } from '../../../_mock/subcategories';
import ButtonSubCategories from '../../categories/ButtonSub/ButtonSubCategories';
import subCategoriesStyles from '../../../screens/SubCategories/SubCategoriesStyle';

interface IChoiceCategory {
  setStage: React.Dispatch<React.SetStateAction<number>>;
}

const ChoiceCategory: React.FC<IChoiceCategory> = ({ setStage }) => {
  const [progress, setProgress] = useState(1);

  return (
    <View style={{ flex: 1 }}>
      {progress === 1 && (
        <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
          {Categories.map((item, index) => (
            <Button
              variant="category"
              key={item.name}
              //@ts-ignore
              style={{
                ...(index + 1 === Categories.length
                  ? {
                      marginBottom: 24,
                      marginTop: 24,
                      marginHorizontal: 12,
                    }
                  : { marginTop: 24, marginHorizontal: 12 }),
              }}
              onPress={() => setProgress(2)}>
              <View style={partnersStyles.rowBetween}>
                <View style={partnersStyles.row}>
                  <item.icon />
                  <Typography style={partnersStyles.buttonTitle}>
                    {item.name}
                  </Typography>
                </View>
                <ArrowRight />
              </View>
            </Button>
          ))}
        </ScrollView>
      )}
      {progress === 2 && (
        <ScrollView>
          {Subcategories.map((item, index) => (
            <ButtonSubCategories
              title={item.title}
              key={index}
              //@ts-ignore
              style={[
                subCategoriesStyles.sub,
                index === 0 ? subCategoriesStyles.firstSub : {},
              ]}
              onPress={() => setStage(1)}
            />
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default ChoiceCategory;
