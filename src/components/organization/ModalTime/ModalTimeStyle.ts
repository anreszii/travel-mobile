import { StyleSheet } from 'react-native';

const modalTimeStyles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#FFF',
    alignSelf: 'center',
    borderRadius: 25,
    marginTop: 'auto',
  },
  content: {
    marginHorizontal: 16,
    height: '100%',
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingBottom: 32,
  },
  dayContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  day: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 21.86,
  },
  time: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 21.86,
  },
  timeClose: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 21.86,
    color: '#F44336',
  },
});

export default modalTimeStyles;
