import React, { Component } from 'react';
import { FlatList, Text, StyleSheet } from 'react-native'

const extractId = ({id}) => id;

export default class TodoList extends Component {

  renderItem = ({item}) => {
    return (
      <Text>
        {item.title}
      </Text>
    )
  };

  render () {
    const { todos } = this.props;

    return (
      <FlatList
        style={styles.container}
        data={todos}
        renderItem={this.renderItem}
        keyExtractor={extractId}
      />
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 70,
  },
  row: {
    paddingTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  }
});