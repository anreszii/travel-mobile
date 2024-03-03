import { StyleSheet, Dimensions } from 'react-native';

const screenH = Dimensions.get('screen').height;

const changeInfoStyles = StyleSheet.create({
  content: {
    marginVertical: 12,
    marginHorizontal: 12,
    height: screenH - 80 - 96,
  },
  addressContent: {
    marginBottom: 48,
  },
  label: {
    marginBottom: 16,
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 17.76,
  },
  mapContent: {
    marginBottom: 48,
  },
  map: {
    height: 220,
    width: '100%',
    borderRadius: 20,
  },
  buttonSave: {
    marginBottom: 24,
  },
  daysContent: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  buttonDay: {
    flex: 1,
    borderRadius: 12,
  },
  editContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  inputsContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonsContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    width: 80,
    marginRight: 12,
  },
  button: {
    marginLeft: 12,
  },
  daysContainer: {
    marginBottom: 48,
  },
  contactsContent: {
    marginBottom: 48,
  },
  inputContactContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  languageContent: {
    marginBottom: 48,
    flexDirection: 'row',
    alignItems: 'center',
  },
  tagsContent: {
    marginBottom: 72,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tagsItem: {
    backgroundColor: '#F6FAFF',
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E8EBF9',
    marginBottom: 8,
    marginRight: 12,
  },
  tagsTitle: {
    paddingHorizontal: 8,
  },
  sublabel: {
    marginBottom: 16,
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 17.76,
    color: '#8B96A3',
  },
});

export default changeInfoStyles;
