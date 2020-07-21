import {StyleSheet} from 'react-native';
import {white, bluegreyR} from '@constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: bluegreyR,
  },
  darkContainer: {
    backgroundColor: white,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
  },
  text: {
    color: white,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    marginTop: 500,
    width: 275,
    height: 50,
    borderColor: white,
    borderWidth: 2,
  },
});
