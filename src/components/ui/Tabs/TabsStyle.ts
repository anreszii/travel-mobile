import { StyleSheet } from 'react-native';

const tabsStyles = StyleSheet.create({
  container: {
    backgroundColor: '#EDF0F6',
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tabItemActive: {
    width: '50%',
    paddingVertical: 10,
    marginVertical: 3,
    backgroundColor: '#FFF',
    borderRadius: 16,
  },
  tabItemInActive: {
    width: '50%',
    paddingVertical: 10,
  },
  tabTitleActive: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 21.86,
    color: '#5379F6',
  },
  tabTitleInActive: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 21.86,
  },
});

export default tabsStyles;
