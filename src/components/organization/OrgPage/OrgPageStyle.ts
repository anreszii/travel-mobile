import { Dimensions, StyleSheet, NativeModules } from 'react-native';
const { StatusBarManager } = NativeModules;

const screenW = Dimensions.get('screen').width;

const orgPageStyles = StyleSheet.create({
  image: {
    width: '100%',
    height: 280,
  },
  content: {
    backgroundColor: '#fff',
    flex: 1,
    paddingBottom: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 16,
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
    marginHorizontal: 16,
  },
  ratingContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
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
    marginHorizontal: 16,
  },
  locationContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    marginHorizontal: 16,
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
    marginHorizontal: 16,
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
    marginHorizontal: 16,
  },
  descriptionContent: {
    marginTop: 16,
    marginHorizontal: 16,
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
    marginHorizontal: 16,
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
  photoContainer: {
    marginBottom: 124,
  },
  photoContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  photoFirst: {
    width: screenW / 2 - 4,
    marginRight: 4,
    marginBottom: 4,
    height: 178,
  },
  photo: {
    width: screenW / 2,
    height: 178,
  },
  headerPhoto: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: StatusBarManager.HEIGHT + 24,
  },
  titlePhoto: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  rewiewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 36,
    marginHorizontal: 16,
  },
  rewiewHeaderTitle: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 21.86,
  },
  filterRewiew: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rewiewFilterTitle: {
    fontSize: 13,
    fontWeight: '600',
    lineHeight: 17.76,
    color: '#8B96A3',
  },
  myRewiewItem: {},
  myRewiewTitle: {
    marginBottom: 24,
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 21.86,
    marginHorizontal: 16,
  },
  rewiewItem: {
    marginBottom: 28,
    marginHorizontal: 16,
  },
  rewiewItemHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
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
  myRewiewContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 36,
    width: screenW - 48,
    marginHorizontal: 16,
  },
  rewiewDesc: {
    fontSize: 16,
    lineHeight: 21.86,
    fontWeight: '400',
  },
  rewiewTitle: {
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 24.59,
  },
  rewiewContent: {
    flex: 1,
    justifyContent: 'space-between',
  },
  yourRatingContainer: {},
  yourRatingTitle: {
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 17.76,
    marginBottom: 16,
    marginHorizontal: 16,
  },
  yourRewiewContainer: {},
  yourRewiewTitle: {
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 17.76,
    marginBottom: 16,
    marginHorizontal: 16,
  },
  yourRewiewInput: {
    marginHorizontal: 16,
  },
  yourRewiewInputTitle: {
    height: 132,
    borderWidth: 1,
    borderColor: '#E8EBF9',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 21.86,
  },
  addPhotoContainer: {},
  addPhotoTitle: {
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 17.76,
    marginBottom: 16,
    marginHorizontal: 16,
  },
  addPhotoButton: {
    elevation: 3,
    shadowColor: '#060533',
    shadowOffset: { width: 1, height: 6 },
    shadowOpacity: 0.14,
    shadowRadius: 8,
    backgroundColor: '#ffffff',
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
    marginHorizontal: 16,
  },
  buttonSendContainer: {
    marginBottom: 72,
  },
  buttonSend: {
    marginBottom: 24,
    marginHorizontal: 24,
  },
  addPhotoImages: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rewiewImage: {
    width: 56,
    height: 56,
    marginHorizontal: 8,
    borderRadius: 12,
  },
  imageRewiewIcon: {
    position: 'absolute',
    zIndex: 1000,
    right: 12,
    top: 4,
    backgroundColor: '#8B96A3',
    borderRadius: 24,
    width: 16,
    height: 16,
  },
});

export default orgPageStyles;