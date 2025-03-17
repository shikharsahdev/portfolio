function Work() {
  const keyExperiences = [
    {
      logo: 'aiimsxicmr.webp',
      heading: 'ICMR X AIIMS',
      subheading: 'Consultant & Engineer',
      text: 'Indian Council of Medical Research & All India Institute of Medical Sciences; I had the opportunity to work with these esteemed institutions, *building projects aimed at improving healthcare through technology*. It was a humbling experience to play a part in such impactful work wherein, I helped build *solutions to introduce digitizaton of patient enrolment in Trauma centres in India*, under the guidance of Dr. Amit Gupta.',
      dates: 'March 2016 - Jun 2018'
    },
    {
      logo: 'samsung.svg',
      heading: 'Samsung',
      subheading: 'Figuring out as a Software Engineer',
      text: ' R&D Institute, Bengaluru; Right out of college. It was a significant milestone, but it also taught me a valuable lesson. I realized that the corporate world, while stable and predictable, *wasn\'t where I felt most alive*. The work felt monotonous, and I yearned for more significant impact and creative freedom. During those times, I was eager to leave as soon as my bond was over, primarily due to financial pressures at home. It was a challenging period, but it fueled my *determination to find a path that aligned with my passion and values.*',
      dates: 'July 2018 - August 2019'
    },
    {
      logo: '/shipsy.webp',
      heading: 'Shipsy',
      subheading: 'Full Stack Engineer',
      text: 'At Shipsy, I *wore many hats as a full-stack engineer*, helping shape the company\'s technological landscape. It was a journey filled with learning and growth.',
      dates: 'September 2019 - August 2020'
    },
    {
      logo: '/gc.svg',
      heading: 'Goldcast',
      subheading: 'Founding Team, Tech Lead',
      text: 'Joining Goldcast as its *second full-time employee* was a turning point. I\'ve been fortunate to be part of a team that went from *zero customers to a thriving enterprise* generating over $7 million in revenue. The journey continues to be an amazing learning experience.',
      dates: 'August 2020 - Present'
    }
  ];
  // return (
  //   <div>
  //     hello
  //   </div>
  // );
  return (
      <section className='max-w-5xl p-8'>
        <p className='text-xl text-[--primary] my-4'>
          I'm truly humbled by the journey I've been on. It all started in the 8th grade when I dipped my toes into web development as a hobby. Little did I know that this hobby would evolve into a lifelong passion for design and engineering.
        </p>
        <p className='text-xl'>
          From those early days, I've had the privilege of collaborating with some incredible organizations and startups.
        </p>
        <div className="flex flex-wrap py-20 gap-10 justify-start items-center">
          {keyExperiences.map(experience => (
            <img src={experience.logo} alt="Company Logo" className="w-40 p-2 grayscale hover:grayscale-0 transition-all"/>
          ))}
        </div>
        <div className="flex flex-col gap-24">
        {
          keyExperiences.reverse().map(experience => (
            <div className='flex flex-col gap-4'>
              <span>
                {/* { experience.logo && <img src={experience.logo} alt="Company Logo" className="max-w-xs"/> } */}
                <h2 className='text-3xl font-bold text-[--secondary] uppercase'>{experience.heading}</h2>
                <h3 className='text-xl mt-2 tracking-wide font-bold text-[--primary]  mb-4 uppercase'>{experience.subheading}</h3>
                <span className='text-md text-[--primary] font-bold uppercase'>{experience.dates}</span>
              </span>
              <p className='text-2xl  text-[--primary] font-light'>{
                experience.text.split('*').map((text, index) => (
                  <span key={index} className={index % 2 === 1 ? 'font-medium text-[--accent]' : ''}>{text}</span>
                ))
              }</p>
            </div>
          ))
        }
        </div>
        <p className="text-4xl mt-64">
          I invite you to explore my work, connect with me for mentorship, or collaborate on exciting ventures. Together, we can make technology more accessible and user-friendly.
        </p>
        <a href="mailto:shikharsahdev@gmail.com" className='text-4xl text-[--highlight] mt-4 mb-24 block underline'>Get in touch</a>
      </section>
  );  
}

export default Work;
