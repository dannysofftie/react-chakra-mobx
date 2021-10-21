import { waitFor } from '@testing-library/react';
import App from './App';
import { render } from './test-utils';

describe('test <App />', () => {
  test('should have expected', async () => {
    const { getByText } = render(<App />);
    await waitFor(() => {
      expect(getByText(/Write once/i)).toBeInTheDocument();
    });
  });
});
