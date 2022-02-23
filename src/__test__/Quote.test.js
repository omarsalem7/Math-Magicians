import renderer from 'react-test-renderer';
import Quote from '../components/Quote';

describe('Test Quote component', () => {
  it('Quote renders correctly', () => {
    const tree = renderer.create(<Quote />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
