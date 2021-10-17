import Navbar from './components/NavBar/Navbar';
import Main from './components/Main/Main';
import { Top } from './styled/styled.app';

function App() {
  return (
    <Top>
      <Navbar open={false}/>
      <Main />
    </Top>
  );
}

export default App;
