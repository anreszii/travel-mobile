import { StyleSheet, NativeModules } from 'react-native';
const { StatusBarManager } = NativeModules;

const listPartnersStyles = StyleSheet.create({
  firstCard: {
    marginTop: 24,
    marginBottom: 16,
  },
  card: {
    marginBottom: 24,
    marginHorizontal: 12,
  },
  lastCard: {
    marginBottom: 96 + 96 + 86,
  },
  noneOrgContainer: {
    height: '100%',
    flex: 1,
    paddingTop: 80 + StatusBarManager.HEIGHT,
  },
  noneOrgImage: {
    width: '100%',
    height: 286,
  },
  noneOrgTitle: {
    fontSize: 24,
    fontWeight: '500',
    lineHeight: 29.11,
    color: '#1374F3',
    textAlign: 'center',
    marginBottom: 24,
  },
  noneOrgSubtitle: {
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 24.59,
    color: '#1374F3',
    textAlign: 'center',
    marginBottom: 24,
  },
  map: {
    height: '100%',
  },
});

export default listPartnersStyles;
