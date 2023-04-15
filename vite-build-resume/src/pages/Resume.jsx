import React from "react";

const styles = {
  download: {
    color: 'red',
    fontSize: 18
  },
  margin: {
    marginTop: 50,
    fontFamily: "sans-serif",
    backgroundColor: 'whitesmoke',
    color: 'black',
    fontSize: 15
  }
}

export function SkillsList(props) {
  return <li className="skills-list">{props.set}</li>;
}

export default function Resume() {
  const skills = ['React /', 'Node /', 'Javascript /', 'HTML /', 'CSS'];
  
  return (
    <div className="container">
      <h1 style={styles.margin}>Download my resume<a style={styles.download} href="public/rmob_resume.rtf" download="resume-riley">here</a></h1>
      
      <h2>Web-dev Proficiencies:</h2>
      <ul className="unordered-list back-black">
      {skills.map((skill) => <SkillsList set={skill} />)}
      </ul>
    </div>
  );
}