import React, { useState, useEffect } from 'react';
import { NavTop, NavTopLeft, NavTopRight } from '../../styled/styled.nav';

function Navbar() {
    return (
        <NavTop data-testid="nav" >
            <NavTopLeft data-testid="nav-left" >
                logo
            </NavTopLeft>
            <NavTopRight data-testid="nav-right" >
                menu
            </NavTopRight>
        </NavTop>
    )
}

export default Navbar
