import { StyleSheet } from 'react-native';

const bottomBarStyles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    shadowColor: '#060533',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    shadowOpacity: 0.3,
    borderTopWidth: 0,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    height: 72,
  },
  button: {
    width: '25%',
    alignItems: 'center',
    paddingTop: 8,
  },
  titleActive: {
    fontSize: 11,
    fontWeight: '600',
    lineHeight: 15.03,
    color: '#1374F3',
  },
  titleNonActive: {
    fontSize: 11,
    fontWeight: '600',
    lineHeight: 15.03,
    color: '#5A6B8B',
  },
});

export default bottomBarStyles;
