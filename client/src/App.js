import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1
    });

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-content">
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Hi, I'm <span className="highlight">Keneith Forro</span></h1>
            <p className="subtitle">Frontend Developer/Backend Developer</p>
            <p className="description">
             
            </p>
            <button className="cta-button" onClick={scrollToProjects}>View My Work</button>
          </div>
          <div className="hero-image">
            <img src="pongz.png" alt="Keneith Forro" />
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Im a passionate developer with the love of creating, designing and developing applications.
              I have the ability to adapt in every working environment and I'm always looking for new challenges.
              I can learn new technologies quickly and can adapt to it without any problems.
              I excel with the frontend coding and can work well with the backend coding as well.
              Besides programming, I also work as a freelancer photographer which is one of my passions.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat">
              <h3>1</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat">
              <h3>3</h3>
              <p>Projects Completed</p>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="skills">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Frontend</h3>
            <div className="skill-items">
              <div className="skill-item">
                <div className="skill-info">
                  <span>React</span>
                  <span>40%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '40%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-info">
                  <span>JavaScript</span>
                  <span>40%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '40%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-info">
                  <span>HTML/CSS</span>
                  <span>65%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '65%' }}></div>
                </div>
              </div>
            </div>
          </div>
          <div className="skill-category">
            <h3>Backend</h3>
            <div className="skill-items">
              <div className="skill-item">
                <div className="skill-info">
                  <span>Node.js</span>
                  <span>30%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '30%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-info">
                  <span>Express</span>
                  <span>20%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '20%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-info">
                  <span>PHP</span>
                  <span>50%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '50%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-info">
                  <span>MySQL</span>
                  <span>50%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '50%' }}></div>
                </div>
              </div>
            </div>
          </div>
          <div className="skill-category">
            <h3>Tools</h3>
            <div className="skill-items">
              <div className="skill-item">
                <div className="skill-info">
                  <span>Git</span>
                  <span>45%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '45%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-info">
                  <span>VS Code</span>
                  <span>80%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-info">
                  <span>Notepad++</span>
                  <span>70%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '70%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="projects">
        <h2>Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-image">
              <img src="laliga.png" alt="LaLiga Esport Project" />
              <div className="project-overlay">
                <div className="project-tech">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>PHP</span>
                  <span>MySQL</span>
                </div>
              </div>
            </div>
            <div className="project-content">
              <h3>LaLiga Esport</h3>
              <p>A website about esports help the players and users to find, create and join teams that can be used to join local esports tournaments. This website can be also used to buy electronics items</p>
              <div className="project-links">
                <a href="#" className="project-link">View Live</a>
                <a href="#" className="project-link">GitHub</a>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div className="project-image">
              <img src="boteco.png" alt="Boteco Project" />
              <div className="project-overlay">
                <div className="project-tech">
                <span>MongoDB</span>
                  <span>Express</span>
                  <span>Node.js</span>
                  <span>React</span>
                
                </div>
              </div>
            </div>
            <div className="project-content">
              <h3>Boteco</h3>
              <p>A web application that help the environment by picking up bottles that can be converted into points and can be redeemed for rewards.</p>
              <div className="project-links">
                <a href="#" className="project-link">View Live</a>
                <a href="#" className="project-link">GitHub</a>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div className="project-image">
              <img src="StayIn.png" alt="StayIn Project" />
              <div className="project-overlay">
                <div className="project-tech">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>PHP</span>
                  <span>MySQL</span>
                </div>
              </div>
            </div>
            <div className="project-content">
              <h3>StayIn</h3>
              <p>About a wesbite that help the peoples to find a hotel to stay in a specific city and can be used to book a hotel room.</p>
              <div className="project-links">
                <a href="#" className="project-link">View Live</a>
                <a href="#" className="project-link">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Get In Touch</h2>
        <div className="contact-content">
          <form className="contact-form">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message"></textarea>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
          <div className="contact-info">
            <div className="contact-item">
              <h3>Email</h3>
              <p>bagsakology123@gmail.com</p>
              <p>forrokeneith@gmail.com</p>
              <p>keynetforro@gmail.com</p>
            </div>
            <div className="contact-item">
              <h3>Location</h3>
              <p>Iloilo City, Philippines</p>
            </div>
            <div className="contact-item">
              <h3>Social</h3>
              <div className="social-links">
                <a href="https://github.com/kyynett123">GitHub</a>
                <a href="https://www.facebook.com/Rakker.kf/">Facebook</a>
                <a href="https://www.instagram.com/kyynett/">Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">

      </footer>
    </div>
  );
}

export default App;
