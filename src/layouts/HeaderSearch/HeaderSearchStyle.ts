import { StyleSheet, NativeModules } from 'react-native';
const { StatusBarManager } = NativeModules;

const headerSearchStyles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    elevation: 8,
    shadowColor: '#060533',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    zIndex: 1000,
    height: StatusBarManager.HEIGHT + 80,
    justifyContent: 'center',
  },
  content: {
    marginHorizontal: 24,
    marginBottom: 24,
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 24.59,
    color: '#223142',
  },
  input: {
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 21.86,
    borderBottomWidth: 1,
    borderBottomColor: '#E8EBF9',
    width: '65%',
  },
  backIcon: {
    marginRight: 12,
  },
});

export default headerSearchStyles;
