import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Typography from '../../components/ui/Typography/Typography';
import Button from '../../components/ui/Button/Button';
import Container from '../../layouts/Container/Container';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HeaderSearch from '../../layouts/HeaderSearch/HeaderSearch';
import { ArrowRight, FlagIcon } from '../../icons';
import ChoiceCountry from '../../components/ChoiceCountry/ChoiceCountry';
import ChoiceCity from '../../components/ChoiceCity/ChoiceCity';
import { Categories } from '../../_mock/categories';
import partnersStyles from './PartnersStyle';
import ListPartners from '../ListPartners/ListPartners';
import SubCategories from '../SubCategories/SubCategories';
import BottomBar from '../../layouts/BottomBar/BottomBar';

const Partners: React.FC = ({ route }: any) => {
  const [country, setCountry] = useState<string | null>('');
  const [city, setCity] = useState<string | null>('');
  const [stage, setStage] = useState(1);
  const [category, setCategory] = useState<string>('');
  const [subCategory, setSubCategory] = useState<string>('');

  useEffect(() => {
    const getData = async () => {
      setCountry(await AsyncStorage.getItem('countryPartners'));
      setCity(await AsyncStorage.getItem('cityPartners'));
    };

    getData();
  }, [stage]);

  const handleSelectCategory = (title: string) => {
    if (
      title === 'Операции с недвижимостью' ||
      title === 'Страхование' ||
      title === 'Иммиграционные услуги'
    ) {
    } else {
      setCategory(title);
      setStage(4);
    }
  };

  return (
    <>
      <Container>
        {!!city && !!country && !(stage > 3) ? (
          <View style={{ flex: 1 }}>
            <HeaderSearch icon={<FlagIcon />} title={country} />
            <View style={{ flex: 1 }}>
              <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ flex: 1 }}>
                {Categories.map((item, index) => (
                  <Button
                    variant="category"
                    key={item.name}
                    style={{
                      ...(index + 1 === Categories.length
                        ? {
                            marginBottom: 96,
                            marginTop: 24,
                            marginHorizontal: 12,
                          }
                        : { marginTop: 24, marginHorizontal: 12 }),
                    }}
                    onPress={() => handleSelectCategory(item.name)}>
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
            </View>
          </View>
        ) : (
          <>
            {stage === 1 && (
              <SafeAreaView style={{ marginBottom: 96 }}>
                <View style={partnersStyles.content}>
                  <View>
                    <Typography style={partnersStyles.title}>nomad</Typography>
                    <Image
                      source={require('../../../assets/welcome.png')}
                      style={partnersStyles.image}
                      resizeMode="contain"
                    />
                    <Typography style={partnersStyles.subtitle}>
                      Находите лучших специалистов в Вашем городе и участвуйте в
                      бонусной программе
                    </Typography>
                  </View>
                  <Button variant="contain" onPress={() => setStage(2)}>
                    Выберите город
                  </Button>
                </View>
              </SafeAreaView>
            )}
            {stage === 2 && (
              <ChoiceCountry
                setStage={setStage}
                setCountry={setCountry}
                page="Partners"
              />
            )}
            {stage === 3 && (
              <ChoiceCity
                setStage={setStage}
                setCity={setCity}
                page="Partners"
              />
            )}
            {stage === 4 && (
              <SubCategories
                category={category}
                setStage={setStage}
                setSubCategory={setSubCategory}
              />
            )}
            {stage === 5 && (
              <ListPartners subCategory={subCategory} setStage={setStage} />
            )}
          </>
        )}
      </Container>
      {((!!city && !!country && !(stage > 3)) || stage === 1) && <BottomBar />}
    </>
  );
};

export default Partners;
