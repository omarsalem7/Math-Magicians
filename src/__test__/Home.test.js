import renderer from 'react-test-renderer';
import Home from '../components/Home';

describe('test home component', () => {
  it('Home renders correct', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
