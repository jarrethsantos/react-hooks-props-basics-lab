import React from "react";
import Links from "./Links";
//app needs to pass down github and linkedin and bio

//if prop of bio is passed, display in p tag
//else dont display p

// {isBio ? Bio user : null }


function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {props.bio && <p>{props.bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.links.github} linkedin={props.links.linkedin} />
    </div>
  );
}

export default About;
