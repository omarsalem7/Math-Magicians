import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Calculator from '../components/Calculator';
import '@testing-library/jest-dom';

describe('Test Calculator component', () => {
  it('calc renders correctly', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Test Calculator buttons', () => {
  it('button +', () => {
    render(<Calculator />);
    const buttonElement = screen.getByText('+');
    expect(buttonElement).toBeInTheDocument();
  });

  it('button 3', () => {
    render(<Calculator />);
    const buttonElement = screen.getByText('3');
    expect(buttonElement).toBeEnabled();
  });
});
