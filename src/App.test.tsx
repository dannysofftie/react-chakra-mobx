import { render, screen } from '@testing-library/react';
import App from './App';

describe('test <App />', () => {
  test('should have expected text', () => {
    render(<App />);
    const linkElement = screen.getByText(/Write once/i);
    expect(linkElement).toBeInTheDocument();
  });
});
