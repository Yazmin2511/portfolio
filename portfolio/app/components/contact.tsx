import React, { useRef,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import '../css/contactMe.css';
import emailjs from 'emailjs-com';

const contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  useEffect(() => {
    emailjs.init('_A6wNLM1akuFqyC7C'); // Reemplaza con tu public key
  }, []);


  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.sendForm('service_9x9awkb', 'template_1lpnpnq', form.current!)
      .then((result) => {
        console.log(result.text);
        alert('Mensaje enviado con éxito.');
      }, (error) => {
        console.log(error.text);
        alert('Hubo un error al enviar el mensaje. Inténtalo de nuevo.');
      });
  };
  return (
    <div id="contactme-container">
      <h2>Contacto</h2>
      <p>Puedes enviarme un mensaje a través del siguiente formulario:</p>
      <form ref={form} onSubmit={sendEmail}>
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="email">Correo Electrónico:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="message">Mensaje:</label>
        <textarea id="message" name="message" required></textarea>
        <button type="submit">Enviar</button>
      </form>
      <p>O encuéntrame en las siguientes redes sociales:</p>
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
  );
}

export default contact