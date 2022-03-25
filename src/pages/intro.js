import { useEffect, useState } from "react";

function Intro() {
  return (
    <div className="container intro">
      <div class="text">
        <div class="h">
          Hi, I'm Shikhar and I love building aesthetically pleasing solutions for digital platforms
        </div>
        <p>
          Born and raised in Delhi, India and currently living in Bangalore, I am an experience focused Frontend Engineer with a passion for building beautiful, performant, and intuitive user experiences.
        </p>
        <p>
          My journey began at the age of 14 when I was introduced to Macromedia Flash. I quickly fell in love with the technology and quickly began to learn how to create animations, and even games! 
          It gave me opporunities to represent my school, DPS Rohini, in numerous tech competitions. Eventually in 9th grade, I began web and graphic development and performing well in the Delhi school circuit.
        </p>
        <p>
          I was so in love with the power technology gave to build experiences, and built a really strong hold on development, specially on Frontend. 
          Went on to make my first professional website at the age of 16 and be the President of my school's highly reputed Computer Club (XINO) in the last year of high school.
        </p>
        <p>
          With the clear aim to stay close to technology and build more complex solutions working on scale I joined Delhi Technological University in 2014 to pursue Computer Science Engineering.
        </p>
        <p>
          I had been freelancing throughout college,
          worked with 2 promising startups Dhodu and Mozzo in my second year giving me immense exposure.
          I loved to solve problems and provide end to end solutions, and getting to see people use and appreciate them gave me a lot of motivation and drive to learn and build more. 
        </p>
        <p>
          Did my internship with Samsung R&D Institute, Bangalore and also began working with AIIMS to build a web application for the first time. This was a great opportunity to build something that makes a difference.
          I developed a responsive web application for them to move off paper for patient registrations and analysis. Handling product, design and development was a lot of fun.
        </p>
        <p>
          In my 4th year, I worked with ICMR, to build a similar product as for AIIMS with a wider reach for all affiliated governments hospitals. I had to fly to various hospitals in India to train and take feedback from
          users of hospital staff. It was a great experience to build something that makes a difference. 
        </p>
      </div>
      <img src={process.env.PUBLIC_URL + '/intro.jpeg'} />
    </div>
  )
}

export default Intro;