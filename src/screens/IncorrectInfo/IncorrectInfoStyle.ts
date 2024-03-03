import { Dimensions, StyleSheet, NativeModules } from 'react-native';
const { StatusBarManager } = NativeModules;

const screenH = Dimensions.get('screen').height;

const incorrectInfoStyles = StyleSheet.create({
  content: {
    margin: 12,
    justifyContent: 'space-between',
    height: screenH - 80 - StatusBarManager.HEIGHT - 48,
  },
  contentComplete: {
    margin: 12,
    justifyContent: 'space-between',
    height: screenH - StatusBarManager.HEIGHT - 48,
  },
  taleWrong: {
    marginBottom: 48,
  },
  label: {
    marginBottom: 12,
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 17.76,
  },
  addImage: {},
  button: {
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },
  taleWrongInput: {
    height: 132,
  },
  title: {
    fontSize: 32,
    fontWeight: '500',
    lineHeight: 43.71,
    color: '#1374F3',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 360,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 24.59,
    color: '#1374F3',
    textAlign: 'center',
  },
});

export default incorrectInfoStyles;
