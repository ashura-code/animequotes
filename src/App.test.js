import { render, screen } from '@testing-library/react';
import App from './App';

test('adhitya', () => {
  render(<App />);
  const linkElement = screen.getByText(/By Adhitya/i);
  expect(linkElement).toBeInTheDocument();
});
