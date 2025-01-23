import React, { useEffect } from 'react';
import '../css/header.css';
import { typeWriter } from '~/utils/typeWriter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import {faStar,faFolderOpen, faMessage } from '@fortawesome/free-solid-svg-icons';

const header: React.FC = () => {
  useEffect(() => { 
    typeWriter('typed-name','Hola, soy Yazmin\ny soy Desarrolladora Web' , 100);
  }, []);
  return (
    <header className="nunito-bold"> 
      
      <h1 id="typed-name" className='gradient-text'></h1> 
      <nav> 
        <a href="#about"><FontAwesomeIcon icon={faStar} /> Sobre Mí</a> 
        <a href="#projects"><FontAwesomeIcon icon={faFolderOpen} /> Proyectos</a> 
        <a href="#contact"><FontAwesomeIcon icon={faMessage} /> Contacto</a> 
      </nav> 
    </header>
  );
}

export default header