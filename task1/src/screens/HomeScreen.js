import React from 'react';
import {
  Text,
  View,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Slider from 'react-native-slider';
import Notification from '../components/Notification';
import styles from './styles';

class HomeScreen extends React.Component {
  state = {
    examinationField: '',
    clinicalField: '',
    sliderValue: 2,
    drySliderValue: 1,
  };

  setSliderValue = sliderValue => {
    this.setState({
      sliderValue: sliderValue,
    });
  };

  setDrySliderValue = drySliderValue => {
    this.setState({
      drySliderValue: drySliderValue,
    });
  };

  handleExaminationFiled = text => {
    this.setState({
      examinationField: text,
    });
  };

  handleClinicalField = text => {
    this.setState({
      clinicalField: text,
    });
  };

  fieldFirstHeading = () => {
    return (
      <View>
        <View style={styles.iconWithHeading}>
          <View>
            <Image source={require('../images/check.png')} />
          </View>

          <View style={{paddingLeft: 10}}>
            <Text
              style={{
                color: this.state.examinationField === '' ? 'gray' : 'white',
                fontSize: 16,
              }}>
              Examination
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.verticalBar} />
          <View style={styles.textInputView}>
            <TextInput
              multiline={true}
              style={{color: 'white'}}
              placeholder="Type here"
              onChangeText={this.handleExaminationFiled}
            />
          </View>
        </View>

        {this.fieldSecondHeading()}
      </View>
    );
  };

  fieldSecondHeading = () => {
    return (
      <View style={{marginTop: 20}}>
        <View style={styles.iconWithHeading}>
          <View>
            <Image source={require('../images/check.png')} />
          </View>

          <View style={{paddingLeft: 10}}>
            <Text
              style={{
                color: this.state.clinicalField === '' ? 'gray' : 'white',
                fontSize: 16,
              }}>
              Clinical History
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.verticalBar} />
          <View style={styles.textInputView}>
            <TextInput
              multiline={true}
              style={{color: 'white'}}
              placeholder="Type here"
              onChangeText={this.handleClinicalField}
            />
          </View>
        </View>
      </View>
    );
  };

  smoothTannicSlider = () => {
    return (
      <View style={styles.mainSliderView}>
        <View>
          <Text style={{color: 'gray'}}>Smooth</Text>
        </View>
        <View style={styles.centerSliderFirstView}>
          <Slider
            style={styles.sliderView}
            maximumValue={5}
            minimumValue={0}
            minimumTrackTintColor="lightgray"
            maximumTrackTintColor="lightgray"
            thumbTintColor="#2d80ea"
            thumbStyle={{
              paddingVertical: 10,
              paddingHorizontal: 30,
              borderRadius: 20,
            }}
            step={1}
            value={this.state.sliderValue}
            onValueChange={sliderValue => this.setSliderValue(sliderValue)}
          />
        </View>
        <View>
          <Text style={{color: 'gray'}}>Tannic</Text>
        </View>
      </View>
    );
  };

  drySweetSlider = () => {
    return (
      <View style={styles.mainSliderView}>
        <View style={{paddingLeft: 25}}>
          <Text style={{color: 'gray'}}> Dry</Text>
        </View>
        <View style={styles.centerSliderFirstView}>
          <Slider
            style={styles.sliderView}
            maximumValue={5}
            minimumValue={0}
            minimumTrackTintColor="lightgray"
            maximumTrackTintColor="lightgray"
            thumbTintColor="#2d80ea"
            thumbStyle={{
              paddingVertical: 10,
              paddingHorizontal: 30,
              borderRadius: 20,
            }}
            step={1}
            value={this.state.drySliderValue}
            onValueChange={drySliderValue =>
              this.setDrySliderValue(drySliderValue)
            }
          />
        </View>
        <View>
          <Text style={{color: 'gray'}}>Sweet</Text>
        </View>
      </View>
    );
  };

  renderSubmitButton = () => {
    return console.log(
      'examination: ',
      this.state.examinationField + ' , ' + 'Clinical History:',
      this.state.clinicalField + ' , ' + 'smoothTannic:',
      this.state.sliderValue + ' , ' + 'drySweet',
      this.state.drySliderValue,
    );
  };

  submitButton = () => {
    return (
      <TouchableOpacity style={styles.submitTouchable} onPress={this.showModal}>
        <View style={styles.mainSubmitButtonView}>
          <Text style={{color: 'gray', fontSize: 16}}>Submit</Text>
        </View>
      </TouchableOpacity>
    );
  };

  showModal = () => {
    this.renderSubmitButton();
    this.setState({
      isModalVisible: true,
    });
    setTimeout(() => {
      this.setState({
        isModalVisible: false,
      });
    }, 3000);
  };

  render() {
    return (
      <ScrollView style={styles.mainScrollView}>
        {this.fieldFirstHeading()}
        {this.smoothTannicSlider()}
        {this.drySweetSlider()}
        {this.submitButton()}
        <Notification Visibility={this.state.isModalVisible} />
      </ScrollView>
    );
  }
}

export default HomeScreen;
