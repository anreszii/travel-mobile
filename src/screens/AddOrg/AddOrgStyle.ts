import { Dimensions, StyleSheet, NativeModules } from 'react-native';
const { StatusBarManager } = NativeModules;

const screenH = Dimensions.get('screen').height;

const addOrgStyles = StyleSheet.create({
  content: {
    marginVertical: 24,
    marginHorizontal: 12,
    justifyContent: 'space-between',
    height: screenH - 80 - StatusBarManager.HEIGHT - 56,
  },
  inputContainer: {},
  label: {
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 17.76,
    marginBottom: 12,
  },
  sublabel: {
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 17.76,
    color: '#8B96A3',
    marginBottom: 12,
  },
  input: {},
  button: {
    backgroundColor: '#EDF0F6',
  },
});

export default addOrgStyles;
