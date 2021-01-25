import { render, screen } from '@testing-library/react';
import App from './App';

test('renders search bar', () => {
  render(<App />);
  const searchBox = screen.getByRole('textbox');
  expect(searchBox).toBeInTheDocument();
  const searchBtn = screen.getByRole('button');
  expect(searchBtn).toBeInTheDocument();
});
