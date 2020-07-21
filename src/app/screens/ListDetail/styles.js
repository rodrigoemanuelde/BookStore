import {StyleSheet} from 'react-native';
import {bluegreyS, blueBack, whiteR, white, black} from '@constants/colors';

const BORDER_RADIUS = 50;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
  cover: {
    width: 180,
    height: 280,
    marginTop: 20,
  },
  coverContainer: {
    width: '100%',
    height: 420,
    backgroundColor: blueBack,
    borderBottomEndRadius: BORDER_RADIUS,
    borderBottomStartRadius: BORDER_RADIUS,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 15,
  },
  darkContainer: {
    backgroundColor: bluegreyS,
  },
  title: {
    fontSize: 20,
    color: bluegreyS,
    fontWeight: 'bold',
    paddingBottom: 10,
    paddingTop: 5,
    width: 320,
    height: 50,
    backgroundColor: whiteR,
    textAlignVertical: 'center',
    textAlign: 'center',
    borderRadius: 30,
    elevation: 15,
  },
  author: {
    color: bluegreyS,
    padding: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    color: bluegreyS,
    marginLeft: 20,
    marginRight: 20,
    fontSize: 20,
    lineHeight: 30,
  },
  darkText: {
    color: black,
  },
});
