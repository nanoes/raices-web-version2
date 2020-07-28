import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import imagen1 from '../images/carousel1.JPG';

const Tarjeta = () =>{
    return(
       
<Col md={6} lg={4} xl={3} className="mb-4 text-center d-flex align-items-stretch justify-content-center" >
    <Card className="card">
        <Card.Body>
            <Card.Title className="mb-5">
         Hello, World!
            </Card.Title>
            <div>
    <img src={imagen1} className="card-img-top img-thumbnail"></img>
            </div>   
        </Card.Body>
        <Card.Footer>
            <p className="text-muted">This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.</p>
            <button className="btn-tarjeta">Donar</button>
        </Card.Footer>  
    </Card>
</Col>
    )
};

export default Tarjeta;