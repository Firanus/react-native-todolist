import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default class Title extends Component {
  render() {
    return (
      <View style={styles.outerContainer}>
        <StatusBar backgroundColor={styles.outerContainer.backgroundColor}
                   barStyle="light-content"
                   hidden={false}/>
        <View style={styles.innerContainer}>
          <Text style={styles.text}>{this.props.children}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  outerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#ff323c',
    borderBottomColor: '#f2f2f2',
    borderBottomWidth: 1,
    padding: 15,
    height: 70,
  },
  text: {
    color: '#fff'
  }
});