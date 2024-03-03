import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';
import Header from '../../layouts/Header/Header';
import HeaderSearch from '../../layouts/HeaderSearch/HeaderSearch';
import Container from '../../layouts/Container/Container';
import Typography from '../ui/Typography/Typography';
import Button from '../ui/Button/Button';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import choiceCountryStyles from './ChoiceCountryStyle';

interface IChoiceCountry {
  setStage: React.Dispatch<React.SetStateAction<number>>;
  setCountry: React.Dispatch<React.SetStateAction<string | null>>;
  page: string;
}

const ChoiceCountry: React.FC<IChoiceCountry> = ({
  setStage,
  setCountry,
  page,
}) => {
  const handleSelectCountry = async (country: string) => {
    await AsyncStorage.setItem(`country${page}`, country);
    setCountry(country);
    setStage(3);
  };

  return (
    <Container mb={0}>
      <HeaderSearch title="Выберите страну" changeStage={() => setStage(1)} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          flex: 1,
          marginTop: 24,
          marginHorizontal: 24,
          marginBottom: 72,
        }}>
        <Button
          variant="country"
          style={choiceCountryStyles.countryButton}
          onPress={() => handleSelectCountry('Албания')}>
          🇦🇱 Албания
        </Button>
        <Button
          variant="country"
          style={choiceCountryStyles.countryButton}
          onPress={() => handleSelectCountry('Албания')}>
          🇵🇱 Польша
        </Button>
        <Button
          variant="country"
          style={choiceCountryStyles.countryButton}
          onPress={() => handleSelectCountry('Албания')}>
          🇫🇮 Финляндия
        </Button>
        <Button
          variant="country"
          style={choiceCountryStyles.countryButton}
          onPress={() => handleSelectCountry('Албания')}>
          🇫🇷 Франция
        </Button>
        <Button
          variant="country"
          style={choiceCountryStyles.countryButton}
          onPress={() => handleSelectCountry('Албания')}>
          🇸🇰 Словакия
        </Button>
        <Button
          variant="country"
          style={choiceCountryStyles.countryButton}
          onPress={() => handleSelectCountry('Албания')}>
          🇷🇸 Сербия
        </Button>
        <Button
          variant="country"
          style={choiceCountryStyles.countryButton}
          onPress={() => handleSelectCountry('Албания')}>
          🇱🇹 Литва
        </Button>
        <Button
          variant="country"
          style={choiceCountryStyles.countryButton}
          onPress={() => handleSelectCountry('Албания')}>
          🇱🇻 Латвия
        </Button>
        <Button
          variant="country"
          style={choiceCountryStyles.countryButton}
          onPress={() => handleSelectCountry('Албания')}>
          🇦🇱 Албания
        </Button>
        <Button
          variant="country"
          style={choiceCountryStyles.countryButton}
          onPress={() => handleSelectCountry('Албания')}>
          🇵🇱 Польша
        </Button>
        <Button
          variant="country"
          style={choiceCountryStyles.countryButton}
          onPress={() => handleSelectCountry('Албания')}>
          🇫🇮 Финляндия
        </Button>
        <Button
          variant="country"
          style={choiceCountryStyles.countryButton}
          onPress={() => handleSelectCountry('Албания')}>
          🇫🇷 Франция
        </Button>
        <Button
          variant="country"
          style={choiceCountryStyles.countryButton}
          onPress={() => handleSelectCountry('Албания')}>
          🇱🇻 Латвия
        </Button>
      </ScrollView>
    </Container>
  );
};

export default ChoiceCountry;
