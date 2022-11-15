import { useEffect } from 'react';
import './App.css';
import Headers from './components/Headers';
import Body from './components/Body';


function App() {
  useEffect(():void=>{
    document.title = "Git-Stare : Quick peek into github"
  })
  return (
    <div className='main-container'>
      <Headers/>
      <Body/>
    </div>
  );
}

export default App;
