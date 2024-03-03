import { StyleSheet } from 'react-native';

const ratingStyles = StyleSheet.create({
  content: {
    backgroundColor: '#EDF0F6',
    paddingVertical: 20,
    paddingHorizontal: 12,
    borderRadius: 20,
    justifyContent: 'space-between',
    marginHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    justifyContent: 'center',
  },
  starsContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: '500',
    lineHeight: 43.71,
    marginRight: 12,
  },
  subtitle: {
    color: '#555F74',
    textAlign: 'center',
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 17.76,
    marginBottom: 24,
  },
  star: {
    marginHorizontal: 6,
  },
});

export default ratingStyles;
