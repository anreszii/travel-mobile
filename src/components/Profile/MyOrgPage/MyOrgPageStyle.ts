import { StyleSheet } from 'react-native';

const myOrgPageStyles = StyleSheet.create({
  image: {
    width: '100%',
    height: 280,
  },
  content: {
    backgroundColor: '#fff',
    flex: 1,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 22,
  },
  crossButton: {},
  subtitle: {
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 17.76,
    color: '#555F74',
    marginBottom: 1,
  },
  ratingContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 13,
    fontWeight: '600',
    lineHeight: 17.76,
    marginHorizontal: 4,
  },
  score: {
    color: '#555F74',
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 17.76,
  },
  time: {
    marginVertical: 16,
    fontSize: 13,
    fontWeight: '600',
    lineHeight: 17.76,
    color: '#1374F3',
  },
  locationContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  location: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 21.86,
  },
  phoneContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 16,
  },
  phone: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 21.86,
  },
  socialsContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  descriptionContent: {
    marginTop: 16,
  },
  descriptionTitle: {
    color: '#555F74',
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 17.76,
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 21.86,
  },
  tabsContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  tabsTitle: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 21.86,
    paddingBottom: 2,
  },
  tabsSubtitle: {
    color: '#555F74',
    fontSize: 10,
    fontWeight: '400',
    lineHeight: 13.36,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 16,
    paddingBottom: 2,
  },
  rowActive: {
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 16,
    borderBottomWidth: 2,
    borderColor: '#5379F6',
    paddingBottom: 2,
    borderRadius: 2,
  },
  subtitleContainer: {
    backgroundColor: '#E8EBF9',
    borderRadius: 24,
    marginLeft: 4,
    padding: 2,
  },
  tabsTitleContainer: {
    paddingBottom: 2,
  },
  tabsTitleContainerActive: {
    borderRadius: 2,
    borderBottomWidth: 2,
    borderColor: '#5379F6',
    paddingBottom: 2,
  },
});

export default myOrgPageStyles;
