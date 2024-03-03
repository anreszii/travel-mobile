import { StyleSheet } from 'react-native';

const cardOrgStyles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    shadowColor: '#060533',
    shadowOffset: {
      width: 1,
      height: 6,
    },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 3,
    borderRadius: 24,
    paddingVertical: 12,
    paddingLeft: 12,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 6,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 24.59,
    marginTop: 12,
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 17.76,
    marginBottom: 8,
  },
  ratingContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingTitle: {
    fontSize: 13,
    fontWeight: '600',
    lineHeight: 17.76,
    marginHorizontal: 4,
  },
  ratingSubtitle: {
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 17.76,
  },
});

export default cardOrgStyles;
