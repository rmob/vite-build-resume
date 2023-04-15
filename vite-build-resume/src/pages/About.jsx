import React from 'react';
import face from '/public/my-face.png'


export default function About() {
  return (
    <>
    <div className='container'>
        <div><img src={face} id='face-avatar' alt='avatar'/></div>
    <h2 className='back-black'>About me</h2>
      <p className='about-info back-black'>
        Hi my name is Riley.  I'm a full stack web-developer now! Thanks for looking at my portfolio page.
      </p>
    </div>
    </>
  );
}