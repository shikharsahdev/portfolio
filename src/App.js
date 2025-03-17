import { useEffect, useState } from 'react';
import './App.scss';
import Intro from './pages/Intro';
import Landing from './pages/Landing';
import Work from './pages/Work';
// function
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(()=> {
    const interval = setInterval(() => {
      setLoading(false);
    }, 3600);
    return () => {
      clearInterval(interval);
    };
  })

  if (loading) {
    return <Intro />;
  }
  return (
    <div className='bg-[--background] text-[--primary] flex flex-col items-center max-w-screen'>
      <Landing />
      <Work />
    </div>
  );  
}

export default App;
