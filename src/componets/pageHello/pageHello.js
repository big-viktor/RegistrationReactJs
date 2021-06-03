import React from 'react';
import { useHistory,NavLink } from 'react-router-dom'
import PageButton from '../PageButton/pageButton';
import './pageHello.css';


const pageHello = () => {
    return (
      <>
      <div className="container-hello"> 
        <div className="content-created"> 
        <NavLink to="/Regis">
          <button className="none">
            <PageButton label="created" />
          </button>
          </NavLink>
        </div>
        <div>
           <NavLink to="/Log">
            <button className="none" >
              <PageButton label="login"/>
            </button>
            </NavLink>   
          </div>
      </div>
      </>
    );
  };
  


export default pageHello;