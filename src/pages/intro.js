import { useEffect, useState } from "react";

function Intro() {
  const messages = [...Array(4).fill("Hello!"),...Array(4).fill("Namaste!"), "Sat Sri Akal!","Sat Sri Akaal!", "Sat Sri Akaaal!", "Sat Sri Akaaaal!", ...Array(8).fill("Sat Sri Akaaaaaal!") ];
  const [messageIndex, setMessageIndex] = useState(0); 
  useEffect(()=> {
    const interval = setInterval(() => {
      setMessageIndex((val) => val + 1);
    }, 200);

    return () => {
      clearInterval(interval);
    };
  },[]);

  return (
    <section className='bg-[--primary] text-[--accent] p-8 py-16 flex h-screen w-screen justify-center items-center md:py-24 header'>
      <h1 className="uppercase text-3xl font-bold whitespace-nowrap md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl">{ messages[messageIndex % messages.length] }</h1>
    </section>
  );  
}

export default Intro;
