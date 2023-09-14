import './App.css';
import Header from './Components/Header';
import Grid from './Components/Grid';
import Footer from './Components/Footer';

import { createGrid } from './game';

function App() {
  return (
    <div className="App">
      <Header title="USERFACET"/>
      <Grid/>
      <Footer/>
    </div>
  );
}

export default App;
