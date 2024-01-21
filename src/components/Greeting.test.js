import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Greeting from './Greeting';

describe('Greeting component', () => {
  test('renders "Greetings!" as a text', () => {
    render(<Greeting />);
    const greetingElement = screen.getByText('Greetings!');
    expect(greetingElement).toBeInTheDocument();
  });

  test('renders "Not changed" if the button is NOT clicked', () => {
    render(<Greeting />);
    const outputElement = screen.getByText(/Not change/i);
    expect(outputElement).toBeInTheDocument();
  });

  test('renders "Changed!" if the button is clicked', () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    // Assert
    const outputElement = screen.getByText(/Changed/i);
    expect(outputElement).toBeInTheDocument();
  });
});
