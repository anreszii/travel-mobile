import { StyleSheet } from 'react-native';

const accordionProfileStyles = StyleSheet.create({
  accordion: {
    marginTop: 24,
    marginHorizontal: 6,
    marginBottom: 16,
  },
  categoryContainer: {
    flexDirection: 'column',
  },
  category: {
    marginBottom: 8,
    marginTop: 8,
    marginHorizontal: 6,
    justifyContent: 'space-between',
  },
  categoryButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 21.86,
    marginLeft: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 21.86,
    marginLeft: 12,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default accordionProfileStyles;
