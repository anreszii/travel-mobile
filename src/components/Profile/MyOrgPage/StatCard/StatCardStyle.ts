import { StyleSheet } from 'react-native';

const statCardStyles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#E8EBF9',
    paddingVertical: 32,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  views: {
    width: '50%',
  },
  clicks: {},
  title: {
    fontSize: 28,
    fontWeight: '500',
    lineHeight: 38.25,
  },
  subtitle: {
    color: '#555F74',
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 17.76,
  },
});

export default statCardStyles;
