
function Landing() {
  return (
  <section className='header w-full flex justify-center'>
    <div className='min-h-screen max-w-5xl box-border p-8 py-16 flex flex-col justify-between md:py-24'>
      <div  className='flex-1 relative'>
        <span className='sticky top-16 md:top-24 block'>
          <h1 className='text-[--background] text-3xl tracking-wide font-medium md:text-5xl'>I'm <b className="text-[--accent]">Shikhar</b>,</h1>
          <h2 className='mt-8 text-[--background] text-3xl tracking-wide leading-tight font-thin md:text-5xl'>and I believe <i className="text-[--accent] font-medium">impactful products are built with purpose</i>—through <b className="text-[--secondary] font-semibold">collaboration, design, engineering, and innovation</b>, I help bring them to life.</h2>
        </span>
      </div>
      <p className='my-4 mt-20 text-xl font-light text-[--background] md:text-3xl'>I build with purpose—bridging design, engineering, and innovation to create products that matter. From ideation to execution, I thrive in crafting seamless, user-driven experiences. Whether designing intuitive interfaces, engineering scalable systems, or pushing the boundaries of innovation, I believe in the power of thoughtful creation. Every product I have touched is shaped with intent, ensuring it not only functions but resonates.</p>
    </div>
      </section>
  );  
}

export default Landing;
