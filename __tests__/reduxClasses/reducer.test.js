import { reducer } from '../../reduxClasses/reducer'
import { types } from '../../reduxClasses/actions'


describe('The reducer', () => {
  test('Adds an item', () => {
    const initialState = {
      todos: [ {id: 0, title: 'Default Item', isCompleted: false} ]
    };
    const addActionMock = {
      type: types.ADD_ITEM,
      payload: 'My Added Todo'
    };

    expect(reducer(initialState, addActionMock)).toMatchSnapshot();
  });

  test('Removes completed items', () => {
    const initialState = {
      todos: [
        {id: 0, title: 'Default Item', isCompleted: false},
        {id: 1, title: 'First item to remove', isCompleted: true},
        {id: 2, title: 'Second item to remove', isCompleted: true}
      ]
    };
    const removeCompletedActionMock = {
      type: types.REMOVE_COMPLETED_ITEMS
    };

    expect(reducer(initialState, removeCompletedActionMock)).toMatchSnapshot();
  })
});