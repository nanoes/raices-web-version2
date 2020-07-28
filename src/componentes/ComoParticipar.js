import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import voluntario from '../images/voluntariado.png';
import donar from '../images/donar.png';



const ComoParticipar = () => {
    return ( 
        <>

    <div id="comoparticipar" className="section2">

        <h1 style={{textAlign: 'center'}}>Como puedo participar?</h1>
        <Row>
            <Col xs={12} md={6} className="d-flex align-items-stretch justify-content-center">
           <Card style={{ width: '25rem', boxShadow:'1px 2px 10px grey', borderRadius:'15px', margin:'20px'}}>
                <Card.Img variant="top" src={voluntario} />
                <Card.Body>
                    <Card.Title className="text-center">Quiero ser voluntario</Card.Title>
                    <Card.Text className="text-center">
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <button className="btn-btn">Quiero unirme</button>
                </Card.Body>
                </Card>
            </Col>

            <Col xs={12} md={6} className="d-flex align-items-stretch justify-content-center">
            <Card style={{ width: '25rem', boxShadow:'1px 2px 10px grey', borderRadius:'15px', margin:'20px'}}>
                <Card.Img variant="top" src={donar} />
                <Card.Body>
                    <Card.Title className="text-center">Quiero Donar</Card.Title>
                    <Card.Text className="text-center">
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <button className="btn-btn">Donar</button>
                </Card.Body>
                </Card>
            </Col>
        </Row>
    </div>

        </>

     );
}
 
export default ComoParticipar;