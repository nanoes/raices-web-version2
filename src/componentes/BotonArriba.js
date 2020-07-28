import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { animateScroll as scroll } from "react-scroll";

const BotonArriba = () => {

    const scrollToTop = () => {
        scroll.scrollToTop(); 
    };

    return ( 

        <button className="boton-arriba"
                onClick={scrollToTop}
                ><FontAwesomeIcon icon={faChevronUp} />
        </button>
     );
}
 
export default BotonArriba;