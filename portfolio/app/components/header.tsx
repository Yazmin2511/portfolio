import React, { useEffect } from 'react';
import '../css/header.css';
import { typeWriter } from '~/utils/typeWriter';

const header: React.FC = () => {
  useEffect(() => { 
    typeWriter('typed-name','Hola, soy Yazmin\ny soy Desarrolladora Web' , 100);
  }, []);
  return (
    <header className="nunito-bold"> 
      
      <h1 id="typed-name" className='gradient-text'></h1> 
      <nav> 
        <a href="#about">Sobre Mí</a> 
        <a href="#projects">Proyectos</a> 
        <a href="#contact">Contacto</a> 
      </nav> 
    </header>
  );
}

export default header