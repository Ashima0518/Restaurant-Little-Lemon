import { render, screen } from "@testing-library/react";
import { act } from 'react'; // Import act from react
import BookingForm from './BookingForm';
import ReactTestUtils from 'react-dom/test-utils';

test('Renders the BookingForm heading', () => {
    act(() => {
        render(<BookingForm availableTimes={[]} dispatch={() => {}} handleBooking={() => {}} />);
    });
    const headingElement = screen.getAllByText("Reserve a Table")[0]; // Use getAllByText and select the first element
    expect(headingElement).toBeInTheDocument();
});
