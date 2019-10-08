import React, { Component } from 'react';
import pic1 from '../pic1.png';


class Sidebar extends Component {
    state = {  }
    
   
    render() { 
        return ( 
          
         
<div id="sidebar">

                {/* <div className="toggle-btn" onClick="toggleSliderbar()">
                    <span></span>
                    <span></span>
                    <span></span>
                    
                </div> */}
               
                <img alt = "logoImg" src={pic1}/>  

                        
<ul >
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

  
  <li  className="fa fa-area-chart" >  &nbsp;  &nbsp; &nbsp; < a href="/dashboard"  >  Dashboard</a></li> 
 
  <div className="dropdown">

     <li className="fa fa-desktop" > &nbsp;  &nbsp; &nbsp; Projects</li>
    <div className="dropdown-content">
            <a href="/project"> Add new project</a>
           
            <a href="/projectlist">Add List</a>
            </div>
   </div>
  
    
    <li  className="fa fa-bug">  &nbsp;  &nbsp; &nbsp; < a href="/defect"> Defects </a></li>
    <div className="dropdown" >
    

    <li  className="fa fa-user-circle">  &nbsp;  &nbsp; &nbsp;  Users</li>
<div className="dropdown-content" >
            <a href="#">Profile</a>
            <a href="#">Privillage</a>
            <a href="#">Experience</a>
            </div>
            </div>

    <li className="fa fa-cogs"> &nbsp;  &nbsp; &nbsp; Settings</li>
    <li className="fa fa-hourglass-o"> &nbsp;  &nbsp; &nbsp; Integration</li>
 
    
</ul>
<i className="fas fa-user"></i> 
  <i className="far fa-user"></i> 
</div>
   
           
         );
    }
}
 
export default Sidebar;