import React from "react";

const Footer = () => {
    useEffect(() => {
      const elements = document.querySelectorAll(".reveal");
  
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                entry.target.classList.add("active");
              }, 3000); // 3 seconds delay
            }
          });
        },
        { threshold: 0.2 }
      );
  
      elements.forEach(el => observer.observe(el));
  
      return () => observer.disconnect();
    }, []);
  return (
    <footer className="footer">
      <div className="Footer">
              <p>© {new Date().getFullYear()} Vishnu Vaitheeswaran. Built with React.</p>
      </div>

    </footer>
  );
};

export default Footer;
