import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainScrollView: {backgroundColor: '#00070b', flex: 1, padding: 20},

  iconWithHeading: {flexDirection: 'row', alignItems: 'center'},

  verticalBar: {
    padding: 1,
    backgroundColor: '#318bfe',
    marginLeft: 20,
  },

  textInputView: {
    marginTop: 5,
    backgroundColor: 'transparent',
    borderColor: '#2d80ea',
    borderWidth: 1,
    borderRadius: 10,
    width: '80%',
    marginLeft: 20,
  },

  mainSliderView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
  },

  centerSliderFirstView: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'stretch',
    justifyContent: 'center',
  },

  sliderView: {
    backgroundColor: 'lightgray',
    height: 23,
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 30,
  },

  submitTouchable: {
    paddingHorizontal: 50,
    paddingTop: 50,
  },

  mainSubmitButtonView: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#2d80ea',
  },
});
