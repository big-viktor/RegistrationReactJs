import React from 'react';
import Registrations from '../Registration/registration';
import './pageLog.css';
import PageButton from '../PageButton/pageButton';


const PageLog = () => {
    return (
      <>
      <div>
      <Registrations  label="Log" placeholder1="email"placeholder2="password">
      <button className="btn">
      <PageButton label="login" />
      </button>
        </Registrations>
      </div>
      </>
    );
};
  


export default PageLog;