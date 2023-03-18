import React, {useState} from 'react';
import './Screen.css'
import Updater from './components/Updater'
import userEvent from '@testing-library/user-event';

function App() {

  return (
    <div className='Screen'>
      <Updater />
    </div>
  );
}

export default App;
