import { render, screen } from "@testing-library/react";
import { act } from 'react'; // Import act from react
import App from './App';

test('renders Reserve a Table button', () => {
    act(() => {
        render(<App />);
    });
    const buttonElement = screen.getByText(/reserve a table/i);
    expect(buttonElement).toBeInTheDocument();
});
