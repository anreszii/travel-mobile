import { Dimensions, StyleSheet, NativeModules } from 'react-native';
const { StatusBarManager } = NativeModules;

const screenW = Dimensions.get('screen').width;

const changePhotoStyles = StyleSheet.create({
  content: {
    marginVertical: 12,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
    marginHorizontal: 12,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 21.86,
  },
  subtitle: {
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 17.76,
    color: '#8B96A3',
    marginBottom: 24,
    marginHorizontal: 12,
  },
  photoContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 32,
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
  headerWithDesc: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
    marginHorizontal: 12,
  },
  icon: {
    position: 'absolute',
    zIndex: 1000,
    right: 10,
    top: 10,
  },
});

export default changePhotoStyles;
