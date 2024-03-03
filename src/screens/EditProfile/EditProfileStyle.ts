import { Dimensions, StyleSheet, NativeModules } from 'react-native';
const { StatusBarManager } = NativeModules;

const screenH = Dimensions.get('screen').height;

const editProfileStyles = StyleSheet.create({
  content: {
    marginVertical: 24,
    marginHorizontal: 24,
    justifyContent: 'space-between',
    height: screenH - 80 - StatusBarManager.HEIGHT - 48,
  },
  header: {},
  editAvatar: {
    width: 64,
    height: 64,
    backgroundColor: '#5379F6',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 21.86,
    marginTop: 16,
  },
  contentInput: {},
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 48,
  },
  input: {
    borderColor: '#D5DDE7',
    borderBottomWidth: 1,
    paddingBottom: 8,
    marginLeft: 12,
    flex: 1,
  },
  icon: {
    marginBottom: 8,
  },
  button: {
    marginTop: -12,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonTitle: {
    marginLeft: 12,
    fontSize: 16,
    lineHeight: 21.86,
    fontWeight: '500',
  },
});

export default editProfileStyles;
