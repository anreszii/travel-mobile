import { StyleSheet } from 'react-native';

const accordionStyles = StyleSheet.create({
  accordion: {
    marginTop: 24,
    marginBottom: 16,
  },
  categoryContainer: {},
  category: {
    width: 160,
    height: 100,
    marginBottom: 8,
    marginTop: 8,
    marginHorizontal: 12,
    justifyContent: 'space-between',
  },
  categoryTitle: {
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 17.76,
  },
  title: {
    fontSize: 16,
    fontWeight: '400',
    marginHorizontal: 24,
  },
});

export default accordionStyles;
