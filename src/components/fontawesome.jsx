import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import the FontAwesomeIcon component.
import { library } from '@fortawesome/fontawesome-svg-core'; // Import the library component.
import { fas } from '@fortawesome/pro-solid-svg-icons'; // Import all solid icons.
import { fal } from '@fortawesome/pro-light-svg-icons'; // Import all solid icons.
import { far } from '@fortawesome/pro-regular-svg-icons'; // Import all solid icons.
import { fat } from '@fortawesome/pro-thin-svg-icons'; // Import all solid icons.
library.add(fal, fas,far,fat); // Add all icons to the library so you can use them without importing them individually.

function FontAwesome({icon,size,color}) {

  return (
    <FontAwesomeIcon
     icon={icon}
     size = {size}
     color = {color}
    />
  )
}

export default FontAwesome;
