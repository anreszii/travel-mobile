import { StyleSheet, NativeModules } from 'react-native';
const { StatusBarManager } = NativeModules;

const headerTabsStyles = StyleSheet.create({
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
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    zIndex: 1000,
    height: StatusBarManager.HEIGHT + 128,
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
    marginLeft: 12,
  },
  input: {
    marginLeft: 12,
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 21.86,
    borderBottomWidth: 1,
    borderBottomColor: '#E8EBF9',
    width: '65%',
  },
  tabsContent: {
    marginHorizontal: 24,
    marginBottom: 8,
  },
});

export default headerTabsStyles;
