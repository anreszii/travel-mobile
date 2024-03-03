import { Dimensions, StyleSheet } from 'react-native';

const screenW = Dimensions.get('screen').width;

const dropdownStyle = StyleSheet.create({
  dropdown: {
    backgroundColor: '#FFF',
    paddingVertical: 12,
    paddingHorizontal: 8,
    position: 'absolute',
    top: 48,
    right: 12,
    width: screenW - 62,
    borderWidth: 1,
    borderColor: '#EEF5FF',
    shadowColor: '#060533',
    shadowOffset: {
      width: 4,
      height: 8,
    },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 4,
    borderRadius: 20,
  },
  dropdownTitle: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 21.86,
    marginLeft: 16,
  },
  dropdownItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default dropdownStyle;
