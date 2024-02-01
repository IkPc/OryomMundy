import React, {useEffect} from 'react';
import './Main.scss';
import img from '../assets/aguia.jpg';
import Books from '../components/Books.jsx';
import Links from '../components/Links.jsx';
import Description from '../components/Description.jsx';
import Socials from '../components/Socials.jsx';

const Main = () => {
    return(
        <div className="main">
            <div className='header'>
                <img id="img1" src={img} alt="aguia explosao" />
            </div>
            <div className='container'>
                <div className='content'>
                    <center>
                        <Books />
                        <Links />
                        <Description />
                        <Socials />
                    </center>
                </div>
                <div className='footer'>
                    <center>
                        &copy; 2024 Sammaria Bahia. Todos os direitos reservados.
                    </center>
                </div>
            </div>
        </div>
    )
}

export default Main;