import './App.css';
import Header from './components/Header';
import Filters from './components/Filters';
import Card from './components/Card';
import { GlobalProvider } from './context/store';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <Filters />
      <hr/>
      <Card />
    </GlobalProvider>
  );
}

export default App;