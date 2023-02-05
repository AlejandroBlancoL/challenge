import './App.css';
import Nav from './components/Nav.jsx'
import Cards from './components/Cards.jsx';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <Nav></Nav>
    <Cards></Cards>
    <h1 className='texto1'>What items to store?</h1>
    <p className='texto2'>Select which items you wish to store before moving to your new home. We’ll keep ’em safe!</p>
    
      <Footer></Footer>
    </div>
  );
}

export default App;
