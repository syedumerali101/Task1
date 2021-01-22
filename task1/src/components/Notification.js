import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import Modal from 'react-native-modal';

class Notification extends React.Component {
  render() {
    return (
      <View style={{}}>
        <Modal
          isVisible={this.props.Visibility}
          animationIn="slideInLeft"
          hideModalContentWhileAnimating={true}>
          <View style={{flex: 1}}>
            <Text style={{color: 'white'}}>
              Your report has been successfully submitted
            </Text>
          </View>
        </Modal>
      </View>
    );
  }
}

export default Notification;
