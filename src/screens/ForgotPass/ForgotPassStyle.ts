import { StyleSheet, NativeModules } from 'react-native';
const { StatusBarManager } = NativeModules;

const forgotPassStyles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#5379F6',
  },
  header: {
    height: '25%',
  },
  headerSmall: {
    height: '17.5%',
  },
  headerTitle: {
    marginTop: StatusBarManager.HEIGHT + 12,
    textAlign: 'center',
    fontSize: 32,
    fontWeight: '400',
    lineHeight: 43.71,
    color: '#fff',
  },
  content: {
    height: '75%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#FBFCFF',
    paddingTop: 24,
    paddingBottom: 24,
    paddingHorizontal: 12,
    justifyContent: 'space-between',
  },
  contentBig: {
    height: '82.5%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#FBFCFF',
    paddingTop: 24,
    paddingBottom: 24,
    paddingHorizontal: 12,
    justifyContent: 'space-between',
  },
  inputContent: {
    marginHorizontal: 12,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24,
  },
  title: {
    fontSize: 18,
    lineHeight: 24.59,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 24,
  },
  email: {
    color: '#1374F3',
    fontSize: 18,
    lineHeight: 24.59,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 48,
  },
  input: {
    marginLeft: 12,
    borderBottomWidth: 1,
    borderColor: '#D5DDE7',
    flex: 1,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 21.86,
    paddingBottom: 12,
  },
  inputTitle: {},
  forgot: {
    marginTop: 24,
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 17.76,
    marginLeft: 24,
  },
  buttonContent: {},
  button: {
    marginBottom: 12,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  googleTitle: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 21.86,
    marginLeft: 12,
  },
  icon: {
    marginBottom: 12,
  },
});

export default forgotPassStyles;
