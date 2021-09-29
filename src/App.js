
import './App.css';
import Card from './components/Card';
import "animate.css"
import NavBar from './components/NavBar';

import Title from './components/Title';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <div className="container">
        <NavBar/>
        <Title/>
        <Card/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
