import { StyleSheet } from 'react-native';

const codeInputStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  codeInput: {
    width: 56,
    height: 56,
    borderWidth: 1,
    borderColor: '#8B96A3',
    borderRadius: 12,
    margin: 5,
    textAlign: 'center',
    fontSize: 18,
  },
  submitButtonContainer: {
    marginTop: 20,
  },
});

export default codeInputStyles;
