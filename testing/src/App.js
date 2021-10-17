import Navbar from './components/NavBar/Navbar';
import Main from './components/Main/Main';
import { Top } from './styled/styled.app';

function App() {
  return (
    <Top>
      <Navbar />
      <Main />
    </Top>
  );
}

export default App;
