import { StyleSheet } from 'react-native';

const bottomPhotoStyles = StyleSheet.create({
  content: {
    backgroundColor: '#FFF',
  },
  button: {
    marginHorizontal: 12,
    marginBottom: -8,
  },
  editButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 12,
    marginBottom: -8,
  },
  editButton: {
    width: '50%',
  },
  editButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  editButtonTitle: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 21.86,
    marginLeft: 8,
  },
});

export default bottomPhotoStyles;
