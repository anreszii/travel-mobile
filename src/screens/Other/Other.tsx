import { View, Text } from 'react-native';
import React from 'react';
import Typography from '../../components/ui/Typography/Typography';
import BottomBar from '../../layouts/BottomBar/BottomBar';
import Container from '../../layouts/Container/Container';
import Button from '../../components/ui/Button/Button';
import {
  AddIcon,
  AvatarIcon,
  CommentIcon,
  LogOutIcon,
  OrgIcon,
  ProfileIcon,
  SettingIcon,
} from '../../icons';
import otherStyles from './OtherStyle';
import { useNavigation } from '@react-navigation/native';
import Accordion from '../../components/ui/Accordion/Accordion';
import AccordionProfile from '../../components/ui/Accordion/AccordionProfile';

const Other = () => {
  const navigation = useNavigation<any>();

  return (
    <>
      <Container mb={0} safe>
        <View style={otherStyles.content}>
          <AccordionProfile
            items={[
              {
                title: 'profilenameprofilename',
                icon: AvatarIcon,
                elements: [
                  {
                    title: 'Мои организации',
                    icon: OrgIcon,
                    onPress: () => navigation.navigate('MyOrg'),
                  },
                  {
                    title: 'Настройки',
                    icon: SettingIcon,
                    onPress: () => navigation.navigate('EditProfile'),
                  },
                  {
                    title: 'Выйти',
                    icon: LogOutIcon,
                    onPress: () => navigation.navigate('SignIn'),
                  },
                ],
                open: false,
              },
            ]}
          />
          <Button
            variant="subcategories"
            style={otherStyles.button}
            onPress={() => navigation.navigate('AddOrg')}>
            <View style={otherStyles.buttonContent}>
              <AddIcon />
              <Typography style={otherStyles.buttonTitle}>
                Добавить организацию
              </Typography>
            </View>
          </Button>
          <Button variant="subcategories" style={otherStyles.button}>
            <View style={otherStyles.buttonContent}>
              <CommentIcon />
              <Typography style={otherStyles.buttonTitle}>
                Вопросы и пожелания
              </Typography>
            </View>
          </Button>
        </View>
      </Container>
      <BottomBar />
    </>
  );
};

export default Other;
