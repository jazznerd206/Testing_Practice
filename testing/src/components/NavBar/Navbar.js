import React, { useState, useEffect } from 'react';
import { NavTop, NavTopLeft, NavTopRight, Hamburger, Hotdog } from '../../styled/styled.nav';

function Navbar({open}) {
    return (
        <NavTop data-testid="nav" >
            <NavTopLeft data-testid="nav-left" >
                logo
            </NavTopLeft>
            {open === false ? 
                <NavTopRight data-testid="hamburger" name="hamburger" >
                    <Hamburger data-testid='open' onClick={() => open = true}/>
                </NavTopRight>
                    :
                <NavTopRight data-testid="hotdog" name="hotdog" onClick={() => open = false}>
                    <Hotdog data-testid='close' onClick={() => open = true}/>
                </NavTopRight>
            }
        </NavTop>
    )
}

export default Navbar
