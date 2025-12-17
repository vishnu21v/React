import React from "react";

const Footer = ({ className }) => {
  return (
    <footer className={`${className} Footer`}>
      <div className="Footer">
              <p>© {new Date().getFullYear()} Vishnu Vaitheeswaran. Built with React.</p>
      </div>

    </footer>
  );
};

export default Footer;
