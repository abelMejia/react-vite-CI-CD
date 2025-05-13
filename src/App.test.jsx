import { render, screen } from '@testing-library/react';
import App from './App';

test('renderiza correctamente', () => {
  render(<App />);
  expect(screen.getByText("Vite + React")).toBeInTheDocument();
});
