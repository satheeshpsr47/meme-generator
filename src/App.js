import './App.css';
import Header from './componenets/header';
import Meme from './componenets/meme';
import Image from './componenets/images';
import Newimage from './componenets/prac';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Meme />
      <Image />
      <Newimage/>
    </div>
  );
}

