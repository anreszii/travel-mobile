import { Dimensions, StyleSheet } from 'react-native';
const windowWidth = Dimensions.get('window').width;

const buttonStyles = StyleSheet.create({
  contain: {
    backgroundColor: '#5379F6',
    borderRadius: 25,
    height: 48,
    justifyContent: 'center',
  },
  containPressed: {
    borderRadius: 25,
    height: 48,
    justifyContent: 'center',
    backgroundColor: '#E8EBF9',
  },
  outline: {
    backgroundColor: '#E8EBF9',
    borderRadius: 25,
    height: 48,
    justifyContent: 'center',
  },
  category: {
    elevation: 8,
    shadowColor: '#060533',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.3,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 20,
    height: 72,
  },
  categoryActive: {
    backgroundColor: '#E8EBF9',
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 20,
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 1,
    shadowColor: 'grey',
    shadowRadius: 10,
    width: windowWidth - 24,
    height: 72,
  },
  country: {
    paddingHorizontal: 55,
    paddingVertical: 13,
    borderRadius: 25,
  },
  city: {
    paddingHorizontal: 16,
    paddingVertical: 13,
    borderRadius: 25,
  },
  textContain: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 24.59,
    textAlign: 'center',
  },
  textContainPressed: {
    color: '#1374F3',
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 24.59,
    textAlign: 'center',
  },
  textOutline: {
    color: '#1374F3',
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 24.59,
    textAlign: 'center',
  },

  textCountry: {
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 24.59,
  },
  textCity: {
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 24.59,
  },
  subcategoriesContent: {
    paddingHorizontal: 16,
    paddingVertical: 13,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconContent: {
    padding: 8,
  },
  iconActive: {
    color: '#1374F3',
  },
  iconNonActive: {},
});

export default buttonStyles;
