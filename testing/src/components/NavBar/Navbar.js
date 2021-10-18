import React, { useState, useEffect } from 'react';
import { NavTop, NavTopLeft, NavTopRight, Hamburger, Hotdog } from '../../styled/styled.nav';

function Navbar({open, setOpen}) {
    return (
        <NavTop data-testid="nav" >
            <NavTopLeft data-testid="nav-left" >
                logo
            </NavTopLeft>
            {open === false ? 
                <NavTopRight data-testid="hamburger" name="hamburger" >
                    <Hamburger data-testid='open' onClick={() => setOpen(true)}/>
                </NavTopRight>
                    :
                <NavTopRight data-testid="hotdog" name="hotdog" >
                    <Hotdog data-testid='close' onClick={() => setOpen(false)}/>
                </NavTopRight>
            }
        </NavTop>
    )
}

export default Navbar
