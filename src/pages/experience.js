import { useEffect, useState } from "react";

const experienceData = [
  {
    title: "Frontend Lead @ Goldcast",
    description: "I had been freelancing throughout college, worked with 2 promising startups Dhodu and Mozzo in my second year giving me immense exposure. I loved to solve problems and provide end to end solutions, and getting to see people use and appreciate them gave me a lot of motivation and drive to learn and build more.",
    image: process.env.PUBLIC_URL + '/goldcast.png'
  },
  {
    title: "Full Stack Developer @ Shipsy",
    description: "I had been freelancing throughout college, worked with 2 promising startups Dhodu and Mozzo in my second year giving me immense exposure. I loved to solve problems and provide end to end solutions, and getting to see people use and appreciate them gave me a lot of motivation and drive to learn and build more.",
    image: process.env.PUBLIC_URL + '/shipsy.png'
  },
  {
    title: "Product & Developer @ AIIMSxICMR",
    description: "I had been freelancing throughout college, worked with 2 promising startups Dhodu and Mozzo in my second year giving me immense exposure. I loved to solve problems and provide end to end solutions, and getting to see people use and appreciate them gave me a lot of motivation and drive to learn and build more.",
    image: process.env.PUBLIC_URL + '/goldcast.png'
  }
]

function Experience() {
  return (
    <div className="container experience">
      {
        experienceData.map((data) => (
          <div class="experienceTile">
          <div class="text">
            <div class="h">
              {data.title}
            </div>
            <p>
              {data.description}
            </p>
          </div>
          <img src={data.image} />
        </div>
        ))
      }
      
    </div>
  )
}

export default Experience;