import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Container from '../../layouts/Container/Container';
import Header from '../../layouts/Header/Header';
import addOrgStyles from './AddOrgStyle';
import Typography from '../../components/ui/Typography/Typography';
import Input from '../../components/ui/Input/Input';
import Button from '../../components/ui/Button/Button';
import { TextInput } from 'react-native-paper';
import { ArrowRight } from '../../icons';
import ModalNotComplete from '../../components/AddOrg/ModalNotComplete/ModalNotComplete';

const AddOrg = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Container mb={0}>
        <Header title="Добавить организацию" />
        <View style={addOrgStyles.content}>
          <View style={addOrgStyles.inputContainer}>
            <Typography style={addOrgStyles.label}>Название</Typography>
            <Input style={addOrgStyles.input} />
          </View>
          <View style={addOrgStyles.inputContainer}>
            <Typography style={addOrgStyles.label}>Категория</Typography>
            <Input
              style={addOrgStyles.input}
              right={
                <TextInput.Icon
                  icon={() => (
                    <TouchableOpacity>
                      <ArrowRight />
                    </TouchableOpacity>
                  )}
                />
              }
            />
          </View>
          <View style={addOrgStyles.inputContainer}>
            <Typography style={addOrgStyles.label}>Специализация</Typography>
            <Typography style={addOrgStyles.sublabel}>
              Опишите кратко род занятий. Например: Репетитор английского / Кофе
              с собой / Маникюр
            </Typography>
            <Input style={addOrgStyles.input} />
          </View>
          <View style={addOrgStyles.inputContainer}>
            <Typography style={addOrgStyles.label}>Город</Typography>
            <Input
              style={addOrgStyles.input}
              right={
                <TextInput.Icon
                  icon={() => (
                    <TouchableOpacity>
                      <ArrowRight />
                    </TouchableOpacity>
                  )}
                />
              }
            />
          </View>
          <Button
            variant="contain"
            style={addOrgStyles.button}
            onPress={() => setVisible(!visible)}>
            Сохранить
          </Button>
        </View>
      </Container>
      <ModalNotComplete visible={visible} setVisible={setVisible} />
    </>
  );
};

export default AddOrg;
