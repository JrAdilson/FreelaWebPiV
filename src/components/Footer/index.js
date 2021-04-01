import React from 'react';
import style from './style.css';
import location from '../../assets/img/location.png'
import phone from '../../assets/img/phone.png'
import mail from '../../assets/img/mail.png'

function Footer() {
    return (
        <div className="q1-footer">
            {/*<div className="location">
                <img src={location}></img>
                Rua Felipe Lima, nº 24, Zona da Mata - Ponte Firme/MG
            </div>

            <div className="phone">
                <img src={phone}></img>
                (34) 3824-2424 
            </div>

            <div className="mail">
                <img src={mail}></img>
                claudiogroup@rinhadegalinha.com 
            </div>

            <div className="hr">
                <hr/>
     </div>*/}
            <div className="privacity">
                <a href=''>Politica de Privacidade</a> 
            </div>

            <div className="copyright">
                © FREELA. Todos os diretos reservados
            </div>

        </div>
    )
}
export default Footer;