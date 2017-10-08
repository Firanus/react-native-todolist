import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import Title from './components/Title';
import FooterButton from './components/FooterButton';
import TodoInput from './components/TodoInput'

import { connect } from 'react-redux'
import { actionCreators } from './reduxClasses/actions'

const mapStateToProps = (state) => ({
  todos: state.todos,
});

export class AppMainView extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <Title>Todo List App</Title>
          <TodoInput placeholder="Add an item..." onSubmitEditing={this.addItem}/>
          <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContainer}>
            <Text>Shake your phone to open the developer menu.</Text>
          </ScrollView>
          <FooterButton buttonHandler={this.removeCompletedItems}>Remove completed items</FooterButton>
        </View>
    );
  }

  removeCompletedItems() {
    const {dispatch} = this.props;
    dispatch(actionCreators.removeCompleted())
  }

  addItem(item) {
    const {dispatch} = this.props;
    dispatch(actionCreators.add(item));
  }
}

export default connect(mapStateToProps)(AppMainView);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
    marginBottom: 70,
  },
  scrollContainer: {
    paddingTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
