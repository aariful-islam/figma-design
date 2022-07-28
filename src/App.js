
import './App.css';
import Header from '../src/components/Home/Header'
import Banner from './components/Banner/Banner';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <About></About>
      
     
      <Routes>
        <Route path='/' element={<Banner></Banner>}> </Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
      <Footer></Footer>
    
     
    </div>
  );
}

export default App;
