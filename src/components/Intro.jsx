import React from 'react';

function Intro() {
   return (
      <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
         <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">John Nario</h1>
         <p className="text-base md:text-xl mb-3 font-medium">Computer Engineering Student</p>
         <p className="text-sm max-w-xl mb-6 font-bold">
         Hello! I'm a passionate Computer Engineering student at York University. As I embark on my journey, I'm excited to find my first job within the industry and contribute my skills and knowledge to meaningful projects. 
            <br />
            To showcase my work and skills, I've crafted this portfolio website using React.js, Tailwind CSS, and Vite. It serves as a digital canvas where I exhibit my projects, experiences, and interests in the field of computer engineering. I'm continually expanding my skill set, exploring new technologies, and seeking opportunities to collaborate with like-minded individuals and organizations.
         </p>
      </div>
   )
}

export default Intro;