import React from "react";

const styles = {
  headerThree: {
    fontFamily: 'sans-serif'
  },
  anchor: {
    fontSize: '1.2rem',
    color: 'yellow'
  }
}


const projects = [
  {
    title: 'Wanderlust',
    github: 'https://github.com/TMortara/Travel-Blog',
    deploy: 'https://quiet-everglades-33653.herokuapp.com/',
    pic: 'wanderlust.png',
    id: 1,
  },
  {
    title: 'Clicky Circle',
    github: 'https://github.com/rmob/group-project-Game',
    deploy: 'https://rmob.github.io/group-project-Game/',
    pic: 'clicky-circle.png',
    id: 2,
  },
  {
    title: 'TechBlog',
    github: 'https://github.com/rmob/challenge-14_tech-blog',
    deploy: 'https://rmob.github.io/challenge-14_tech-blog/',
    pic: 'techblog.png',
    id: 3,
  },
  {
    title: 'RenAIssance Gallery',
    github: 'https://github.com/fabien1313/Robotic_RenAIssance',
    deploy: 'https://robotic-renaissance.herokuapp.com/',
    pic: 'robotgallery.png',
    id: 4,
  },
  {
    title: 'My Portfolio',
    github: 'https://github.com/rmob/vite-build-resume',
    deploy: 'dlink4',
    pic: 'portfolio-scrnshot.png',
    id: 5,
  },
  {
    title: 'CompanyDb',
    github: 'https://github.com/rmob/challenge-12-Employee-Tracker',
    deploy: 'dlink6',
    pic: 'companyDB.png',
    id: 6,
  },
]

export function Project(props) {
  return <div className='project-view'>
    
    <h3 style={styles.headerThree}>{props.title}</h3>
    <img className='picture' src={props.pic} alt={`${props.title}-view`}/>
    <div>
    <a style={styles.anchor} href={props.github}>repo</a>
    <a style={styles.anchor} href={props.deploy}>site</a>
    </div> 
  </div>
}

export default function Portfolio() {
  return (
    <>
      <div className="portfolio-container">
      <div className="project-view">
      <h2>Portfolio</h2>
      
      {projects.map((project) => <Project title={project.title} github={project.github} deploy={project.deploy} pic={project.pic} key={project.id} /> )}
    </div>
    </div>
    </>
  );
}