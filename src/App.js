import './App.css';
import Header from './components/Header';
import Filters from './components/Filters';
import { GlobalProvider } from './context/store';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <Filters />
      <hr/>
    </GlobalProvider>
  );
}

export default App;