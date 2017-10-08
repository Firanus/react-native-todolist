import React, { Component } from 'react';
import { StyleSheet, TextInput } from 'react-native';

export default class TodoInput extends Component {

  state = {
    text: ''
  };

  onChangeText = (text) => this.setState({text});

  onSubmitEditing = () => {
    const { onSubmitEditing } = this.props;
    const {text} = this.state;

    if(!text) return;

    onSubmitEditing(text);

    this.setState({
      text: ''
    });
  };


  render() {
    const { placeholder } = this.props;
    const { text } = this.state;

    return (
      <TextInput style={styles.textInput}
                 placeholder={ placeholder }
                 underlineColorAndroid="transparent"
                 value={text}
                 onSubmitEditing={this.onSubmitEditing}
                 onChangeText={this.onChangeText}/>
    )
  }
}

const styles = StyleSheet.create({
  textInput: {
  marginTop:70,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2"
}
});