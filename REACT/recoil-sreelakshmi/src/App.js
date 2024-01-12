
import './App.css';
import{
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue
} from 'recoil';
import Home from './Recoils/Home';

function App() {
  return (
    <div className='app'>
      <h1>Recoil</h1>
      <Home />
    </div>
    
    
  );
};

export default App;
