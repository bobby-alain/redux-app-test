import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { getStore } from './redux/store';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={getStore()}>
      <App />
    </Provider>
  );

  expect(getByText(/WITHDRAW/i)).toBeInTheDocument();
});
