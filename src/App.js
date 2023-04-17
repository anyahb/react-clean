import './assets/css/App.css';
import Header from './components/Header';
import Intro from './components/Intro';
import Actions from './components/Actions';
import Recycle from './components/Recycle';
import Facts from './components/Facts';
import Footer from './components/Footer';
import Burger from './components/Burger'

function App() {
  return (
      <>
          <Header/>
          <Intro/>
          <Actions/>
          <Recycle/>
          <Facts/>
          <Footer/>
      </>
  );
}

export default App;
