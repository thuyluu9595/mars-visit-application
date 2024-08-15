import React from 'react';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import { useRouter } from 'next/router';
import ApplicationForm from '../pages/ApplicationForm'; // Ensure this path is correct

jest.mock('next/router', () => ({
    useRouter: jest.fn(),
}));

describe('ApplicationForm', () => {
    const mockPush = jest.fn();

    beforeEach(() => {
        useRouter.mockReturnValue({
            push: mockPush,
        });
    });

    it('renders the first step (Personal Info) correctly', () => {
        render(<ApplicationForm />);
        expect(screen.getByText(/Full Name/i)).toBeInTheDocument();
        expect(screen.getByText(/Date of Birth/i)).toBeInTheDocument();
        expect(screen.getByText(/Nationality/i)).toBeInTheDocument();
        expect(screen.getByText(/Email/i)).toBeInTheDocument();
        expect(screen.getByText(/Phone/i)).toBeInTheDocument();
    });

    it('validates the first step correctly', async () => {
        render(<ApplicationForm />);

        fireEvent.click(screen.getByText(/Next/i));

        await waitFor(() => {
            expect(screen.getByText(/Full name is required/i)).toBeInTheDocument();
            expect(screen.getByText(/Date of birth is required/i)).toBeInTheDocument();
            expect(screen.getByText(/Nationality is required/i)).toBeInTheDocument();
            expect(screen.getByText(/Email is required/i)).toBeInTheDocument();
            expect(screen.getByText(/Phone number is required/i)).toBeInTheDocument();
        });
    });

    it('proceeds to the next step when the first step is valid', async () => {
        render(<ApplicationForm />);

        await act(async () => {
            fireEvent.change(screen.getByLabelText(/Full Name/i), { target: { value: 'John Doe' } });
            fireEvent.change(screen.getByLabelText(/Date of Birth/i), { target: { value: '2020-08-16' } });
            fireEvent.change(screen.getByLabelText(/Nationality/i), { target: { value: 'United States' } });
            fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'john.doe@example.com' } });
            fireEvent.change(screen.getByLabelText(/Phone/i), { target: { value: '+1234567890' } });

            fireEvent.click(screen.getByText(/Next/i));
        });

        await waitFor(() => {
            expect(screen.getByLabelText(/Departure Date/i)).toBeInTheDocument();
            expect(screen.getByLabelText(/Return Date/i)).toBeInTheDocument();
        });
    });

    it('render the third step correctly', async () => {
        render(<ApplicationForm />);

        // Fill out the first step
        await act(async () => {
            fireEvent.change(screen.getByLabelText(/Full Name/i), { target: { value: 'John Doe' } });
            fireEvent.change(screen.getByLabelText(/Date of Birth/i), { target: { value: '1990-01-01' } });
            fireEvent.change(screen.getByLabelText(/Nationality/i), { target: { value: 'United States' } });
            fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'john.doe@example.com' } });
            fireEvent.change(screen.getByLabelText(/Phone/i), { target: { value: '+1234567890' } });

            fireEvent.click(screen.getByText(/Next/i));

        });

        // Fill out the second step
        await act(async () => {
            fireEvent.change(screen.getByLabelText(/Departure Date/i), { target: { value: '2024-12-01' } });
            fireEvent.change(screen.getByLabelText(/Return Date/i), { target: { value: '2024-12-10' } });
            fireEvent.change(screen.getByLabelText(/Accommodation/i), { target: { value: 'spaceHotel' } });
            fireEvent.change(screen.getByLabelText(/Special Requests/i), { target: { value: 'N/A' } });

            fireEvent.click(screen.getByText(/Next/i));
        });

        // Check for existing fields
        await waitFor(() => {
            expect(screen.getByLabelText(/Health Declaration/i)).toBeInTheDocument();
            expect(screen.getByLabelText(/Emergency Contact/i)).toBeInTheDocument();
            expect(screen.getByLabelText(/Medical Conditions/i)).toBeInTheDocument();

        });

    });

    it('submits the form and redirects on the last step', async () => {
        render(<ApplicationForm />);

        // Fill out the first step
        await act(async () => {
            fireEvent.change(screen.getByLabelText(/Full Name/i), { target: { value: 'John Doe' } });
            fireEvent.change(screen.getByLabelText(/Date of Birth/i), { target: { value: '1990-01-01' } });
            fireEvent.change(screen.getByLabelText(/Nationality/i), { target: { value: 'United States' } });
            fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'john.doe@example.com' } });
            fireEvent.change(screen.getByLabelText(/Phone/i), { target: { value: '+1234567890' } });

            fireEvent.click(screen.getByText(/Next/i));

        });

        // Fill out the second step
        await act(async () => {
            fireEvent.change(screen.getByLabelText(/Departure Date/i), { target: { value: '2024-12-01' } });
            fireEvent.change(screen.getByLabelText(/Return Date/i), { target: { value: '2024-12-10' } });
            fireEvent.change(screen.getByLabelText(/Accommodation/i), { target: { value: 'spaceHotel' } });
            fireEvent.change(screen.getByLabelText(/Special Requests/i), { target: { value: 'N/A' } });

            fireEvent.click(screen.getByText(/Next/i));
        });

        await act(async () => {

            fireEvent.change(screen.getByLabelText(/Health Declaration/i), { target: { value: 'true' } });
            fireEvent.change(screen.getByLabelText(/Emergency Contact/i), { target: { value: '+1234567890' } });

            fireEvent.click(screen.getByText(/Submit/i));
        });

        await waitFor(() => {
            expect(mockPush).toHaveBeenCalledWith('/success');
        });
    });
});
