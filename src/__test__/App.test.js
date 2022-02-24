import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import App from '../App';

test('check if app contain this test', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Welcome to our page/i);
  expect(linkElement).toBeInTheDocument();
});

describe('Testing App component', () => {
  it('App renders correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
