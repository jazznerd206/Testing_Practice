import { FighterJetDimensions } from '@styled-icons/fa-solid/FighterJet';
import { fireEvent, render, screen } from '@testing-library/react';
import Navbar from '../components/NavBar/Navbar';

beforeEach(() => {
    const setOpen = () => jest.fn();
    render(<Navbar open={false} setOpen={setOpen} />)
})

test('navbar renders in hamburger mode', () => {
    const navRight = screen.getByTestId('hamburger');
    expect(navRight).toBeInTheDocument();
})

test('navbar can switch from hamburger to hotdog', () => {
    const openOnClick = screen.getByTestId('open');
    fireEvent.click(openOnClick);
    // expect(setOpen).toHaveBeenCalled();
})