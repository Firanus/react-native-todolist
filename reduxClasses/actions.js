export const types = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_COMPLETED_ITEMS: 'REMOVE_COMPLETED_ITEMS',
  REMOVE_ITEM: 'REMOVE_ITEM',
  TOGGLE_COMPLETED: 'TOGGLE_COMPLETED'
};

export const actionCreators = {
  add: (item) => {
    return {type: types.ADD_ITEM, payload: item}
  },
  removeCompleted: () => {
    return {type: types.REMOVE_COMPLETED_ITEMS}
  }
};