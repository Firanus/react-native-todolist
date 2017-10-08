import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import Title from './components/Title';
import FooterButton from './components/FooterButton';
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

import { connect } from 'react-redux'
import { actionCreators } from './reduxClasses/actions'

const mapStateToProps = (state) => ({
  todos: state.todos,
});

export class AppMainView extends React.Component {
  render() {
    const {todos, addItem, removeCompletedItems} = this.props;

    return (
        <View style={styles.container}>
          <Title>Todo List App</Title>
          <TodoInput placeholder="Add an item..." onSubmitEditing={addItem}/>
          <TodoList todos={todos}/>
          <FooterButton buttonHandler={removeCompletedItems}>Remove completed items</FooterButton>
        </View>
    );
  }
}

export default connect(
  mapStateToProps,
  dispatch => ({
    addItem: item => dispatch(actionCreators.add(item)),
    removeCompletedItems: () => dispatch(actionCreators.removeCompleted()),
  })
)(AppMainView);

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
