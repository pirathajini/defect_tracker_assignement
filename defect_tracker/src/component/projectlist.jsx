import React, { Component } from 'react';
import Header from './header';
import Sidebar from './sidebar';
// import './projectlist.css';

import axios from 'axios';

class ProjectList extends Component {
    state = {data:[]};

     componentDidMount() {
         axios.get("http://localhost:8080/test/api/v1/project")
         .then(res=>
            {
                // console.log()
                if(res.status===200){
                    console.log("data get");
                }
                this.setState({data:res.data});
            }
            )
     }

     handleDelete=(id)=>{
        axios.delete("http://localhost:8080/test/api/v1/project/" + id)
        .then(res => {
        //   console.warn("Delete Service is working");
           this.refreshProject(res);
    
          alert(" Project deleted successfully");
        });
        }
        refreshProject() {
            axios.get("http://localhost:8080/test/api/v1/project")
            .then(res => {
            //   console.warn("Refresh Service is working");
              this.setState({ data:res.data });
            });
          }

    render() { 
        return ( 
            <div>

                <Header/>
                <Sidebar/>
<div>
                <div className="form-style-6">
                
<table>
    {/* <button class="btn1">Add </button> */}
 <a href="/projectadd"><th className="btn1" > <input type="button" value="Add"  /></th></a>
 
  <tr>
  <th>Project ID</th>
  <th>Project Name</th>
  <th>Project Discription</th>
  <th>Action</th>
  </tr>
  
  {this.state.data.map(d=>{
    return(<tr>
        <td>{d.id}</td>
        <td>{d.projectName}</td>
        <td>{d.projectDescription}</td>
        <td><input type="button" value="Delete" onClick={()=>this.handleDelete(d.id)}/></td>
        <td> <a href={`/edit/${ d.id }`}> <input type="button"  value="Edit"/> </a></td>
    </tr>)

    })}

</table>

                    </div>
                    
            </div>
            </div>
         );
    }
}
 
export default ProjectList;