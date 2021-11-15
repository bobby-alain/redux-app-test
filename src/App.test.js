import React from 'react';
import { render, screen } from '@testing-library/react';

import { Provider } from 'react-redux';
import { getStore } from './redux/store';
import App from './App';

test.skip('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={getStore()}>
      <App />
    </Provider>
  );

  expect(getByText(/WITHDRAW/i)).toBeInTheDocument();
});

describe('Async component', () => {
  test('should renders name from api', async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: () =>
        Promise.resolve({
          name: 'John',
        }),
    });
    render(
      <Provider store={getStore()}>
        <App />
      </Provider>
    );
    const name = await screen.queryByText('name');
    expect(name);
  });
});
