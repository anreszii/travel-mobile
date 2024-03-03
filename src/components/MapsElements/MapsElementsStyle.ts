import { Dimensions, StyleSheet, NativeModules } from 'react-native';
const { StatusBarManager } = NativeModules;

const screenH = Dimensions.get('screen').height;

const mapsElementsStyles = StyleSheet.create({
  content: {},
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  orgItem: {
    marginHorizontal: 12,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#FFF',
    borderRadius: 20,
    height: 154,
    alignItems: 'center',
  },
  orgItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  orgItemContent: {
    marginRight: 12,
  },
  title: {
    fontSize: 13,
    fontWeight: '600',
    lineHeight: 17.76,
    marginBottom: 16,
  },
  scoreTitle: {
    marginLeft: 4,
    fontSize: 13,
    fontWeight: '600',
    lineHeight: 17.76,
  },
  scoreSubtitle: {
    marginLeft: 4,
    color: '#555F74',
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 17.76,
  },
  timeTitle: {
    marginTop: 8,
    color: '#1374F3',
    fontSize: 13,
    fontWeight: '600',
    lineHeight: 17.76,
  },
});

export default mapsElementsStyles;
