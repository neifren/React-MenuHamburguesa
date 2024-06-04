import { useState } from 'react';
import './Cabecera.css'; 

const Cabecera = () =>{

    const [menu, setMenu] = useState(false);

    const toggleMenu = () =>{
        setMenu(!menu);
    }
    return(
        <body>
        <header className="Cabecera">
            <h1 className='Cabecera-h1'>
                <a href='#' className='Cabecera-a'>
                    Hola mundillo
                </a>
            </h1>

            <button 
                onClick={toggleMenu} 
            className='Cabecera-button'>
            <svg className='Cabecera-svg' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
            </svg>
            </button>

            <nav className= { `Cabecera-nav ${ menu ? 'isActive' : ''}`}>
                <ul className="Cabecera-ul">
                    <li className="Cabecera-li">
                        <ul></ul> 
                        <a href="#" className="Cabecera-a">Item 1</a></li>
                    <li className="Cabecera-li"><a href="#" className="Cabecera-a">Item 2</a></li>
                    <li className="Cabecera-li"><a href="#" className="Cabecera-a">Item 3</a></li>
                    <li className="Cabecera-li"><a href="#" className="Cabecera-a">Item 4</a></li>
                    <li className="Cabecera-li"><a href="#" className="Cabecera-a">Item 5</a></li>
                </ul>
            </nav>

            

        </header>

        
            <nav className='Menu-nav'>
                <ul className='Menu-ul'>
                    <li className="Menu-li"><a href="https://www.youtube.com/watch?v=bS2UJmROxCE" className="Menu-a">Item A</a></li>
                    <li className="Menu-li"><a href="https://www.youtube.com" className="Menu-a">Item B</a></li>
                    <li className="Menu-li"><a href="https://www.google.com" className="Menu-a">Item C</a></li>

                </ul>

                <ul className='Menu-ul'>
                    <li className="Menu-li"><a href="https://www.youtube.com/watch?v=bS2UJmROxCE" className="Menu-a">Item A</a></li>
                    <li className="Menu-li"><a href="https://www.youtube.com" className="Menu-a">Item B</a></li>
                    <li className="Menu-li"><a href="https://www.google.com" className="Menu-a">Item C</a></li>

                </ul>

                <ul className='Menu-ul'>
                    <li className="Menu-li"><a href="https://www.youtube.com/watch?v=bS2UJmROxCE" className="Menu-a">Item A</a></li>
                    <li className="Menu-li"><a href="https://www.youtube.com" className="Menu-a">Item B</a></li>
                    <li className="Menu-li"><a href="https://www.google.com" className="Menu-a">Item C</a></li>

                </ul>

            </nav>
        </body>

    )
}

export default Cabecera;
