import React from "react";


const Skills = () => {
  return (
    <section className="sec edu" id="skills">
      <div className="container skills">
        <div className="scroller" data-animated="true">
          <ul className="scroller_content">
            <li>
              <div><i className="fa-brands fa-github"></i></div>
              Github
            </li>
            <li>
              <div><i className="fa-brands fa-flickr"></i></div>
              Flickr
            </li>
            <li>
              <div><i className="fa-brands fa-html5"></i></div>
              HTML
            </li>
            <li>
              <div><i className="fa-brands fa-css3-alt"></i></div>
              CSS
            </li>
            <li>
              <div><i className="fa-brands fa-js"></i></div>
              JS
            </li>
            <li>
              <div><i className="fa-brands fa-python"></i></div>
              Python
            </li>
            <li>
              <div><i className="fa-brands fa-java"></i></div>
              Java
            </li>
            <li>
              <div><i className="fa-brands fa-figma"></i></div>
              Figma
            </li>
            <li>
              <div><i className="fa-brands fa-git-alt"></i></div>
              Git
            </li>

            {/* duplicate for infinite scroll */}
            <li>
              <div><i className="fa-brands fa-github"></i></div>
              Github
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
