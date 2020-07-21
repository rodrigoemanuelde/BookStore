import {StyleSheet} from 'react-native';
import {blueBack, white, black, bluegreyR, darkblue} from '@constants/colors';
export default StyleSheet.create({
  image: {
    width: 150,
    height: 200,
  },
  bookContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 380,
    height: 160,
    padding: 15,
    backgroundColor: blueBack,
    borderRadius: 10,
  },
  title: {
    color: bluegreyR,
    fontWeight: 'bold',
    fontSize: 18,
    elevation: 1,
    shadowRadius: 0.2,
    shadowColor: black,
    shadowOpacity: 0.7,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  author: {
    color: bluegreyR,
    fontStyle: 'italic',
    marginBottom: 10,
    marginTop: 5,
  },
  textContainer: {
    marginLeft: 10,
    flex: 1,
  },
  description: {
    color: bluegreyR,
    fontSize: 15,
  },
  bookContainerTouch: {
    backgroundColor: darkblue,
  },
  bigContainer: {
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    width: 420,
    height: 220,
    marginBottom: 20,
  },
  darkbigContainer: {
    backgroundColor: white,
  },
});
