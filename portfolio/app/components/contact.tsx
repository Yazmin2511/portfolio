import React, { useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import emailjs from 'emailjs-com';
import { useTheme } from '../components/themeContex';

const Contact: React.FC = () => {
  const { theme } = useTheme();
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
    <div id="contactme-container" className={`p-4 ${theme === 'light' ? 'bg-background-light text-text-light' : 'bg-background-dark text-text-dark'}`}>
      <h2 className="text-4xl font-bold">Contacto</h2>
      <p>Puedes enviarme un mensaje a través del siguiente formulario:</p>
      <form ref={form} onSubmit={sendEmail} className="mt-4">
        <label htmlFor="name" className="block mb-2">
          <span className="text-gray-700 dark:text-gray-300">Nombre:</span>
          <input type="text" id="name" name="name" required className="mt-1 block w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring focus:ring-opacity-50" />
        </label>
        <label htmlFor="email" className="block mb-2">
          <span className="text-gray-700 dark:text-gray-300">Correo Electrónico:</span>
          <input type="email" id="email" name="email" required className="mt-1 block w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring focus:ring-opacity-50" />
        </label>
        <label htmlFor="message" className="block mb-2">
          <span className="text-gray-700 dark:text-gray-300">Mensaje:</span>
          <textarea id="message" name="message" required className="mt-1 block w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring focus:ring-opacity-50" />
        </label>
        <button type="submit" className="mt-4 p-2 bg-primary-light dark:bg-primary-dark hover:bg-primary-light dark:hover:bg-primary-dark text-white rounded-md">Enviar</button>
      </form>
      <p className="mt-4">O encuéntrame en las siguientes redes sociales:</p>
      <div className="social-icons flex space-x-4 mt-2">
        <a href="https://www.linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-600">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="https://twitter.com/tu-usuario" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-300">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
      </div>
    </div>
  );
}

export default Contact;
