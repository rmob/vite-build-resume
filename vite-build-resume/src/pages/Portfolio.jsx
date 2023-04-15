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
    pic: 'assets/wanderlust.png',
    id: 1,
  },
  {
    title: 'Clicky Circle',
    github: 'https://github.com/rmob/group-project-Game',
    deploy: 'dlink2',
    pic: 'assets/clicky-circle.png',
    id: 2,
  },
  {
    title: 'third',
    github: 'glink3',
    deploy: 'dlink3',
    pic: '',
    id: 3,
  },
  {
    title: 'fourth',
    github: 'glink4',
    deploy: 'dlink4',
    pic: '',
    id: 4,
  },
  {
    title: 'fifth',
    github: 'glink4',
    deploy: 'dlink4',
    pic: '',
    id: 5,
  },
  {
    title: 'CompanyDb',
    github: 'https://github.com/rmob/challenge-12-Employee-Tracker',
    deploy: 'dlink6',
    pic: 'assets/companyDB.png',
    id: 6,
  },
]

export function Project(props) {
  return <div>
    
      
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
      <div className="container">
      <div className="project-view">
      <h2>Portfolio</h2>
      
      {projects.map((project) => <Project title={project.title} github={project.github} deploy={project.deploy} pic={project.pic} key={project.id} /> )}
    </div>
    </div>
    </>
  );
}