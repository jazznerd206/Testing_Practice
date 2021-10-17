import { fireEvent, render, screen } from '@testing-library/react';
import Navbar from '../components/NavBar/Navbar';

beforeEach(() => {
    render(<Navbar open={false} />)
})

test('navbar renders in hamburger mode', () => {
    const navRight = screen.getByTestId('hamburger');
    expect(navRight).toBeInTheDocument();
})

test('navbar can switch from hamburger to hotdog', () => {
})