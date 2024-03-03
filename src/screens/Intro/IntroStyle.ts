import { StyleSheet } from 'react-native';

const introStyles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    position: 'absolute',
    width: 100,
    height: 200,
  },
  dot: {
    width: '100%',
    height: 20,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000',
  },
  trailLine: {
    position: 'absolute',
  },
  trailDot: {
    width: 3,
    height: 3,
    borderRadius: 1.5,
    backgroundColor: 'blue',
    position: 'absolute',
  },
});

export default introStyles;
