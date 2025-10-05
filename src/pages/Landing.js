
function Landing() {
  return (
  <section className='header w-full flex justify-center'>
    <div className='min-h-screen max-w-6xl box-border px-8 py-4 flex flex-col justify-center md:py-6'>
      <div className='space-y-16 text-center'>
        <div className='space-y-12'>
          <div className="flex justify-center mb-8">
            <div className="w-40 h-40 md:w-48 md:h-48 bg-white/60 rounded-full flex items-end justify-center overflow-hidden pb-0">
              <img 
                src="/memojis/heart.png" 
                alt="Shikhar" 
                className="w-32 h-32 md:w-40 md:h-40 object-contain"
              />
            </div>
          </div>
          <div className="space-y-0 md:space-y-0">
            <h1 className='text-[--text-primary] text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-none'>
              <span className="">I'm</span> <span className="gradient-name font-medium">Shikhar</span>
            </h1>
            <h2 className='text-[--text-primary] text-2xl md:text-3xl lg:text-4xl font-light tracking-tight leading-tight max-w-4xl mx-auto !mt-6 md:mt-0'>
              A <span className="gradient-text font-medium">Product-Focused Engineer</span> building the future through <span className="gradient-text font-medium">technology, design, and storytelling</span>
            </h2>
          </div>
        </div>
        
        <div className='max-w-2xl mx-auto space-y-8'>
          <p className='text-[--text-secondary] text-xl md:text-2xl leading-loose font-light'>
            From hackathon wins to scaling a company from zero to <span className="text-[--accent-primary] font-medium">$15M ARR</span> — I believe in the power of thoughtful product creation that combines engineering depth with design thinking and user empathy.
          </p>
          
          <div className='pt-6'>
            <p className='text-[--text-tertiary] text-lg md:text-xl leading-loose font-light'>
              Currently building the future of events at <span className="text-[--accent-primary]">Goldcast</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  );  
}

export default Landing;
