import React from 'react';
import './pageButton.css';



const PageButton = ({label,addEmail}) => {
    return (
      <>
      <div className="container-button">
        <p className="text-button" onClick={addEmail} >{label}</p>
      </div>
      </>
    );
  };
  


export default PageButton;