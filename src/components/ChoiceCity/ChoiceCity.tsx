import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';
import Header from '../../layouts/Header/Header';
import HeaderSearch from '../../layouts/HeaderSearch/HeaderSearch';
import Container from '../../layouts/Container/Container';
import Typography from '../ui/Typography/Typography';
import Button from '../ui/Button/Button';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import choiceCityStyles from './ChoiceCityStyle';

interface IChoiceCity {
  setStage: React.Dispatch<React.SetStateAction<number>>;
  setCity: React.Dispatch<React.SetStateAction<string | null>>;
  page: string;
}

const ChoiceCity: React.FC<IChoiceCity> = ({ setStage, setCity, page }) => {
  const handleSelectCity = async (city: string) => {
    await AsyncStorage.setItem(`city${page}`, city);
    setCity(city);
    setStage(1);
  };

  return (
    <Container mb={0}>
      <HeaderSearch title="Выберите город" changeStage={() => setStage(2)} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          flex: 1,
          marginTop: 24,
          marginHorizontal: 24,
          marginBottom: 72,
        }}>
        <Button
          variant="city"
          style={choiceCityStyles.countryButton}
          onPress={() => handleSelectCity('Плевля')}>
          Плевля (1234)
        </Button>
        <Button
          variant="city"
          style={choiceCityStyles.countryButton}
          onPress={() => handleSelectCity('Плевля')}>
          Плевля (1234)
        </Button>
        <Button
          variant="city"
          style={choiceCityStyles.countryButton}
          onPress={() => handleSelectCity('Плевля')}>
          Плевля (1234)
        </Button>
        <Button
          variant="city"
          style={choiceCityStyles.countryButton}
          onPress={() => handleSelectCity('Плевля')}>
          Плевля (1234)
        </Button>
        <Button
          variant="city"
          style={choiceCityStyles.countryButton}
          onPress={() => handleSelectCity('Плевля')}>
          Плевля (1234)
        </Button>
        <Button
          variant="city"
          style={choiceCityStyles.countryButton}
          onPress={() => handleSelectCity('Плевля')}>
          Плевля (1234)
        </Button>
        <Button
          variant="city"
          style={choiceCityStyles.countryButton}
          onPress={() => handleSelectCity('Плевля')}>
          Плевля (1234)
        </Button>
        <Button
          variant="city"
          style={choiceCityStyles.countryButton}
          onPress={() => handleSelectCity('Плевля')}>
          Плевля (1234)
        </Button>
        <Button
          variant="city"
          style={choiceCityStyles.countryButton}
          onPress={() => handleSelectCity('Плевля')}>
          Плевля (1234)
        </Button>
        <Button
          variant="city"
          style={choiceCityStyles.countryButton}
          onPress={() => handleSelectCity('Плевля')}>
          Плевля (1234)
        </Button>
        <Button
          variant="city"
          style={choiceCityStyles.countryButton}
          onPress={() => handleSelectCity('Плевля')}>
          Плевля (1234)
        </Button>
        <Button
          variant="city"
          style={choiceCityStyles.countryButton}
          onPress={() => handleSelectCity('Плевля')}>
          Плевля (1234)
        </Button>
      </ScrollView>
    </Container>
  );
};

export default ChoiceCity;
