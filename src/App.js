import './App.css';
import MainScreen from './components/MainScreen';
import { useState } from 'react';

// No good way of doing enumeration in JS?
const Pages={
  Home: 1,
  About: 2,
  Project: 3,
  BadApple: 4,
}

function App() {
  // Destructuring state and its setter? odd
  // Returns two things:
  //  Current state and the setter function that lets us update the state to another value and trigger a re-render  
  const [page, setPage] = useState(Pages.Home);
  return (
    <MainScreen />
  );
}

export default App;
