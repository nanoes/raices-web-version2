import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../index.css';


const About = () => {
    return ( 
        <>
    <section id="about" className="section1" xs={12} md={4} >
        <Row>
            <Col className="col-sec1">
            <h1 >Raices Merlences</h1>
                <h2>Quines somos?</h2>
        </Col>
        <Col className="col-sec1">
        <div>
                <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
                </p>
                <button className="boton-about">Learn more</button>
            </div>
        </Col>
        </Row>
    </section>
    </>
     );
}
 
export default About;