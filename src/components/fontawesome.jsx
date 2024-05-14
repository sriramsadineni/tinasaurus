import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import the FontAwesomeIcon component.

function FontAwesome({icon,size,color}) {
  return (
    <FontAwesomeIcon
     icon={icon}
     size = {size}
     color = {color}
    />
  )
}

export default FontAwesome