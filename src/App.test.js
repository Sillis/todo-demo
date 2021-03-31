import { render, screen } from '@testing-library/react';
import App from './App';

test('Render dummy text', () => {
  render(<App />);
  const textElement = screen.getByText(/supermarket/i);
  expect(textElement).toBeInTheDocument();
});