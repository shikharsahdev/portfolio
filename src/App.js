// import { useEffect, useState } from 'react';
import './App.scss';
// import Intro from './pages/Intro';
import Landing from './pages/Landing';
import Work from './pages/Work';
import StarryBackground from './components/StarryBackground';

function App() {
  // const [loading, setLoading] = useState(true);
  
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setLoading(false);
  //   }, 3600);
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  // Prevent scrolling when intro is showing
  // useEffect(() => {
  //   if (loading) {
  //     document.body.style.overflow = 'hidden';
  //   } else {
  //     document.body.style.overflow = 'unset';
  //   }
  //   return () => {
  //     document.body.style.overflow = 'unset';
  //   };
  // }, [loading]);

  return (
    <div className='text-[--primary] flex flex-col items-center max-w-screen'>
      <StarryBackground />
      {/* Always render all content for SEO, but control visibility */}
      {/* <div className={loading ? 'invisible' : 'visible transition-opacity duration-1000'}> */}
      <div className='visible transition-opacity duration-1000'>
        <Landing />
        <Work />
      </div>
      {/* Show intro overlay during loading
      {loading && (
        <div className='fixed inset-0 z-50'>
          <Intro />
        </div>
      )} */}
    </div>
  );  
}

export default App;
