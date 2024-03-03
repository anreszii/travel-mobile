import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import Button from '../../ui/Button/Button';
import choiceCityStyles from '../../ChoiceCity/ChoiceCityStyle';

interface IChoiceEditCity {
  setStage: React.Dispatch<React.SetStateAction<number>>;
}

const ChoiceEditCity: React.FC<IChoiceEditCity> = ({ setStage }) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ flex: 1, marginTop: 24, marginHorizontal: 24 }}>
      <Button
        variant="city"
        style={choiceCityStyles.countryButton}
        onPress={() => setStage(1)}>
        Плевля (1234)
      </Button>
      <Button
        variant="city"
        style={choiceCityStyles.countryButton}
        onPress={() => setStage(1)}>
        Плевля (1234)
      </Button>
      <Button
        variant="city"
        style={choiceCityStyles.countryButton}
        onPress={() => setStage(1)}>
        Плевля (1234)
      </Button>
      <Button
        variant="city"
        style={choiceCityStyles.countryButton}
        onPress={() => setStage(1)}>
        Плевля (1234)
      </Button>
      <Button
        variant="city"
        style={choiceCityStyles.countryButton}
        onPress={() => setStage(1)}>
        Плевля (1234)
      </Button>
      <Button
        variant="city"
        style={choiceCityStyles.countryButton}
        onPress={() => setStage(1)}>
        Плевля (1234)
      </Button>
      <Button
        variant="city"
        style={choiceCityStyles.countryButton}
        onPress={() => setStage(1)}>
        Плевля (1234)
      </Button>
      <Button
        variant="city"
        style={choiceCityStyles.countryButton}
        onPress={() => setStage(1)}>
        Плевля (1234)
      </Button>
      <Button
        variant="city"
        style={choiceCityStyles.countryButton}
        onPress={() => setStage(1)}>
        Плевля (1234)
      </Button>
      <Button
        variant="city"
        style={choiceCityStyles.countryButton}
        onPress={() => setStage(1)}>
        Плевля (1234)
      </Button>
      <Button
        variant="city"
        style={choiceCityStyles.countryButton}
        onPress={() => setStage(1)}>
        Плевля (1234)
      </Button>
      <Button
        variant="city"
        style={choiceCityStyles.countryButton}
        onPress={() => setStage(1)}>
        Плевля (1234)
      </Button>
    </ScrollView>
  );
};

export default ChoiceEditCity;
