import { useState } from 'react';
import firstWords from './database/firstWords.json';
import './index.css';

import { Card } from './components/Card'
import { Navigation } from './components/Navigation';
import { Modal } from './components/Modal';

const { start } = firstWords;

function App() {

  const [isModal, setModal] = useState(false);

  return (
    <div className="App">
      <div className='header'>
        <Navigation setModal={setModal} />
        <Modal words={start} setModal={setModal} isModal={isModal} />
      </div>


      <div className='main'>
        <Card words={start}/>
      </div>

      <div className='footer'>
      </div>

    </div>
  );
}

export default App;
