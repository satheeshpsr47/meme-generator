import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

export default function Meme(){
  return (
    <div className='meme-container'>
      <App />
    </div>
  )
}

root.render(
    <Meme />
);


