import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from '../components/Greeting';

describe('Greeting component', () => {
  test('renders Hello world text', () => {
    // Arrange
    render(<Greeting />);
    // Act

    const helloText = screen.getByText('Hello test');
    // Assert
    expect(helloText).toBeInTheDocument();
  });

  test('should render Same text if the button not clicked', () => {
    render(<Greeting />);
    const output = screen.getByText('Same text', { exact: false });
    expect(output).toBeInTheDocument();
  });

  test('should render Woho you change the text if the button not clicked', () => {
    // Arrange
    render(<Greeting />);
    // Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    // Assert
    const buttonOutPut = screen.getByText('Woho you change the text');
    expect(buttonOutPut).toBeInTheDocument();
  });

  test('should not render Woho', () => {
    render(<Greeting />);
    // Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    // assert
    const checkIfTestNotThere = screen.queryByText('Same text', {
      exact: false,
    });
    expect(checkIfTestNotThere).toBeNull();
  });
});
