import React from 'react';
import profilePic from '/IMG_4890.jpg'
import email from '/email.png'
import linkedin from '/linkedin.png'
export default function Info (){
    return(
        <>
            <img src={profilePic} className="profile-pic"/>
            <h1 className="name">Oyundari Bayasgalan</h1>
            <h2 className="title">Front-end developer</h2>
            <button className="emailButton">
                <img src={email}/>
                Email
            </button>
            <button className="linkedInButton">
                <img src={linkedin}/>
                Linkedin
            </button>
        </>
    )
}
