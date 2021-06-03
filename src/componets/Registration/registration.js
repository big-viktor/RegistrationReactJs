/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-undef */
import React from 'react';
import './registration.css';
import { useHistory } from 'react-router-dom'


export const registration = ({
  label,
  placeholder1,
  placeholder2,
  children,
  addEmail,
  passwordText,
  textInput,
  email,
  password,
}) => {
  const history = useHistory();
  email =[]; 
  password =[];
  textInput = React.createRef();
  passwordText = React.createRef();
  addEmail = () =>{
    let pass = passwordText.current.value;
    let input = textInput.current.value;
    if( (typeof  textInput.current.value !== 'undefined' &&  textInput.current.value.indexOf('mail.com') === -1)){
      alert('you entered incorrect mail');
    }else{
      // console.log('items', this.props.items);
      email.push(input);
      password.push(pass);
      console.log(password);
      console.log(email);
      history.push('/Greet');
    }
    textInput.current.value = "";
    passwordText.current.value = "";
    
  };
    return (
      <>
      <div className="container-registration"> 
        <div className="content-regis">
          <h1 className="title-regis">{label}</h1>
          <div className="container-regis-input" >
              <form action="" >
                  <input
                  ref={textInput}
                   type="text" 
                   className="regis-input"
                    name="email"
                     placeholder={placeholder1}
                      required />
              </form>
              <form action="">
                  <input 
                  ref={passwordText}
                  type="text" 
                  className="regis-input"
                   name="password"
                    placeholder={placeholder2} 
                    required/>
              </form>
          </div>
          <div onClick={addEmail}>
              {children}
          </div>
        </div>
        <div>
          <div className="bacgroud-container"> </div>
        </div>
      </div>
      </>
    );
  };
  
 

export default registration;