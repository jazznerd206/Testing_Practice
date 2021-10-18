import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from './App';

beforeEach(() => {
  render(<App />)
});

it('renders correctly', () => {
  const tree = renderer
    .create(<App />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('App renders main component with text', () => {
  const textElement = screen.getByTestId('main');
  expect(textElement).toBeInTheDocument();
});
