import { render, screen } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  render(<App />)
});

test('App renders main component with text', () => {
  const textElement = screen.getByTestId('main');
  expect(textElement).toBeInTheDocument();
});
