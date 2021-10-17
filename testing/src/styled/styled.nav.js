import styled from 'styled-components';
import { Hamburger as HB, Hotdog as HD } from '@styled-icons/fa-solid'

export const NavTop = styled.div`
    margin: 0;
    padding: 0;
    width: 100%;
    max-height: 10vh;
    display: flex;
    flex-direction: row;
    flex: 1;
    border-bottom: 1px solid;
`

export const NavTopRight = styled.div`
    margin: 0;
    padding: 0;
    padding-right: 2em;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    flex: 1;
`

export const NavTopLeft = styled.div`
    margin: 0;
    padding: 0;
    padding-left: 2em;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex: 0;
`

export const Hamburger = styled(HB)``

export const Hotdog = styled(HD)``