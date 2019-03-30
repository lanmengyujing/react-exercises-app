
import useEventListener from '../../hooks/useEventListener';
import React, {useState } from 'react';

// Usage
export default function View(){
    // State for storing mouse coordinates
    const [coords, setCoords] = useState({x: 0, y:0});
    
    // Add event listener using our hook
    useEventListener('click', ({ clientX, clientY }) => {
      // Update coordinates
      setCoords({x: clientX, y:clientY});
    });
    
    return (
      <h1>
        The mouse position is ({coords.x}, {coords.y})
      </h1>
    );
  }
  
  