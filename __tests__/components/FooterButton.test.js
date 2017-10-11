import React from 'react';
import FooterButton from '../../components/FooterButton';

import renderer from 'react-test-renderer';

it('renders without c', () => {
  const emptyTestFunction = () => {};
  const FooterText = "Test Text";

  const rendered = renderer.create(<FooterButton buttonHandler={emptyTestFunction()}>{FooterText}</FooterButton>).toJSON();
  expect(rendered).toMatchSnapshot();
});
