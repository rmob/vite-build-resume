import React from "react";

const styles = {
  download: {
    color: 'red',
    fontSize: 18
  },
  margin: {
    display: 'flex',
    marginTop: '50px',
    fontFamily: "sans-serif",
    color: 'whitesmoke',
    fontSize: '1rem',
    justifyContent: 'center',
    padding: '1rem',
    boxShadow: '2px 2px 4px white',
  }
}

export function SkillsList(props) {
  return <li className="skills-list">{props.set}</li>;
}

export default function Resume() {
  const skills = ['React /', 'Node /', 'Javascript /', 'HTML /', 'CSS'];
  
  return (
    <div className="container">
      <h1>Web-dev Proficiencies:</h1>
      <ul className="back-black">
      {skills.map((skill) => <SkillsList set={skill} />)}
      </ul>
      <h2 style={styles.margin}><a style={styles.download} href="public/rmob_resume.rtf" download="resume-riley" id='downloadResume'>Download</a> my resume</h2>
      
    </div>
  );
}