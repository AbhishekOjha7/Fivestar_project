import {StyleSheet} from 'react-native';
import {COLOR} from '../../Utils/color';
import {vh, vw} from '../../Utils/dimension';
const styles = StyleSheet.create({
  mainparent: {
    flex: 1,
    backgroundColor: COLOR.BLACK,
  },
  parent: {
    marginLeft: vw(24),
    marginTop: vh(65),
  },
  textcolor: {
    color: COLOR.WHITE,
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'helvetica-blackitalic',
  },
  cover: {
    height: 261,
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: vh(22),
  },
  rectangle: {
    width: 355,
    height: 200,
    borderWidth: 1,
    borderColor: COLOR.WHITE,
    borderRadius: 5,
    backgroundColor: COLOR.BROWNBACK,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rectangleImage: {
    width: 353,
    height: 198,
    resizeMode: 'cover',
    borderRadius: 4,
  },
  coverRectangle: {
    height: 24,
    width: 24,
    position: 'absolute',
    left: 164.5,
    top: 87,
    zIndex: 1,
    opacity: 0.6,
  },
  cameraSquare: {
    height: 24,
    width: 24,
    position: 'absolute',
    left: 50,
    top: 46,
    zIndex: 1,
    opacity: 0.6,
  },
  prof: {
    width: 115,
    height: 115,
    position: 'absolute',
    right: 35,
    bottom: 0,
    top: -58,
    backgroundColor: COLOR.BROWNBACK,
    borderRadius: 5,
  },
  prof1: {
    width: 115,
    height: 115,
    position: 'absolute',
    borderWidth: 1,
    borderColor: COLOR.WHITE,
    borderRadius: 5,
  },
  pencil: {
    height: 50,
    top: 20,
    width: 30,
    justifyContent: 'center',
    position: 'absolute',
    right: 28,
  },
  toucablecalendar: {
    height: 50,

    width: '100%',
    justifyContent: 'center',
    position: 'absolute',
    alignItems: 'flex-end',
    top: 17,
    right: 30,
  },
  pencilimage: {
    height: 30,
    width: 25,
  },

  nextimg: {
    height: 30,
    width: 25,
  },
  calenderimg: {
    height: 25,
    width: 25,
    marginTop: 7,
  },
  submitbutton: {
    position: 'absolute',
    bottom: 12,
    backgroundColor: COLOR.LIGHTBLUE,
    borderRadius: 5,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    width: 360,
  },
  button: {
    fontSize: 18,
    fontFamily: 'helvetica-blackitalic',
  },
  coverprofile: {
    height: 24,
    width: 24,
    position: 'absolute',
    left: 46,
    top: 45,
    zIndex: 1,
    opacity: 0.6,
  },
  next: {
    // borderWidth:1,
    // borderColor:'red',
    alignItems: 'flex-end',
    bottom: 6,
  },
  submitbuttonmargin: {
    marginBottom: 10,
  },
  identitydesign: {
    borderWidth: 1,
    borderColor: COLOR.WHITE,
    borderRadius: 5,
    height: 55,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginHorizontal: 14,
  },
  identitytext: {
    color: COLOR.LIGHTBLUE,
    fontSize: 20,
  },
});
export {styles};