import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

describe('Greeting component', () => {
  test('renders Greetings! as a text', () => {
    render(<Greeting />);
    const greetingElement = screen.getByText('Greetings!');
    expect(greetingElement).toBeInTheDocument();
  });
});
