import React, { useEffect } from 'react';
import { typeWriter } from '~/utils/typeWriter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import {faStar,faFolderOpen, faMessage } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../components/themeContex';

const header: React.FC = () => {
  useEffect(() => { 
    typeWriter('typed-name','Hola, soy Yazmin\ny soy Desarrolladora Web' , 100);
  }, []);
  const { theme, toggleTheme } = useTheme();
  return (
    <header className={`p-4 ${theme === 'light' ? 'bg-primary-light text-text-light' : 'bg-primary-dark text-text-dark'}`}> 
      
      <h1 id="typed-name" className="text-2xl font-bold"></h1> 
      <nav> 
        <a href="#about"><FontAwesomeIcon icon={faStar} /> Sobre Mí</a> 
        <a href="#projects"><FontAwesomeIcon icon={faFolderOpen} /> Proyectos</a> 
        <a href="#contact"><FontAwesomeIcon icon={faMessage} /> Contacto</a> 
      </nav> 

      <button onClick={toggleTheme} className="ml-4 p-2 bg-yellow-400 hover:bg-yellow-500 rounded">
        {theme === 'light' ? 'Modo Oscuro' : 'Modo Claro'}
      </button>


    </header>
  );
}

export default header