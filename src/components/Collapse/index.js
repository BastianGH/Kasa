import '../../styles/components/collapse.css';
import arrow from "../../assets/imgs/arrow.png";
import React, { useState } from 'react';

function Collapse(props) {
    const [open, setOpen] = useState(false);
    const title = props.Title;
    const paragraph = props.Paragraph;

    const handleClick = () => {
      setOpen(!open);
    };

    return (
      <div className="collapse">
        <button className="collapse-button" onClick={handleClick}>
          <span className="collapse-button_text">{title}</span>
          <img className={`collapse-button_arrow ${open ? 'open' : ''}`} src={arrow} alt="flèche d'ouverture/fermeture" />
        </button>
        {open && <div className="collapse-content"><p className="collapse-content_text">{paragraph}</p></div>}
      </div>
    );
}

export default Collapse;
