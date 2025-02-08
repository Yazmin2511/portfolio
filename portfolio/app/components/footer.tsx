import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
//import '../css/footer.css'; 

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>© 2025 Yazmin. Todos los derechos reservados.</p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://twitter.com/tu-usuario" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
