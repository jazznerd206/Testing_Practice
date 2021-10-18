import React, { useState, useEffect } from 'react'
import Navbar from './components/NavBar/Navbar';
import Main from './components/Main/Main';
import { Top } from './styled/styled.app';

function App() {
  const [ open, setOpen ] = useState(false);
  return (
    <Top>
      <Navbar open={open} setOpen={setOpen}/>
      <Main />
    </Top>
  );
}

export default App;
