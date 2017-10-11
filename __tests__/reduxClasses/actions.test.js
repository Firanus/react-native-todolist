import { types, actionCreators } from '../../reduxClasses/actions'

test('Action types are correct', () => {
  expect(types).toMatchSnapshot();
});

describe('The actionCreators object', () => {
  test('creates an add action', () => {
    const itemTitle = 'My Test Task';
    expect(actionCreators.add(itemTitle)).toMatchSnapshot();
  });

  test('creates a removeCompleted action', () => {
    expect(actionCreators.removeCompleted()).toMatchSnapshot();
  })
});
