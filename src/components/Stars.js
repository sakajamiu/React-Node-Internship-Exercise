import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
const Stars = ({rating}) => {
    let stars = []
    for (let i = 0; i < rating; ++i) {
      stars.push(<FontAwesomeIcon icon= {faStar} key={i} style={{color:'#faa725'}}/>)
    }
  
    return (
      <i>{stars}</i>
        
     
    )
  }
  
  export default Stars