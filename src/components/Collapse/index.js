import '../../styles/components/collapse.css';
import React, { useState } from 'react';

function Collapse(props) {
    const title = props.Title
    const paragraph = props.Paragraph
    const open = useState(false)

    return (
      <div className="collapse">
        <button onClick={() => open ? open = false : open = true  }>{title}</button>
        { open ? <div><p>{paragraph}</p></div> : <div></div> }        
      </div>
    );
}

export default Collapse;
