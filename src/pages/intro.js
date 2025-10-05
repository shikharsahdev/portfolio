import { useEffect, useState } from "react";

function Intro() {
  const messages = [
    "Hello!",
    "Namaste!",
    "Welcome!",
    "Building the Future",
    "Creating Impact",
    "Solving Problems",
    "Making a Difference",
    "Shikhar Sahdev"
  ];
  const [messageIndex, setMessageIndex] = useState(0); 
  useEffect(()=> {
    const interval = setInterval(() => {
      setMessageIndex((val) => {
        const nextIndex = val + 1;
        // Stop at the last message and don't loop
        if (nextIndex >= messages.length) {
          return val; // Stay at the last message
        }
        return nextIndex;
      });
    }, 450); // 0.45 seconds per word for optimal pace

    return () => {
      clearInterval(interval);
    };
  },[messages.length]);

  return (
    <section className='bg-[--background] text-[--text-primary] flex h-screen w-screen justify-center items-center header'>
      <div className='text-center space-y-4'>
        <h1 className="text-2xl md:text-4xl font-semibold uppercase tracking-widest leading-none">
          <span className="gradient-text">
            { messages[messageIndex] || messages[0] }
          </span>
        </h1>
      </div>
    </section>
  );  
}

export default Intro;
