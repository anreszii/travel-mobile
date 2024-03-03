import { StyleSheet } from 'react-native';

const orgBottomStyles = StyleSheet.create({
  content: {
    height: 80,
    paddingHorizontal: 12,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#060533',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.31,
    shadowRadius: 20,
    elevation: 8,
    backgroundColor: '#FFF',
    paddingBottom: 16,
  },
  buttonContent: {
    width: '50%',
    height: '90%',
    justifyContent: 'center',
  },
  iconsContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 8,
  },
});

export default orgBottomStyles;
