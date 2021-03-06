import React from "react";
import {Link} from 'react-router-dom';

//Styled
import styled from 'styled-components';

//Images
import athlete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';

const OurWork =()=>{

return(
   <Work> 
      <Movie>
         <h2>The Athlete</h2>
         <div className="line"></div>
         <Link to=''>
            <img src={athlete} alt="athlete" />
         </Link>
      </Movie>

      <Movie>
         <h2>The Racer</h2>
         <div className="line"></div>
         <Link to=''>
            <img src={goodtimes} alt="goodtimes" />
         </Link>
      </Movie>

      <Movie>
         <h2>Good Times</h2>
         <div className="line"></div>
         <Link to=''>
            <img src={theracer} alt="theracer" />
         </Link>
      </Movie>
   
   </Work>
)};


const Work = styled.div`
min-height: 100vh;
overflow: hidden;
padding: 1rem 4rem;
h2{
   padding: 1rem 0rem;
   font-weight:bold;
}
`

const Movie = styled.div`
padding:5rem;
.line{
   height: 0.5rem;
   background: #cccccc;
   margin-bottom: 3rem;
}
img{
   width: 100%;
   height: 70vh;
   object-fit: cover;
}
`

export default OurWork;