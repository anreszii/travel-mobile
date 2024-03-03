import { StyleSheet } from 'react-native';

const modalMenuStyles = StyleSheet.create({
  container: {
    width: '90%',
    backgroundColor: '#FFF',
    paddingVertical: 16,
    alignSelf: 'center',
    borderRadius: 25,
    marginTop: 'auto',
    marginBottom: 80 + 16,
  },
  textButton: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 21.86,
    marginLeft: 16,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 12,
  },
});

export default modalMenuStyles;
