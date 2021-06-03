import React from 'react';
import './PageGreeting.css';
import PageButton from '../PageButton/pageButton';
import { useHistory } from 'react-router-dom'


 const PageGreeting = () => {
    const history = useHistory();
    return (
      <>
        <div className="container-greet">
          <div className="bacground-greet"> </div>
          <h1 className="title-greet">You came to our site</h1>
          <button className="btn" onClick={() => history.push('/Log')} >
            <PageButton label="Log out"/>
          </button>
        </div>
      </>
    );
  };
  


export default PageGreeting;