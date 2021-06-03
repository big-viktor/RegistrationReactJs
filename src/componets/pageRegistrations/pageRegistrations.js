/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import Registrations from '../Registration/registration';
import './pageRegistrations.css';
import PageButton from '../PageButton/pageButton';


 const pageRegistrations = () => {

    return (
      <>
      <div>
      <Registrations  label="Registration" placeholder1="email"placeholder2="password">
      <button className="btn"   >
      <PageButton label="created"/>
      </button>
        </Registrations>
      </div>
      </>
    );
  };
  


export default pageRegistrations;