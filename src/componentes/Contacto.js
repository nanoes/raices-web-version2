import React from 'react';
import Col from 'react-bootstrap/Col';
import Row  from 'react-bootstrap/Row';
import facebook from '../images/facebook.png';
import twitter from '../images/twitter.png';
import instagram from '../images/instagram.png';




const Contacto = () =>{
    return(
        <section className="section4">
            <Row><Col>
            <div className="contacto">
                    <h1>Contactanos!</h1>
                    <input type="text" placeholder="Nombre y apellido"></input>
                    <input type="email" placeholder="e-mail"></input>
                    <input className="mensaje" type="text" placeholder="Mensaje"></input>
                    <button className="btn-tarjeta">Enviar</button>
            </div>
            </Col>
            <Col>
            <h1>Seguinos en Redes!</h1>
            <a href="#">
           <img className="redes" src={facebook}/>
            </a>
            <a href="#">
           <img className="redes" src={instagram}/>
            </a>
            <a href="#">
           <img className="redes"  src={twitter}/>
            </a>

            </Col>
            </Row>
        </section>

    )
};

export default Contacto;