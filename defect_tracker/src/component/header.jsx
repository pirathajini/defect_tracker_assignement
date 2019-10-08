import React, { Component } from 'react';


class Header extends Component {
    state = {  }
    render() { 
        return ( 

         
<div className="header">

  {/* <a href="#default" className="logo"></a> */}
  <div className="header-right"> 
  <b className="active" href="#contact"> &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; DEFECT TRACKER</b>
   
    <b href="#about">LOGIN</b> 
    {/* <h2><a href="#" id="loginform">Login</a> | <a href="#">Register</a></h2>
    <div class="login">
      <div class="arrow-up"></div>
      <div class="formholder">
        <div class="randompad">
           <fieldset>
             <label name="email">Email</label>
             <input type="email" value="example@example.com" />
             <label name="password">Password</label>
             <input type="password" />
             <input type="submit" value="Login" />
 
           </fieldset>
        </div>
      </div>
    </div> */}
   
  </div>
</div>


           
         );
    }
}
 
export default Header;