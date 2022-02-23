import renderer from 'react-test-renderer';
import Header from '../components/Header';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Test header component', () => {
  it('header renders correctly', () => {
    const tree = renderer
      .create(
        <Router>
          <Header />
        </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
