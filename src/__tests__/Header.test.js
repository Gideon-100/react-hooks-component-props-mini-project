import '@testing-library/jest-dom'; // ✅ Add this line!
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

test('renders the blog name', () => {
  render(<Header name="Overreacted" />);
  expect(screen.getByText("Overreacted")).toBeInTheDocument();
});

