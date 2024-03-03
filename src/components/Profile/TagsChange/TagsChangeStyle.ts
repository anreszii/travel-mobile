import { StyleSheet } from 'react-native';

const tagsChangeStyles = StyleSheet.create({
  content: {
    marginHorizontal: 12,
    marginVertical: 16,
  },
  header: {
    flexDirection: 'row',
    marginBottom: 32,
  },
  headerTitle: {
    fontFamily: 'Manrope-Medium',
    color: '#8B96A3',
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 17.76,
  },
  headerTags: {
    color: '#555F74',
    fontFamily: 'Manrope-Medium',
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 17.76,
  },
  tagsContent: {
    borderWidth: 1,
    borderColor: '#E8EBF9',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  inputTags: {
    height: 32,
    backgroundColor: '#F6FAFF',
    borderWidth: 1,
    borderColor: '#E8EBF9',
    marginRight: 12,
    borderRadius: 20,
    paddingHorizontal: 6,
    minWidth: 56,
    marginBottom: 10,
  },
  crossIcon: {
    position: 'absolute',
    right: 8,
    zIndex: 1000,
    top: -4,
  },
});

export default tagsChangeStyles;
