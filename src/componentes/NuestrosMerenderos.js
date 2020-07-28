import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Tarjeta from './Tarjeta';



const NuestrosMerenderos = () =>{
  return(

   <>
   <section id="nuestrosmerenderos" className="section3">
      <h1 style={{textAlign: 'center', paddingTop:"15px",  paddingBottom:"15px"}}>Nuestros merenderos y comederos</h1>
      <Container>
        <Row>
   <Tarjeta />
   <Tarjeta />
   <Tarjeta />
   <Tarjeta />
   </Row>
   </Container>
   </section>
   </>


  )
};

export default NuestrosMerenderos;