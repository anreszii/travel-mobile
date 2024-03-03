import { Dimensions, StyleSheet, NativeModules } from 'react-native';
const { StatusBarManager } = NativeModules;

const screenH = Dimensions.get('screen').height;
const screenW = Dimensions.get('screen').width;

const statOrgStyles = StyleSheet.create({
  content: {
    marginVertical: 12,
    marginHorizontal: 12,
  },
  tabs: {
    marginVertical: 24,
    flexDirection: 'row',
    marginLeft: -12,
  },
  tabsContentActive: {
    borderBottomWidth: 2,
    borderColor: '#5379F6',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    marginHorizontal: 12,
  },
  tabsContent: {
    marginHorizontal: 12,
  },
  tabsTitle: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 21.86,
  },
  statItem: {
    marginBottom: 24,
  },
  label: {
    marginBottom: 12,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 21.86,
  },
  myRewiewContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 36,
    position: 'relative',
    zIndex: 1,
  },
  rewiewDesc: {
    fontSize: 16,
    lineHeight: 21.86,
    fontWeight: '400',
  },
  myRewiewItem: {},
  rewiewItemHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    justifyContent: 'space-between',
  },
  rewiewItemHeaderTitle: {
    marginLeft: 12,
    fontWeight: '500',
    lineHeight: 19.12,
  },
  rewiewItemRating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  rewiewItemRatingTitle: {
    marginLeft: 12,
    fontWeight: '400',
    lineHeight: 17.76,
    fontSize: 13,
    color: '#8B96A3',
  },
  contentComplete: {
    margin: 12,
    justifyContent: 'space-between',
    height: screenH - StatusBarManager.HEIGHT,
  },
  title: {
    fontSize: 32,
    fontWeight: '500',
    lineHeight: 43.71,
    color: '#1374F3',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 360,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 24.59,
    color: '#1374F3',
    textAlign: 'center',
  },
  titleRewiew: {
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 24.59,
  },
  buttonRewiew: {
    width: '50%',
    alignItems: 'center',
  },
  buttonRewiewTitle: {
    fontSize: 13,
    fontWeight: '600',
    lineHeight: 17.76,
    color: '#555F74',
    marginRight: 4,
  },
  rewiewContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
    marginLeft: 24,
    marginBottom: 48,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default statOrgStyles;
