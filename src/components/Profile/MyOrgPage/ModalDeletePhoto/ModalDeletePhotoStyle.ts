import { StyleSheet } from 'react-native';

const modalDeletePhotoStyles = StyleSheet.create({
  container: {
    width: '80%',
    backgroundColor: '#FFF',
    padding: 16,
    alignSelf: 'center',
    borderRadius: 25,
    marginTop: 96,
  },
  title: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 21.86,
    marginBottom: 24,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    alignItems: 'center',
    width: '40%',
  },
  buttonTitleDisable: {
    textAlign: 'center',
    color: '#8B96A3',
  },
  vL: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#D5DDE7',
    paddingVertical: 12,
  },
  buttonTitle: {
    textAlign: 'center',
  },
});

export default modalDeletePhotoStyles;
