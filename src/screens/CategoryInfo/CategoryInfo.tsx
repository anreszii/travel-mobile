import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import Container from '../../layouts/Container/Container';
import Header from '../../layouts/Header/Header';
import Typography from '../../components/ui/Typography/Typography';
import categoryInfoStyles from './CategoryInfoStyle';

interface ICategoryInfo {
  route: any;
}

const CategoryInfo: React.FC<ICategoryInfo> = ({ route }) => {
  return (
    <Container mb={0}>
      <Header title={route.params.title} menu onPressMenu={() => {}} />
      <ScrollView
        style={categoryInfoStyles.content}
        showsVerticalScrollIndicator={false}>
        <View style={categoryInfoStyles.textContent}>
          <Typography style={categoryInfoStyles.title}>Зоны</Typography>
          <Typography style={categoryInfoStyles.subtitle}>
            Черногория разделена на 3 климатические зоны: север, центр и юг. На
            севере расположены горнолыжные курорты Колашин и Жабляк, а также
            маленькие деревушки. В центральной части находится столица -
            Подгорица и ряд городов: Центинье, Даниловград, Никшич. Юг -
            прибрежная часть страны. Для долгосрочного проживания рекомендуем
            выбирать именно прибрежные города. Как правило, рядом с основными
            прибрежными городами расположены маленькие городки и деревушки,
            которые административно относятся к основному городу. Из них
            несложно добраться до основного города, однако цены на жилье там
            будут немного ниже, чем в городе.
          </Typography>
        </View>
        <View style={categoryInfoStyles.textContent}>
          <Typography style={categoryInfoStyles.title}>Будва</Typography>
          <Typography style={categoryInfoStyles.subtitle}>
            Черногория разделена на 3 климатические зоны: север, центр и юг. На
            севере расположены горнолыжные курорты Колашин и Жабляк, а также
            маленькие деревушки. В центральной части находится столица -
            Подгорица и ряд городов: Центинье, Даниловград, Никшич. Юг -
            прибрежная часть страны. Для долгосрочного проживания рекомендуем
            выбирать именно прибрежные города. Как правило, рядом с основными
            прибрежными городами расположены маленькие городки и деревушки,
            которые административно относятся к основному городу. Из них
            несложно добраться до основного города, однако цены на жилье там
            будут немного ниже, чем в городе.
          </Typography>
        </View>
      </ScrollView>
    </Container>
  );
};

export default CategoryInfo;
