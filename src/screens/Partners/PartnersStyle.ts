import { StyleSheet } from 'react-native';

const partnersStyles = StyleSheet.create({
  content: {
    height: '100%',
    justifyContent: 'space-between',
    marginHorizontal: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: '400',
    lineHeight: 43.71,
    textAlign: 'center',
    color: '#1374F3',
  },
  image: {
    width: '100%',
    height: 238,
    marginTop: 8,
    marginBottom: 16,
  },
  subtitle: {
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 24.59,
    textAlign: 'center',
    color: '#1374F3',
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonTitle: {
    marginLeft: 16,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 21.86,
  },
  rowBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default partnersStyles;
