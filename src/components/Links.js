import React from "react";
//h3 element with text of links
//a element with href and text content set to url of users github link
//a element with href and text content set to url of user linkedin Link

function Links(props) {
    return (
      <div>
        <h3>Links</h3>
        <a href={props.github}>{props.github}</a>
        <a href={props.linkedin}>{props.linkedin}</a>
      </div>
    );
  }


export default Links;