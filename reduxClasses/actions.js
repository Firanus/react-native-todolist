export const types = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_COMPLETED_ITEMS: 'REMOVE_COMPLETED_ITEMS',
  REMOVE_ITEM: 'REMOVE_ITEM',
  TOGGLE_COMPLETED: 'TOGGLE_COMPLETED'
};

export const actionCreators = {
  add: (itemTitle) => {
    return {type: types.ADD_ITEM, payload: itemTitle}
  },
  removeCompleted: () => {
    return {type: types.REMOVE_COMPLETED_ITEMS}
  }
};