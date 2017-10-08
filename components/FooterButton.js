import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class FooterButton extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.outerContainer}
                               onPress={this.props.buttonHandler}>
        <View style={styles.innerContainer}>
          <Text style={styles.text}>{this.props.children}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  outerContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    //backgroundColor: '#ff323c',
    borderTopColor: '#f2f2f2',
    borderTopWidth: 1,
    padding: 15,
    height: 70,
  },
  text: {
    color: '#ff323c',
  }
});